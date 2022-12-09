const { User, Venue, Review, Event } = require('../models')

const getUserById = async(req,res) => {
  try {
    const currentUser = await User.findAll({
      where: {id: req.params.user_id}
    })
    res.send(currentUser)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getUserById
}