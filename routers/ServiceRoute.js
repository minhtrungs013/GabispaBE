import express from 'express'
import { getServiceById, createService, updateServiceById, deleteServiceById, getAllService } from '../controllers/ServiceController.js'
// import authMiddleWare from '../middleware/AuthMiddleware.js';

const router = express.Router()

router.get('/:id', getServiceById);
router.get('/', getAllService)
router.put('/:id', updateServiceById)
router.delete('/:id', deleteServiceById)
router.post('/:id', createService)

export default router