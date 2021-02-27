const mongoose = require('mongoose')

const recordSchema = new mongoose.Schema(
  {
    movement: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'movement'
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user'
    },
    createdAt: {
      type: Number,
      default: Date.now()
    }
  }
)

const recordModel = mongoose.model('record', recordSchema)

module.exports = recordModel
