import type { Sale } from "../../../redux/features/sales/saleTypes"
import TableRow from "./SaleRow"

type Props = {
    sales: Sale[]
}

const SaleTable = ({ sales }: Props) => {

    return (
        <table className="text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-md  uppercase text-gray-800 bg-gray-200">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Customer number
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Sale Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Discount
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>

                </tr>
            </thead>
            <tbody>
                {sales.map((sale) => (
                    <TableRow sale={sale} />

                ))}
            </tbody>
        </table>

    )
}

export default SaleTable