const { User_Party } = require('../models')

const GetAllUser_Parties = async (req, res) => {
  try {
    const user_parties = await User_Party.findAll()
    res.send(user_parties)
  } catch (error) {
    throw error
  }
}

const GetUser_PartiesByUserId = async (req, res) => {
  try {
    const user_parties = await User_Party.findAll({
      where: { user_id: req.params.user_id}
    })
    res.send(user_parties)
  } catch (error) {
    throw error
  }
}
const GetUser_PartiesByPartyId = async (req, res) => {
  try {
    const user_parties = await User_Party.findAll({
      where: { party_id: req.params.party_id}
    })
    res.send(user_parties)
  } catch (error) {
    throw error
  }
}

const CreateUser_Party = async (req,res) => {
  try {
    const newUser_Party = await User_Party.create({ ...req.body })
    res.send(newUser_Party)
  } catch (error) {
    throw error
  }
}

const UpdateUser_Party = async (req,res) => {
  try {
    const {user_id, party_id} = req.body;
    const updatedUser_Party = await User_Party.update(req.body, {
      where: {user_id: parseInt(user_id), party_id: parseInt(party_id)},
      returning: true
    })
    res.send(updatedUser_Party)
  } catch (error) {
    throw error
  }
}

const DeleteUser_Party = async (req,res) => {
  try {
    const { user_id, party_id } = req.body;
    await User_Party.destroy({ where: {user_id: parseInt(user_id), party_id: parseInt(party_id)},
    returning: true
  })
    res.send({ message: `Deleted User_Party with an id of ${party_id}`})
  } catch (error) {
    throw error
  }
}



module.exports = {
  CreateUser_Party,
  GetAllUser_Parties,
  UpdateUser_Party,
  DeleteUser_Party,
  GetUser_PartiesByUserId,
  GetUser_PartiesByPartyId
}