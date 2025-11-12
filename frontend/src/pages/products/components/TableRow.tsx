import type { Product } from "../../../redux/features/products/productTypes"

type Props = {
    product: Product
}

const TableRow = ({ product }: Props) => {
    return (
        <tr className="bg-gray-50 border-b  border-gray-200 text-gray-800">
            <th scope="row" className="px-6 py-4 font-medium ">
                {product.productName}
            </th>
            <td className="px-6 py-4">
                {product.sku}
            </td>
            <td className="px-6 py-4">
                {product.currentStock}
            </td>
            <td className="px-6 py-4">
                ${product.price}
            </td>
            <td className="px-6 py-4">
                {product.taxPercentage}%
            </td>
        </tr>
    )
}

export default TableRow