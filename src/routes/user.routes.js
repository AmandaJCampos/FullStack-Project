import express from 'express';
import controller from '../controllers/userController';
import auth from '../middlewares/auth';

const router = express.Router();

router.post('/register', controller.registerUser);
router.post('/login', controller.authentication);

router.get('/', auth, controller.listUsers);
router.pu('/:id', auth, controller.updateUser)
router.delete('/:id', auth, controller.deleteUser)


export default router;