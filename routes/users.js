const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/users')
const auth = require('../middlewares/auth')

router.get('/', auth, userCtrl.getUsers)
router.post('/', userCtrl.postUser)
router.get('/:id', auth, userCtrl.getUser)
router.put('/:id', userCtrl.updateUser)
router.delete('/:id', auth, userCtrl.deleteUser)

router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login)
router.post('/isemailused', userCtrl.isEmailUsed)

module.exports = router