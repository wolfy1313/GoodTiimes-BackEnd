const router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/UserController')

router.get(
  '/:user_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.GetUserByIdWithUser_Parties
)

router.get('/',
// middleware.stripToken,
// middleware.verifyToken, 
controller.GetUsers)



module.exports = router