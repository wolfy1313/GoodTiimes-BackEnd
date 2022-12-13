const router = require('express').Router()
const controller = require('../controllers/CommentController')

router.get('/', controller.GetComments)

router.post('/postComment',
// middleware.stripToken,
// middleware.verifyToken, 
controller.CreateComment)

router.get('/user/:user_id', controller.GetCommentsByUser)
router.get('/party/:party_id', controller.GetCommentsByParty)

router.put('/update',
// middleware.stripToken,
// middleware.verifyToken,
controller.UpdateComment)

router.delete('/delete',
// middleware.stripToken,
// middleware.verifyToken, 
controller.DeleteComment)

module.exports = router