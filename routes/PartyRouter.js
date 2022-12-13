const router = require('express').Router()
const controller = require('../controllers/PartyController')
const middleware = require('../middleware')

router.get('/', controller.GetParties)


router.post('/',
// middleware.stripToken,
// middleware.verifyToken, 
controller.CreateParty)


router.get('/:party_id', controller.GetPartyByIdWithUser_Parties)


router.put('/update/:party_id', 
// middleware.stripToken,
// middleware.verifyToken,
controller.UpdateParty)


router.delete('/delete/:party_id', 
// middleware.stripToken,
// middleware.verifyToken,
controller.DeleteParty)

module.exports = router