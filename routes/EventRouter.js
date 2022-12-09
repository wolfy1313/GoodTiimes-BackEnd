const router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/EventController')

router.get('/', controller.GetAllEvents)
router.get('/venue/:venue_id', controller.GetEventsByVenueId)
router.get('/user/:user_id', controller.GetEventsByUserId)

router.post('/',
// middleware.stripToken,
// middleware.verifyToken, 
controller.CreateEvent)

router.put('/update/',
// middleware.stripToken,
// middleware.verifyToken, 
controller.UpdateEvent)

router.delete('/delete',
// middleware.stripToken,
// middleware.verifyToken, 
controller.DeleteEvent)


module.exports = router


// router.get('/:event_id', controller.GetEventById)