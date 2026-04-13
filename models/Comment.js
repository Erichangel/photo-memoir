const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  chapterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  userName: {
    type: String,
    required: true
  },
  userColor: {
    type: String,
    default: '#E91E63'
  },
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['danmu', 'comment'],
    default: 'comment'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Comment', commentSchema);