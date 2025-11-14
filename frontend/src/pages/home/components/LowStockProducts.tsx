import { Loader2, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Product } from '../../../redux/features/products/productTypes'
import ProductTable from '../../products/components/ProductTable'
import { ProductApi } from '../../../api/endpoints/productApi'
import { useNavigate } from 'react-router-dom'

type Props = {}

const LowStockProducts = ({ }: Props) => {
    const [lowStocks, setLowStocks] = useState<null | Product[]>()


    const navigate = useNavigate()
    const fetchData = async () => {
        const res = await ProductApi.fetchLowStockProducts()

        console.log(res);
        setLowStocks(res.products)
    }
    useEffect(() => {

        fetchData()
    }, [])

    return (
        <div className="flex flex-col px-6 py-12">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-xl font-bold">Low Stock Products(10)</h1>
                <Plus className="cursor-pointer" onClick={() => navigate("/add-purchase")} />

            </div>
            <div className="flex items-center justify-center">
                {lowStocks ?
                    lowStocks.length > 0 ?
                        (
                            <ProductTable products={lowStocks} />
                        ) :
                        <h1 className="text-red-500 text-3xl">No Products having less than 10 stocks</h1>
                    :
                    <Loader2 className="animate-spin w-10 h-10" />
                }
            </div>
        </div>
    )
}

export default LowStockProducts