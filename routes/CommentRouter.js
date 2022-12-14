const router = require('express').Router()
const controller = require('../controllers/CommentController')

router.get('/', controller.GetComments)

router.get('/:comment_id', controller.GetCommentById)

router.post('/postComment',
// middleware.stripToken,
// middleware.verifyToken, 
controller.CreateComment)

router.get('/user/:user_id', controller.GetCommentsByUser)
router.get('/party/:party_id', controller.GetCommentsByParty)

router.put('/update/:comment_id',
// middleware.stripToken,
// middleware.verifyToken,
controller.UpdateComment)

router.delete('/delete/:comment_id',
// middleware.stripToken,
// middleware.verifyToken, 
controller.DeleteComment)

module.exports = router