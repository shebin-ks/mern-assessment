import { In } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Product } from "../entities/product.entity";
import { SaleItem } from "../entities/saleItem.entity";

export class SaleItemService {
    private static saleItemRepo = AppDataSource.getRepository(SaleItem);

    static createSaleItem = async (saleItem: Partial<SaleItem>[]) => {

        const newSaleItems = this.saleItemRepo.create(saleItem)

        return await this.saleItemRepo.save(newSaleItems);
    }

    static createSaleItems = async (saleItems: Partial<SaleItem>[]) => {

        const newSaleItems = saleItems.map((saleItem) => this.saleItemRepo.create(saleItem))

        return await this.saleItemRepo.save(newSaleItems);
    }


    static getSaleItemsBySaleId = async (saleId: string) => {


        return await this.saleItemRepo.find({
            where: {
                sale: { saleId }

            }
        });
    }


}
