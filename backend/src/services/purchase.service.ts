import { In } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Product } from "../entities/product.entity";
import { Purchase } from "../entities/purchase.entity";

export class PurchaseService {
    private static purchaseRepo = AppDataSource.getRepository(Purchase);

    static createPurchase = async (purchase: Partial<Purchase>) => {
        const newPurchase = this.purchaseRepo.create(purchase);
        return await this.purchaseRepo.save(newPurchase);
    }

    static getAllPurchase = async () => {


        return await this.purchaseRepo.find({
            relations: ['product'],
            order: {
                purchaseDate: 'DESC'
            }
        });
    }


}
