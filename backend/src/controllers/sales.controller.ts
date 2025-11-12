import { Request, Response, NextFunction } from "express";
import { ProductService } from "../services/product.service";
import { ApiError } from "../util/common/apiError";
import { SaleItemService } from "../services/saleItem.service";
import { SaleService } from "../services/sale.services";

export class SalesController {

    static createSales = async (req: Request, res: Response, next: NextFunction) => {
        try {

            const { customerNumber, products } = req.body;


            const keyValue = products.reduce((acc, product) => {
                acc[product.productId] = product.quantity;
                return acc;
            }, {});

            const productIds = Object.keys(keyValue);


            const productsInfo = await ProductService.getAllProducts(productIds);

            const sale = await SaleService.createSale({
                customerNumber,
            })


            const result = productsInfo.map((product) => {
                if (product.currentStock < keyValue[product.productId]) {
                    throw new ApiError(`Only ${product.currentStock} stock is available for product ${product.productName}`)
                }

                const quantity = keyValue[product.productId]

                const itemPrice = product.price * quantity;
                const saleItemPrice = itemPrice + (itemPrice * product.taxPercentage) / 100
                return {
                    sale,
                    product,
                    quantity: keyValue[product.productId],
                    saleItemPrice

                }
            })

            const salesItems = await SaleItemService.createSaleItems(result)


            const totalPrice = salesItems.reduce((sum, saleItem) => sum + saleItem.saleItemPrice, 0)


            let discount = totalPrice > 1000 ? (totalPrice < 2000 ? 1 : 2) : 0


            const afterDiscountPrice = totalPrice - (totalPrice * discount) / 100


            await SaleService.updateSale(sale.saleId, {
                salePrice: afterDiscountPrice,
                discount
            })

            const newSale = await SaleService.getSaleById(sale.saleId)




            res.status(201).json({
                success: true,
                message: "Sale created successfully",
                sale: {
                    ...newSale,
                    salesItems
                }
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
}
