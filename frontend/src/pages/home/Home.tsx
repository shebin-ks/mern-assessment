import type React from "react"
import Dashboard from "./components/Dashboard"

type Props = {}

const Home: React.FC = ({ }: Props) => {
    return (
        <div className="flex flex-col">

            <Dashboard />
        </div>
    )
}

export default Home