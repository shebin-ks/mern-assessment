import type { Product } from "../../../redux/features/products/productTypes"
import TableRow from "./TableRow"

type Props = {
    products: Product[]
}

const ProductTable = ({ products }: Props) => {

    return (
        <div className="">
            <table className="w-full text-sm  text-left rtl:text-right text-gray-500">
                <thead className="text-md  uppercase text-gray-800 bg-gray-200">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            SKU
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Current Stock
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tax percentage
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <TableRow product={product} />

                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default ProductTable