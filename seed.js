const seeder = require('mongoose-seed')

require('dotenv').config()

const MOVEMENT = require('./movement.json')
const ROUTINES = require('./routines.json')

seeder.connect(process.env.MONGO_URL + process.env.MONGO_DB, function () {
  seeder.loadModels(['api/models/movement.model.js'])
  seeder.clearModels(['movement'], function () {
    seeder.populateModels(MOVEMENT, function () {
      seeder.disconnect()
    })
  })
})

seeder.connect(process.env.MONGO_URL + process.env.MONGO_DB, function () {
  seeder.loadModels(['api/models/routines.model.js'])
  seeder.clearModels(['routines'], function () {
    seeder.populateModels(ROUTINES, function () {
      seeder.disconnect()
    })
  })
})
