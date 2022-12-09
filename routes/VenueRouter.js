const router = require('express').Router()
const controller = require('../controllers/VenueController')

router.get('/', controller.GetVenues)
router.get('/:venue_id', controller.GetVenueByIdWithReviews)
router.put('/update/:venue_id', controller.UpdateVenue)

module.exports = router