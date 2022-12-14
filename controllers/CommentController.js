const { Comment } = require('../models')

const GetComments = async (req, res) => {
  try {
    const comments = await Comment.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const GetCommentById = async (req, res) => {
  try {
    const comment = await Comment.findByPk(
      req.params.comment_id
    )
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const GetCommentsByUser = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { user_id: req.params.user_id}
    })
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const GetCommentsByParty = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { party_id: req.params.party_id}
    })
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const CreateComment = async (req, res) => {
  try {
    const newComment = await Comment.create({ ...req.body })
    res.send(newComment)
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    let comment_id = parseInt(req.params.comment_id)
    const updatedComment = await Comment.update(
      {...req.body},
      {where: {id:comment_id}, returning:true}
      )
    res.send(updatedComment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    await Comment.destroy({ where: {id: req.params.comment_id}})
    res.send({ message: `Deleted Comment`, payload: req.params.comment_id})
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetComments,
  GetCommentsByUser,
  GetCommentsByParty,
  CreateComment,
  UpdateComment,
  DeleteComment,
  GetCommentById
}