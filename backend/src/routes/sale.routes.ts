import express from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import { ProductController } from '../controllers/product.controller';
import { validateBody } from '../middlewares/body.validator';
import { createProductSchema } from '../validations/product.validations';
import { saleCreateSchema } from '../validations/sale.validations';
import { SalesController } from '../controllers/sales.controller';

const saleRouter = express.Router();

saleRouter.route('/')
    .get(SalesController.getAllSales)
    .post(validateBody(saleCreateSchema), SalesController.createSales)


export default saleRouter;
