const { Event } = require('../models')

const GetAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll()
    res.send(events)
  } catch (error) {
    throw error
  }
}

const GetEventsByUserId = async (req, res) => {
  try {
    const events = await Event.findAll({
      where: { user_id: req.params.user_id}
    })
    res.send(events)
  } catch (error) {
    throw error
  }
}
const GetEventsByVenueId = async (req, res) => {
  try {
    const events = await Event.findAll({
      where: { venue_id: req.params.venue_id}
    })
    res.send(events)
  } catch (error) {
    throw error
  }
}

const CreateEvent = async (req,res) => {
  try {
    const newEvent = await Event.create({ ...req.body })
    res.send(newEvent)
  } catch (error) {
    throw error
  }
}

const UpdateEvent = async (req,res) => {
  try {
    const {user_id, venue_id} = req.body;
    const updatedEvent = await Event.update(req.body, {
      where: {user_id: parseInt(user_id), venue_id: parseInt(venue_id)},
      returning: true
    })
    res.send(updatedEvent)
  } catch (error) {
    throw error
  }
}

const DeleteEvent = async (req,res) => {
  try {
    const { user_id, venue_id, title, description } = req.body;
    await Event.destroy({ where: {user_id: parseInt(user_id), venue_id: parseInt(venue_id), title: title, description: description},
    returning: true
  })
    res.send({ message: `Deleted Event with a title of ${title}`})
  } catch (error) {
    throw error
  }
}



module.exports = {
  CreateEvent,
  GetAllEvents,
  UpdateEvent,
  DeleteEvent,
  // GetEventById,
  GetEventsByUserId,
  GetEventsByVenueId
}