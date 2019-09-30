import express from 'express'
const router = express.Router()

router.get('/', function(req, res) {
  res.send('api')
})
router.get('/test', function(req, res) {
  res.send('test')
})
export default router
