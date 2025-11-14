import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { Loader2, Plus } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { fetchPurchase } from "../../redux/features/purchase/purchaseThunks"
import PurchaseTable from "./components/PurchaseTable"

type Props = {}

const Purchase = ({ }: Props) => {

    const { purchases, loading, success } = useAppSelector(state => state.purchases)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (!loading && success == null) {
            dispatch(fetchPurchase())
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
                <h1 className="text-xl font-bold">Purchases</h1>
                <Plus className="cursor-pointer" onClick={()=>navigate("/add-purchase")}/>

            </div>
            <div className="flex items-center justify-center">
                {purchases ?
                    (
                        <PurchaseTable purchases={purchases} />
                    ) :
                    <h1 className="text-red-500 text-3xl">No Purchases</h1>}
            </div>
        </div>
    )
}

export default Purchase