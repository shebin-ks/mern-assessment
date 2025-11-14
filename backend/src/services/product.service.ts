import { In, LessThan, LessThanOrEqual } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Product } from "../entities/product.entity";

export class ProductService {
    private static productRepo = AppDataSource.getRepository(Product);

    static createProduct = async (product: Partial<Product>) => {
        const newProduct = this.productRepo.create(product);
        return await this.productRepo.save(newProduct);
    }

    static getAllProducts = async (productIds?: string[], lowStockCount?: number) => {
        let where: any = {
            isDelete: false
        };


        if (productIds && productIds.length > 0) {
            where.productId = In(productIds)

        }

        if (lowStockCount) {
            where.currentStock = LessThan(lowStockCount)

        }


        return await this.productRepo.find({
            where,
            order: {
                productName: 'ASC'
            }
        });
    }

    static getProductById = async (productId: string) => {
        return await this.productRepo.findOne({
            where: {
                productId,
                isDelete: false
            }
        });
    }

    static updateProduct = async (productId: string, updatedProduct: Partial<Product>) => {
        return await this.productRepo.update({ productId }, updatedProduct);
    }

    static deleteProduct = async (productId: string) => {
        return await this.productRepo.delete({ productId });
    }
}
