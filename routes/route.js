import express from 'express'
import {addUser , getUser}  from '../controler/user-controler.js';

const router = express.Router();

router.post('/Login',addUser);
router.post('/Sign',addUser);
router.get('/Product',getUser);

export default router;