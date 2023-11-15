const User = require('./models/user')
const express = require('express')
const userRoutes = require('./routes/users')
require('dotenv').config()

const app = express()
const cors = require("cors")
const router = express.Router()

app.use(express.json())

const connectionBdd = require('./db-connection/db-connection')

const corsOptions = {
  origin: ["http://localhost:5173",],
  allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin', 'Authorization', 'Accept', 'Origin', 'X-Requested-With', 'Content'],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  credentials: true,
  optionsSuccessStatus: 200, // For legacy browser support
}

app.use(cors(corsOptions))

// test image ecs service aws pour vérifier le déploiement de la bonne image lors d'une maj
app.get('/', (req, res, next) => {
  res.status(200).json({ tentative: "4" })
  next()
})

app.use('/api/users', userRoutes)



module.exports = app