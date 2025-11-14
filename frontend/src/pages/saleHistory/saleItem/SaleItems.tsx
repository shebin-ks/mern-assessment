import SaleItemTable from "./components/SaleItemTable"
import { useLocation } from "react-router-dom"

type Props = {}

const SaleItems = ({ }: Props) => {


    const location = useLocation();

    const sale = location.state?.sale;

    console.log(sale);

    return (
        <div className="flex flex-col px-6 py-12">
            <div className="flex flex-col justify-between mb-8 px-12">
                <h1 className="text-xl font-bold">Sale items of {sale.saleId}</h1>
                <p>Total sale price : {sale.salePrice}</p>
                <p>Discount : {sale.discount}</p>

            </div>
            <div className="fle">
                {sale ?
                    (
                        <SaleItemTable sale={sale} />
                    ) :
                    <h1 className="text-red-500 text-3xl">No Products</h1>}
            </div>
        </div>
    )
}

export default SaleItems