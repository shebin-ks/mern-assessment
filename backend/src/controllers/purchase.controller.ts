import { Request, Response, NextFunction } from "express";
import { ProductService } from "../services/product.service";
import { ApiError } from "../util/common/apiError";
import { PurchaseService } from "../services/purchase.service";

export class PurchaseController {

    static createPurchase = async (req: Request, res: Response, next: NextFunction) => {
        try {

            const { productId, quantity, purchasePrice, purchaseDate } = req.body;

            const product = await ProductService.getProductById(productId)

            if (!product) {
                throw new ApiError("Product not found", 404)
            }


            const purchase = await PurchaseService.createPurchase({
                product,
                quantity,
                purchasePrice,
                purchaseDate

            });

            await ProductService.updateProduct(
                productId,
                {
                    currentStock: (product.currentStock + quantity),
                    price: purchasePrice
                }
            )

            res.status(201).json({
                success: true,
                message: "Purchase created successfully",
                purchase
            });
        } catch (error) {
            next(error);
        }
    }

    static getAllPurchases = async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const purchases = await PurchaseService.getAllPurchase();

            res.status(200).json({
                success: true,
                message: "Purchase fetched successfully",
                purchases
            });
        } catch (error) {
            next(error);
        }
    }

}