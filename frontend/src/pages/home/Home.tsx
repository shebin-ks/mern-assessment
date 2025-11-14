import type React from "react"
import Dashboard from "./components/Dashboard"
import LowStockProducts from "./components/LowStockProducts"

type Props = {}

const Home: React.FC = ({ }: Props) => {
    return (
        <div className="flex flex-col">

            <Dashboard />
            <LowStockProducts />
        </div>
    )
}

export default Home