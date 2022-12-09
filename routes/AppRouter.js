const router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const UserRouter = require('./UserRouter')
const VenueRouter = require('./VenueRouter')
// const EventRouter = require('./EventRouter')
const ReviewRouter = require('./ReviewRouter')
router.use('/auth', AuthRouter)
router.use('/user', UserRouter)
router.use('/venue', VenueRouter)
// router.use('/event', EventRouter)
router.use('/review', ReviewRouter)

module.exports = router