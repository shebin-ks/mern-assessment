import { NavLink } from "react-router-dom"
import { useState } from "react"
import { Menu, X } from "lucide-react";

type Props = {}

const Navbar = ({ }: Props) => {

    const [isOpen, setIsOpen] = useState(false)



    const linkClasses = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? "text-black font-semibold border-b-2 border-black"
            : "text-gray-700 hover:text-black hover:border-b-2 border-gray-500";

    const linkClassesHam = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? "text-black font-medium bg-gray-200 rounded-md px-2 py-1.5"
            : "text-gray-700 hover:bg-gray-100 rounded-md px-2 py-1.5";

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">

            <div className="flex mx-auto justify-between max-w-7xl px-8  py-6">

                <NavLink
                    to='/'
                    onClick={() => setIsOpen(false)}
                    className="flex items-center"
                >
                    <h2 className="text-2xl font-bold text-red-500">MShop</h2>
                </NavLink>

                <div className="hidden md:flex gap-8 items-center">
                    <NavLink to="/" className={linkClasses}>
                        Home
                    </NavLink>
                    <NavLink to="/products" className={linkClasses}>
                        Products
                    </NavLink>
                    <NavLink to="/sales" className={linkClasses}>
                        Sales
                    </NavLink>

                    <NavLink to="/purchase" className={linkClasses}>
                        Purchase
                    </NavLink>

                </div>

                {/* {user ? (
                    <div
                        children="Logout"
                        className="bg-black text-center cursor-pointer text-white px-4 py-2 font-medium rounded-lg hover:bg-gray-800"
                        onClick={()=>{}}
                    />
                ) : (
                    <div className="hidden md:flex">
                        <NavLink
                            to="/auth"
                            onClick={() => setIsOpen(false)}
                            className="bg-black text-center text-white px-4 py-2 font-medium rounded-lg hover:bg-gray-800"
                        >
                            Login
                        </NavLink>
                    </div>
                )} */}

                <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </div>


                {isOpen && (
                    <div className="md:hidden absolute left-0 top-20 flex flex-col px-6 py-4 gap-3  w-full bg-white">
                        <NavLink
                            to="/"
                            className={linkClassesHam}
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/cars"
                            className={linkClassesHam}
                            onClick={() => setIsOpen(false)}
                        >
                            Cars
                        </NavLink>
                        <NavLink
                            to="/booking"
                            className={linkClassesHam}
                            onClick={() => setIsOpen(false)}
                        >
                            Booking
                        </NavLink>
                        <NavLink
                            to="/profile"
                            className={linkClassesHam}
                            onClick={() => setIsOpen(false)}
                        >
                            Profile
                        </NavLink>

                        <NavLink
                            to="/auth"
                            onClick={() => setIsOpen(false)}
                            className="bg-black text-center text-white px-4 py-2 font-medium rounded-lg hover:bg-gray-800"
                        >
                            Login
                        </NavLink>
                    </div>
                )}

            </div>
        </nav >
    )
}

export default Navbar