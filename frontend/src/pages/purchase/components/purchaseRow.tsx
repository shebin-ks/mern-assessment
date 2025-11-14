import type { Purchase } from "../../../redux/features/purchase/purchaseTypes"

type Props = {
    purchase: Purchase
}

const TableRow = ({ purchase }: Props) => {
    return (
        <tr className="bg-gray-50 border-b  border-gray-200 text-gray-800">
            <th scope="row" className="px-6 py-4 font-medium ">
                {purchase.product.productName}
            </th>
            <td className="px-6 py-4">
                {purchase.quantity}
            </td>
            <td className="px-6 py-4">
                {purchase.purchasePrice}
            </td>
            <td className="px-6 py-4">
                {purchase.purchaseDate}
            </td>

        </tr>
    )
}

export default TableRow