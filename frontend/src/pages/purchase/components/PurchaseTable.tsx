import type { Purchase } from "../../../redux/features/purchase/purchaseTypes"
import TableRow from "./purchaseRow"

type Props = {
    purchases: Purchase[]
}

const PurchaseTable = ({ purchases }: Props) => {

    return (
        <div className="">
            <table className="w-full text-sm  text-left rtl:text-right text-gray-500">
                <thead className="text-md  uppercase text-gray-800 bg-gray-200">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity Bought
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Purchase Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Purchase Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {purchases.map((purchase) => (
                        <TableRow purchase={purchase} />

                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default PurchaseTable