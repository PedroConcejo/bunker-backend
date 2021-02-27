const mongoose = require('mongoose')

const routinesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['AMRAP', 'EMON', 'For Time', 'Metcon', 'Tabata', 'Heroes', 'The Girls', 'WOD', 'Warm Up'
    ]
  }
})

const routinesModel = mongoose.model('routines', routinesSchema)
module.exports = routinesModel
