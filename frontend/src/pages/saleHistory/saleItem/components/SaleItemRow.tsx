
import type { SaleItem } from "../../../../redux/features/sales/saleTypes"

type Props = {
    saleItem: SaleItem
}

const SaleItemRow = ({ saleItem }: Props) => {



    return (
        <tr className="bg-gray-50 border-b  border-gray-200 text-gray-800">

            <td className="px-6 py-4">
                {saleItem.product.productName}
            </td>
            <td className="px-6 py-4">
                {saleItem.quantity}
            </td>
            <td className="px-6 py-4">
                {saleItem.product.price}
            </td>
            <td className="px-6 py-4">
                {saleItem.product.taxPercentage}
            </td>
            <td className="px-6 py-4">
                ${saleItem.saleItemPrice}
            </td>
        </tr>
    )
}

export default SaleItemRow