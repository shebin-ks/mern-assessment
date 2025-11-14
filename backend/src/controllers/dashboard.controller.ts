import { Request, Response, NextFunction } from "express";
import { ProductService } from "../services/product.service";
import { ApiError } from "../util/common/apiError";
import { SaleItemService } from "../services/saleItem.service";
import { SaleService } from "../services/sale.services";
import dashboardRouter from "../routes/dashboard.routes";


export class DasboardController {

    static todaySaleSummary = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const todayDateObj = new Date();

            const dd = String(todayDateObj.getDate()).padStart(2, '0');
            const mm = String(todayDateObj.getMonth() + 1).padStart(2, '0');
            const yyyy = todayDateObj.getFullYear();

            const todayStr = mm + '-' + dd + '-' + yyyy;



            const today = new Date(todayStr)
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);

            const [sales, totalSales] = await SaleService.getSalesByDate(today, tomorrow)

            const totalSaleAmount = sales.reduce((acc, sale) => acc + Number(sale.salePrice), 0)



            res.status(200).json({
                success: true,
                message: "Dashbaord data fetched successfully",
                dashboard: {
                    totalSaleAmount,
                    totalSales
                }

            })
        } catch (error) {
            next(error)
        }

    }
}
