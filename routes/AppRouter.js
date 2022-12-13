const router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const UserRouter = require('./UserRouter')
const PartyRouter = require('./PartyRouter')
const User_PartyRouter = require('./User_PartyRouter')
const CommentRouter = require('./CommentRouter')
router.use('/auth', AuthRouter)
router.use('/user', UserRouter)
router.use('/party', PartyRouter)
router.use('/user_party', User_PartyRouter)
router.use('/comment', CommentRouter)

module.exports = router