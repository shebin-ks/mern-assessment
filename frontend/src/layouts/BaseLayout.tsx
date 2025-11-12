import { Outlet, useLocation } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Navbar from "../components/layout/Navbar";

type Props = {}

const BaseLayout = ({ }: Props) => {

    const location = useLocation();

    const hideLayout = location.pathname === "/auth";

    return (
        <div className="flex flex-col min-h-screen">

            <ToastContainer
                position="top-center"
                autoClose={3000}
                pauseOnFocusLoss={false}
                newestOnTop
                pauseOnHover={false}
                limit={1}
            />
            
            {!hideLayout && <Navbar />}
            <main className={`${hideLayout ? '' : 'pt-20'} flex flex-col flex-1  bg-gray-100`}>
                <Outlet />
            </main>

        </div>)
}

export default BaseLayout