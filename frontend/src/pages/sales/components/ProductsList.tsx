import { Plus } from 'lucide-react'
import type { Product } from '../../../redux/features/products/productTypes'

type Props = {
    products: Product[];
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    addItem: any

}
const ProductsList = ({ products, searchTerm, setSearchTerm, addItem }: Props) => {
    return (
        <div className="flex flex-col w-3/4">
            <input
                type="search"
                value={searchTerm}
                className='border px-3 py-2 rounded-md shadow-md border-gray-200'
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className='flex flex-col mt-4 px-4'>
                {products.map((product) => (
                    <div
                        key={product.productId}
                        className="flex bg-blue-200 rounded-md my-1 px-4 py-2 justify-between">
                        <div>

                            <h1>{product.productName} - {product.currentStock} (${product.price})</h1>
                        </div>
                        <Plus
                            className='text-white w-6 h-6 hover:text-black cursor-pointer'
                            onClick={() => addItem({ product, quantity: 1 })}
                        />

                    </div>

                ))}

            </div>
        </div>

    )
}

export default ProductsList