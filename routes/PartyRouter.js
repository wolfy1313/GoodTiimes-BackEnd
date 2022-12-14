const router = require('express').Router()
const controller = require('../controllers/PartyController')
const middleware = require('../middleware')

router.get('/', controller.GetParties)
router.get('/party/:party_id', controller.GetPartyById)


router.post('/',
// middleware.stripToken,
// middleware.verifyToken, 
controller.CreateParty)


router.get('/:party_id', controller.GetPartyWithComments)

router.get('/user/:party_id',
// middleware.stripToken,
// middleware.verifyToken, 
controller.GetPartyWithCommentsAndUser)


router.put('/update/:party_id', 
// middleware.stripToken,
// middleware.verifyToken,
controller.UpdateParty)


router.delete('/delete/:party_id', 
// middleware.stripToken,
// middleware.verifyToken,
controller.DeleteParty)

module.exports = router