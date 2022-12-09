const router = require('express').Router()
const controller = require('../controllers/ReviewController')

router.get('/', controller.GetReviews)

router.post('/postReview',
// middleware.stripToken,
// middleware.verifyToken, 
controller.CreateReview)

router.get('/user/:user_id', controller.GetReviewsByUser)
router.get('/venue/:venue_id', controller.GetReviewsByVenue)

router.put('/update',
// middleware.stripToken,
// middleware.verifyToken,
controller.UpdateReview)

router.delete('/delete',
// middleware.stripToken,
// middleware.verifyToken, 
controller.DeleteReview)

module.exports = router