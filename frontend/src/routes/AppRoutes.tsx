import { Navigate, Route, Routes } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import Product from "../pages/products/Product";
import Sale from "../pages/sales/Sale";
import Home from "../pages/home/Home";
import CreateProducts from "../pages/products/components/CreateProducts";
import Purchase from "../pages/purchase/Purchase";
import CreatePurchase from "../pages/purchase/components/CreatePurchase";

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
                    path="/add-product"
                    element={<CreateProducts />}
                />
                <Route
                    path="/sales"
                    element={<Sale />}
                />
                <Route
                    path="/purchase"
                    element={<Purchase />}
                />
                <Route
                    path="/add-purchase"
                    element={<CreatePurchase />}
                />





                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes >
    )
}

export default AppRoutes