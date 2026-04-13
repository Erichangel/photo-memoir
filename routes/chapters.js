const express = require('express');
const router = express.Router();
const Chapter = require('../models/Chapter');

// 获取章节列表
router.get('/', async (req, res) => {
  try {
    const chapters = await Chapter.find().sort({ dateStart: 1 });
    res.json(chapters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 创建新章节
router.post('/', async (req, res) => {
  try {
    const chapter = new Chapter(req.body);
    await chapter.save();
    res.json(chapter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 获取章节详情
router.get('/:id', async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params.id);
    res.json(chapter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 更新章节
router.put('/:id', async (req, res) => {
  try {
    const chapter = await Chapter.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(chapter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 删除章节
router.delete('/:id', async (req, res) => {
  try {
    await Chapter.findByIdAndDelete(req.params.id);
    res.json({ message: '章节删除成功' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;