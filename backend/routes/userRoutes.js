const { Router } = require('express');
const router = Router();
const userController = require('../controllers/userController')

router.get('/', userController.home);
router.get('/:id', userController.user);
router.post('/', userController.addUser);
router.patch('/edit/:id', userController.editUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;