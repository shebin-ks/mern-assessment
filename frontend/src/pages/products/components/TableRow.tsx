import { Edit2, Trash2 } from "lucide-react"
import type { Product } from "../../../redux/features/products/productTypes"
import { useNavigate } from "react-router-dom"
import { ProductApi } from "../../../api/endpoints/productApi"
import { fetchProducts } from "../../../redux/features/products/productThunks"
import { useAppDispatch } from "../../../hooks/reduxHooks"

type Props = {
    product: Product
}

const TableRow = ({ product }: Props) => {
    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const handleDelete = async(e: any) => {
        e.preventDefault()

        try {
            const res = await ProductApi.deleteProduct(product)
            console.log(res);
            
            dispatch(fetchProducts())
        } catch (error) {
            console.log(error);
            
        }
    }
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
            <td className="px-6 py-4">
                <div className="flex justify-between text-gray-600">
                    <Edit2 className="cursor-pointer" onClick={() => {
                        navigate(`/add-product`, {
                            state: { product }
                        });
                    }}
                    />


                    <Trash2 className="cursor-pointer" onClick={handleDelete} />
                </div>
            </td>
        </tr>
    )
}

export default TableRow