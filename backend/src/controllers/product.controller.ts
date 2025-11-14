import { Request, Response, NextFunction } from "express";
import { ProductService } from "../services/product.service";
import { ApiError } from "../util/common/apiError";

export class ProductController {

    static createProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {

            const { productName, price, currentStock, taxPercentage } = req.body;
            let sku = productName.slice(0, 3).toUpperCase() + Math.ceil(Math.random() * 10000)
            console.log(price);


            const product = await ProductService.createProduct({
                productName,
                sku,
                price,
                currentStock,
                taxPercentage
            });

            res.status(201).json({
                success: true,
                message: "Product created successfully",
                product
            });
        } catch (error) {
            next(error);
        }
    }

    static getAllProducts = async (_req: Request, res: Response, next: NextFunction) => {
        try {
            const products = await ProductService.getAllProducts();

            res.status(200).json({
                success: true,
                message: "Products fetched successfully",
                products
            });
        } catch (error) {
            next(error);
        }
    }

    static getProductById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { ProductId } = req.params;
            const Product = await ProductService.getProductById(ProductId);

            if (!Product) throw new ApiError("Product not found", 404);



            res.status(200).json({
                success: true,
                message: "Product fetched successfully",
                Product
            });
        } catch (error) {
            next(error);
        }
    }

    static updateProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { ProductId } = req.params;
            const updates = req.body;

            const Product = await ProductService.getProductById(ProductId);
            if (!Product) throw new ApiError("Product not found", 404);

            const updatedProduct = await ProductService.updateProduct(ProductId, updates);

            res.status(200).json({
                success: true,
                message: "Product updated successfully",
                Product: updatedProduct
            });
        } catch (error) {
            next(error);
        }
    }

    static deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { ProductId } = req.params;

            const Product = await ProductService.getProductById(ProductId);
            if (!Product) throw new ApiError("Product not found", 404);

            await ProductService.deleteProduct(ProductId);

            res.status(200).json({
                success: true,
                message: "Product deleted successfully"
            });
        } catch (error) {
            next(error);
        }
    }

    static getLowStockItem = async (req: Request, res: Response, next: NextFunction) => {
        try {

            const { lowStockQuantity } = req.params;

            const count = Number(lowStockQuantity)

            console.log(count);
            
            const products = await ProductService.getAllProducts(null,count);

            res.status(200).json({
                success: true,
                message: "Low stocked products fetched successfully",
                products
            });
        } catch (error) {
            next(error);
        }
    }
}
