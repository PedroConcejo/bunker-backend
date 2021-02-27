const mongoose = require('mongoose')

const movementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['Clean', 'Snatch', 'Back Squat', 'Front Squat', 'Deadlift', 'Shoulder Press', 'Push Press', 'Push Jerk', 'Sumo Deadlift High Pull', 'Overhead Squat'
    ]
  }
})

const movementModel = mongoose.model('movement', movementSchema)
module.exports = movementModel
