import express from 'express'
import { getCategoryServiceById, createCategoryService, updateCategoryServiceById, deleteCategoryServiceById, getAllCategoryService } from '../controllers/CategoryServiceController.js'
// import authMiddleWare from '../middleware/AuthMiddleware.js';

const router = express.Router()

router.get('/:id', getCategoryServiceById);
router.get('/', getAllCategoryService)
router.put('/:id', updateCategoryServiceById)
router.delete('/:id', deleteCategoryServiceById)
router.post('/:id', createCategoryService)

export default router