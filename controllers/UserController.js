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

const GetUsers = async (req,res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error){
    throw error
  }
}


module.exports = {
  getUserById,
  GetUsers
}