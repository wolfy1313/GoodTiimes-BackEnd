const { Review, User, Venue } = require('../models')

const GetReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll()
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

const GetReviewsByUser = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      where: { user_id: req.params.user_id}
    })
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

const GetReviewsByVenue = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      where: { venue_id: req.params.venue_id}
    })
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetReviews,
  GetReviewsByUser,
  GetReviewsByVenue
}