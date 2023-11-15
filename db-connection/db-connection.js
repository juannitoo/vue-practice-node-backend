const mongoose = require('mongoose')
require('dotenv').config()

const url = process.env.mongoDbAtlasUrl

const connection = mongoose.connect( url,
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.dbName })
  .then(() => console.log('Connexion à MongoDB Atlas réussie, state : ', mongoose.connection.readyState))
  .catch(() => console.log('Connexion à MongoDB échouée ! state : ', mongoose.connection.readyState))


module.exports = connection