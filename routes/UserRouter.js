const router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/UserController')

router.get(
  '/:user_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.getUserById
)

module.exports = router