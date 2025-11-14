import express from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import { ProductController } from '../controllers/product.controller';
import { validateBody } from '../middlewares/body.validator';
import { createProductSchema } from '../validations/product.validations';

const productRouter = express.Router();

productRouter.route('/')
    .post(validateBody(createProductSchema), ProductController.createProduct)
    .get(ProductController.getAllProducts);

productRouter.route('/low-stock/:lowStockQuantity')
    .get(ProductController.getLowStockItem);


productRouter.route('/:productId')
    .get(ProductController.getProductById)
    .patch(ProductController.updateProduct)
    .delete(ProductController.deleteProduct)


export default productRouter;
