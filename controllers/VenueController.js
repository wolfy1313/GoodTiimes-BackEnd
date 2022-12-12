const { Venue, User, Review, Event } = require('../models')

const GetVenues = async (req,res) => {
  try {
    const venues = await Venue.findAll({
      include: [
        {model: User, through: Review, as: 'venue_reviews'},
        {model: User, through: Event, as:'venue_event'}
      ]
    })
    res.send(venues)
  } catch (error) {
    throw error
  }
}

const GetVenueByIdWithReviewsAndEvents = async (req,res) => {
  try {
    const venue = await Venue.findByPk(req.params.venue_id, {
      include: [
        {model: User, through: Review, as: 'venue_reviews'},
        {model: User, through: Event, as:'venue_event'}
      ]
    })
    res.send(venue)
  } catch (error){
    throw error
  }
}

const CreateVenue = async (req,res) => {
  try {
    const newVenue = await Venue.create({ ...req.body })
    res.send(newVenue)
  } catch (error) {
    throw error
  }
}

const UpdateVenue = async (req,res) => {
  try {
    let venue_id = parseInt(req.params.venue_id)
    const updatedVenue = await Venue.update(req.body, {
      where: {id: venue_id},
      returning: true
    })
    res.send(updatedVenue)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetVenues,
  GetVenueByIdWithReviewsAndEvents,
  CreateVenue,
  UpdateVenue
}