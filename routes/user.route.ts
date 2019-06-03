import {Router} from 'express'
import {userController} from '../controllers/user.controller';

const router = Router();

router.get('/all');
router.get('/profile/:username');
router.get('/profile');
router.post('/register');
router.post('/login');
router.put('/profile');
router.delete('/profile');

export default router;
