import express from 'express'
import { deleteUser, followUser, getAllUsers, getUser, unfollowUser, updateUser } from '../controllers/UserController.js'
// import authMiddleWare from '../middleware/AuthMiddleware.js';

const router = express.Router()

// router.get('/:id', getUser);
// router.get('/',getAllUsers)
// router.put('/:id',authMiddleWare, updateUser)
// router.delete('/:id',authMiddleWare, deleteUser)
// router.put('/:id/follow',authMiddleWare, followUser)
// router.put('/:id/unfollow',authMiddleWare, unfollowUser)

router.get('/:id', getUser);
router.get('/',getAllUsers)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/follow/:id', followUser)
router.put('/unfollow/:id', unfollowUser)

export default router