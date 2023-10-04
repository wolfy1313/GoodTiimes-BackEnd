const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    // Attempt to find a user by their username
    const user = await User.findOne({
      where: { username: req.body.username },
      raw: true
    })
    // Check if a user with the given username exists and if the password matches
    if (
      user &&
      (await middleware.comparePassword(
        user.passwordDigest,
        req.body.password
      ))
    ) {
      // If authentication is successful, create a JWT token
      let payload = {
        id: user.id,
        name: user.name,
        username: user.username
      }
      let token = middleware.createToken(payload)
      // Respond with user information and the generated token
      return res.send({ user: payload, token })
    }
    // If authentication fails, send a 401 Unauthorized response
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
     // Extract username, password, and name from the request body
    const { username, password, name } = req.body
    // Hash the password
    let passwordDigest = await middleware.hashPassword(password)
    // Create a new user record in the database
    const user = await User.create({
      username,
      passwordDigest,
      name
    })
    // Respond with the created user object
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    // Find the user by username
    const user = await User.findOne({
      where: { username: req.body.username }
    })
    // Check if the user exists and if the old password matches
    if (
      user &&
      (await middleware.comparePassword(
        user.dataValues.passwordDigest,
        req.body.oldPassword
      ))
    ) {
       // Hash the new password and update it in the database
      let passwordDigest = await middleware.hashPassword(req.body.newPassword)
      await user.update({ passwordDigest })
      // Respond with a success message
      return res.send({ status: 'Success', msg: 'Password updated' })
    }
    // If authentication fails, send a 401 Unauthorized response
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession
}