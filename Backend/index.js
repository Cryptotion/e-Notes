const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = process.env.PORT || 5000


app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

if (process.env.NODE_ENV == "production")


app.listen( () => {
  console.log(`iNotebook backend listening at https://reacts44.herokuapp.com/`)
})