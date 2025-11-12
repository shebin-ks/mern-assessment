import { Minus, Plus } from "lucide-react";
import type { Item } from "../Sale"

type Props = {
    item: Item;
    updateItem: any
}

const SaleRow = ({ item, updateItem }: Props) => {
    return (
        <tr className="bg-gray-50 border-b  border-gray-200 text-gray-800">
            <th scope="row" className="px-6 py-4 font-medium ">
                {item.product.productName}
            </th>

            <td className="px-6 py-4">
                {item.quantity}
            </td>
            <td className="px-6 py-4">
                $ {item.product.price}
            </td>
            <td className="px-6 py-4">
                $ {item.product.price * item.quantity}
            </td>
            <td className="px-6 py-4">
                <div className="flex justify-between">
                    <Minus
                        className="cursor-pointer"
                        onClick={() => updateItem(item.product.productId, item.quantity - 1)}
                    />
                    <Plus
                        className="cursor-pointer"
                        onClick={() => updateItem(item.product.productId, item.quantity + 1)}
                    />

                </div>
            </td>
        </tr>
    )
}

export default SaleRow