const express = require('express');
const router = express.Router();
const Photo = require('../models/Photo');
const multer = require('multer');
const path = require('path');

// 配置文件上传
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/photos');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'photo-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// 上传照片
router.post('/', upload.single('photo'), async (req, res) => {
  try {
    const photo = new Photo({
      chapterId: req.body.chapterId,
      filename: req.file.filename,
      path: '/uploads/photos/' + req.file.filename
    });
    await photo.save();
    res.json(photo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 获取章节照片
router.get('/chapter/:chapterId', async (req, res) => {
  try {
    const photos = await Photo.find({ chapterId: req.params.chapterId });
    res.json(photos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 删除照片
router.delete('/:id', async (req, res) => {
  try {
    await Photo.findByIdAndDelete(req.params.id);
    res.json({ message: '照片删除成功' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;