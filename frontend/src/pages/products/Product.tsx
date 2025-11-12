import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { fetchProducts } from "../../redux/features/products/productThunks"
import { Loader2, Plus } from "lucide-react"
import ProductTable from "./components/ProductTable"
import { useNavigate } from "react-router-dom"

type Props = {}

const Product = ({ }: Props) => {

    const { products, loading, success } = useAppSelector(state => state.products)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (!loading && success == null) {
            dispatch(fetchProducts())
        }

    }, [loading, success])

    return (
        <div className="flex flex-col px-6 py-12">
            {
                (loading) &&
                (
                    <div className="flex h-30  justify-center items-center">
                        <Loader2 className="animate-spin w-10 h-10" />
                    </div>
                )

            }
            <div className="flex justify-between mb-8 px-12">
                <h1 className="text-xl font-bold">Products</h1>
                <Plus className="cursor-pointer" onClick={()=>navigate("/add-product")}/>

            </div>
            <div className="flex items-center justify-center w-screen">
                {products ?
                    (
                        <ProductTable products={products} />
                    ) :
                    <h1 className="text-red-500 text-3xl">No Products</h1>}
            </div>
        </div>
    )
}

export default Product