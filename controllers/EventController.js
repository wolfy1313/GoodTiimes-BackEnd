const { Event } = require('../models')

const GetAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll()
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



module.exports = {
  CreateEvent,
  GetAllEvents
}