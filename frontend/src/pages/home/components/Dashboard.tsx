import { Currency, ShoppingCartIcon } from "lucide-react"
import DashboardCard from "../../../components/cards/DashboardCard"
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks"
import { useEffect } from "react"
import { fetchDashboard } from "../../../redux/features/dashboard/dashboardThunks"

type Props = {}

const Dashboard = ({ }: Props) => {
  const { dashboard, loading, success } = useAppSelector(state => state.dashboard)


  const dispatch = useAppDispatch()
  useEffect(() => {
    if (!loading && success == null) {
      dispatch(fetchDashboard())
    }

  }, [loading, success])

  console.log(dashboard);
  

  return (
    <div>
      <h1 className="text-2xl font-bold text-purple-800">Dashboard</h1>
      <div className="flex gap-6 px-8 pb-12 pt-4">
        <DashboardCard
          bgColor="bg-blue-400"
          heading="Total sales"
          count={`${dashboard?.totalSales}`}
          icon={ShoppingCartIcon}
        />
        <DashboardCard
          bgColor="bg-green-400"
          heading="Total Sale amount"
          count={`$ ${dashboard?.totalSaleAmount}`}
          icon={Currency}
        />
        {/* <DashboardCard
          bgColor="bg-orange-400"
          heading="Total sales"
          count="$500"
          icon={ShoppingCartIcon}
        /> */}
      </div>
    </div>
  )
}

export default Dashboard