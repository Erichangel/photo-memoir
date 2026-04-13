const express = require('express');
const router = express.Router();
const Video = require('../models/Video');
const multer = require('multer');
const path = require('path');

// 配置文件上传
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/videos');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'video-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// 上传视频
router.post('/', upload.single('video'), async (req, res) => {
  try {
    const video = new Video({
      chapterId: req.body.chapterId,
      filename: req.file.filename,
      path: '/uploads/videos/' + req.file.filename,
      duration: req.body.duration
    });
    await video.save();
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 获取章节视频
router.get('/chapter/:chapterId', async (req, res) => {
  try {
    const videos = await Video.find({ chapterId: req.params.chapterId });
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 删除视频
router.delete('/:id', async (req, res) => {
  try {
    await Video.findByIdAndDelete(req.params.id);
    res.json({ message: '视频删除成功' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;