require('dotenv').config()
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const ctrl = require('./controller')
const express = require('express'),
  massive = require('massive'),
  session = require('express-session')


const app = express()
app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 150}
}))

massive(CONNECTION_STRING)
  .then(db => {
    app.set('db', db)
    console.log('database connected')

    app.listen(SERVER_PORT, () => {
      console.log(`server on ${SERVER_PORT}`)
    })
  })


  app.post('/auth/register', ctrl.register)
  // app.post('/auth/login', ctrl.login)