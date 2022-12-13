const { User, Party, Comment, User_Party } = require('../models')

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

const GetUserByIdWithUser_Parties = async (req, res) => {
  try {
    const userUser_Parties = await User.findByPk(req.params.user_id, {
      include: {model: Party, through: User_Party, as:'user_party'}
    })
    res.send(userParties)
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
  GetUserByIdWithUser_Parties,
  GetUsers
}