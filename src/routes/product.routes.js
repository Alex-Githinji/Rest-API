import { Router } from 'express';
import { getallproducts, getproduct , createProduct, updateProduct, deleteProduct} from '../controller/controller.js';

const router = Router();

router.get('/', getallproducts);
router.get('/:id', getproduct);
router.post('/', createProduct)
router.patch('/:id', updateProduct)
router.delete('/:id', deleteProduct)



export default router;
