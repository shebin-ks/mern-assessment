import type { Sale } from "../../../../redux/features/sales/saleTypes"
import SaleItemRow from "./SaleItemRow"

type Props = {
    sale: Sale
}

const SaleItemTable = ({ sale }: Props) => {

    return (
        <table className="text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-md  uppercase text-gray-800 bg-gray-200">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Unit Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Tax %
                    </th>
                    <th scope="col" className="px-6 py-3">
                        saleItemPrice
                    </th>

                </tr>
            </thead>
            <tbody>
                {sale.saleItems.map((saleItem) => (
                    <SaleItemRow saleItem={saleItem} />

                ))}
            </tbody>
        </table>

    )
}

export default SaleItemTable