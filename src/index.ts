/* eslint-disable @typescript-eslint/no-use-before-define */
import express from 'express'
import path from 'path'
import createError from 'http-errors'
import apiRouter from './routes/api'
import config from 'config'
const dbConfig: any = config.get('db')

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res): void => {
  res.render('index')
})

app.use('/api', apiRouter)

app.get('/config', (req, res): void => {
  res.send(dbConfig.testMsg)
})

app.use(function(req, res, next) {
  next(createError(404))
})

const port = process.env.PORT || '8080'
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
