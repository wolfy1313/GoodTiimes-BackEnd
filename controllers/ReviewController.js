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

const CreateReview = async (req, res) => {
  try {
    const newReview = await Review.create({ ...req.body })
    res.send(newReview)
  } catch (error) {
    throw error
  }
}

const UpdateReview = async (req, res) => {
  try {
    const {user_id, venue_id} = req.body;
    const updatedReview = await Review.update(req.body, {
      where: {user_id: parseInt(user_id), venue_id: parseInt(venue_id)},
      returning: true
    })
    res.send(updatedReview)
  } catch (error) {
    throw error
  }
}

const DeleteReview = async (req, res) => {
  try {
    const { user_id, venue_id, title, review } = req.body;
    await Review.destroy({ where: {user_id: parseInt(user_id), venue_id: parseInt(venue_id), title: title, review: review},
    returning: true
  })
    res.send({ message: `Deleted Review with a title of ${title}`})
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetReviews,
  GetReviewsByUser,
  GetReviewsByVenue,
  CreateReview,
  UpdateReview,
  DeleteReview
}