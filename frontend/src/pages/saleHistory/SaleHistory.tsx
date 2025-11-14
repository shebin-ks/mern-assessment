import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { Loader2, Plus } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { fetchSales } from "../../redux/features/sales/saleThunks"
import SaleTable from "./components/SaleTable"

type Props = {}

const SaleHistory = ({ }: Props) => {

    const { sales, loading, success } = useAppSelector(state => state.sales)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (!loading && success == null) {
            dispatch(fetchSales())
        }

    }, [loading, success])

    return (
        <div className="flex mx-auto flex-col px-6 py-12">
            {
                (loading) &&
                (
                    <div className="flex h-30  justify-center items-center">
                        <Loader2 className="animate-spin w-10 h-10" />
                    </div>
                )

            }
            <div className="flex justify-between mb-8 px-12">
                <h1 className="text-xl font-bold">Sales</h1>
                <Plus className="cursor-pointer" onClick={()=>navigate("/add-sale")}/>

            </div>
            <div className="fle">
                {sales ?
                    (
                        <SaleTable sales={sales} />
                    ) :
                    <h1 className="text-red-500 text-3xl">No Products</h1>}
            </div>
        </div>
    )
}

export default SaleHistory