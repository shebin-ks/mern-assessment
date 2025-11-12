import {  ShoppingCartIcon } from "lucide-react"
import DashboardCard from "../../../components/cards/DashboardCard"

type Props = {}

const Dashboard = ({ }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-8 py-12">
      <DashboardCard
        bgColor="bg-blue-400"
        heading="Total sales"
        count="$500"
        icon={ShoppingCartIcon}
      />
      <DashboardCard
        bgColor="bg-green-400"
        heading="Total sales"
        count="$500"
        icon={ShoppingCartIcon}
      />
      <DashboardCard
        bgColor="bg-orange-400"
        heading="Total sales"
        count="$500"
        icon={ShoppingCartIcon}
      />
    </div>
  )
}

export default Dashboard