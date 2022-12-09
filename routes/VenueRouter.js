const router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/VenueController')

router.get('/', controller.GetVenues)
router.get('/:venue_id', controller.GetVenueByIdWithReviews)

module.exports = router