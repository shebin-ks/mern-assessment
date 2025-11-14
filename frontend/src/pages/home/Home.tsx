import type React from "react"
import Dashboard from "./components/Dashboard"
import LowStockProducts from "./components/LowStockProducts"

type Props = {}

const Home: React.FC = ({ }: Props) => {
    return (
        <div className="flex mx-auto flex-col px-6 py-12">

            <Dashboard />
            <LowStockProducts />
        </div>
    )
}

export default Home