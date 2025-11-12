import { Navigate, Route, Routes } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import Product from "../pages/products/Product";
import Sale from "../pages/sales/Sale";
import Stock from "../pages/stock/Stock";
import Home from "../pages/home/Home";

type Props = {}

const AppRoutes = (_: Props) => {


    return (
        <Routes>

            <Route element={<BaseLayout />}>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/products"
                    element={<Product />}
                />
                <Route
                    path="/sales"
                    element={<Sale />}
                />
                <Route
                    path="/stocks"
                    element={<Stock />}
                />





                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes >
    )
}

export default AppRoutes