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

// const DeleteVenue = async (req,res) => {
//   try {
//     const { user_id, venue_id, title, description } = req.body;
//     await Venue.destroy({ where: {user_id: parseInt(user_id), venue_id: parseInt(venue_id), title: title, description: description},
//     returning: true
//   })
//     res.send({ message: `Deleted Venue with a title of ${title}`})
//   } catch (error) {
//     throw error
//   }
// }

module.exports = {
  GetVenues,
  GetVenueByIdWithReviews,
  CreateVenue,
  UpdateVenue
}