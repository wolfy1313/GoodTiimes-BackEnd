const { Party, User, Comment, User_Party } = require('../models')

const GetParties = async (req,res) => {
  try {
    const parties = await Party.findAll({
      include: [
        // {model: User, through: Review, as: 'venue_reviews'},
        {model: User, through: User_Party, as:'party_user'}
      ]
    })
    res.send(parties)
  } catch (error) {
    throw error
  }
}

const GetPartyByIdWithUser_Parties = async (req,res) => {
  try {
    // let venue_id = parseInt(req.params.venue_id)
    const party = await Party.findAll({where: {id: req.params.party_id}, 
      include: [
        {model: User, through: User_Party, as:'party_user'}
        // {model: User, through: { attributes: ['description']}, as: 'venue_event'},
        // {model: User, through: Review, as:'venue_reviews'}
      ]
    })
    res.send(party)
  } catch (error){
    throw error
  }
}

const CreateParty = async (req,res) => {
  try {
    const newParty = await Party.create({ ...req.body })
    res.send(newParty)
  } catch (error) {
    throw error
  }
}

const UpdateParty = async (req,res) => {
  try {
    let party_id = parseInt(req.params.party_id)
    const updatedParty = await Party.update(
      {...req.body}, 
      {where: {id: party_id}, returning: true}
      )
    res.send(updatedParty)
  } catch (error) {
    throw error
  }
}

const DeleteParty = async (req, res) => {
  try {
    await Party.destroy({ where: { id: req.params.party_id } })
    res.send({ msg: 'Party Deleted', payload: req.params.party_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetParties,
  GetPartyByIdWithUser_Parties,
  CreateParty,
  UpdateParty,
  DeleteParty
}