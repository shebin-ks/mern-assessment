import { In } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Product } from "../entities/product.entity";
import { SaleItem } from "../entities/saleItem.entity";
import { Sale } from "../entities/sale.entity";

export class SaleService {
    private static saleRepo = AppDataSource.getRepository(Sale);

    static createSale = async (sale: Partial<Sale>) => {
        const newSale = this.saleRepo.create(sale)

        return await this.saleRepo.save(newSale);
    }

    static updateSale = async (saleId: string, updatedSale: Partial<Sale>) => {
        return await this.saleRepo.update({ saleId }, updatedSale);
    }

    static getSaleById = async (saleId: string) => {
        return await this.saleRepo.findOneBy({ saleId });
    }

}
