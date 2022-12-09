const router = require('express').Router()
const controller = require('../controllers/ReviewController')

router.get('/', controller.GetReviews)
router.get('/user/:user_id', controller.GetReviewsByUser)
router.get('/venue/:venue_id', controller.GetReviewsByVenue)

module.exports = router