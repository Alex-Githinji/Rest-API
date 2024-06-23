import { Router } from 'express';
import { getallproducts, getproduct } from '../controller/controller.js';

const router = Router();

router.get('/', getallproducts);
router.get('/:id', getproduct);



export default router;
