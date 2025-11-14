import express from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import { ProductController } from '../controllers/product.controller';
import { validateBody } from '../middlewares/body.validator';
import { createProductSchema } from '../validations/product.validations';
import { createPurchaseSchema } from '../validations/purchase.validations';
import { PurchaseController } from '../controllers/purchase.controller';

const purchaseRouter = express.Router();

purchaseRouter.route('/')
    .post(validateBody(createPurchaseSchema), PurchaseController.createPurchase)
    .get(PurchaseController.getAllPurchases);

export default purchaseRouter;
