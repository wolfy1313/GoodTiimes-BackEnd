const router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/User_PartyController')

router.get('/', controller.GetAllUser_Parties)
router.get('/party/:party_id', controller.GetUser_PartiesByPartyId)
router.get('/user/:user_id', controller.GetUser_PartiesByUserId)

router.post('/',
// middleware.stripToken,
// middleware.verifyToken, 
controller.CreateUser_Party)

router.put('/update/',
// middleware.stripToken,
// middleware.verifyToken, 
controller.UpdateUser_Party)

router.delete('/delete',
// middleware.stripToken,
// middleware.verifyToken, 
controller.DeleteUser_Party)


module.exports = router


// router.get('/:event_id', controller.GetEventById)