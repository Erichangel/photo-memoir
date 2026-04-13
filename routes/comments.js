const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// 获取章节评论/弹幕
router.get('/chapter/:chapterId', async (req, res) => {
  try {
    const comments = await Comment.find({ chapterId: req.params.chapterId });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 创建评论/弹幕
router.post('/', async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 删除评论
router.delete('/:id', async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ message: '评论删除成功' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;