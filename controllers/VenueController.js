const { Venue, User, Review } = require('../models')

const GetVenues = async (req,res) => {
  try {
    const venues = await Venue.findAll()
    res.send(venues)
  } catch (error) {
    throw error
  }
}

const GetVenueByIdWithReviews = async (req,res) => {
  try {
    const venue = await Venue.findByPk(req.params.venue_id, {
      include: {model: User, through: Review, as: 'venue_reviews'}
    })
    res.send(venue)
  } catch (error){
    throw error
  }
}

module.exports = {
  GetVenues,
  GetVenueByIdWithReviews
}