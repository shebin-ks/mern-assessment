import { useState } from "react";
import { ProductApi } from "../../../api/endpoints/productApi";
import { useLocation } from "react-router-dom";

const CreateProducts = () => {

    const location = useLocation();

    const product = location.state?.product;


    const [productName, setProductName] = useState(product?.productName)
    const [tax, setTax] = useState(product?.taxPercentage)
    const [price, setPrice] = useState(product?.price)
    const [currentStock, setCurrentStock] = useState(product?.currentStock)

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (productName.length < 0) {
            alert("Enter product name")

            return;
        }

        try {
            if (product) {
                await ProductApi.updateProduct({
                    productId: product.productId,
                    productName: productName,
                    taxPercentage: tax,
                    price: price,
                    currentStock
                })
                alert("product updated")
            } else {
                await ProductApi.createProduct({
                    productName: productName,
                    taxPercentage: tax,
                    price: price,
                    currentStock
                })
                alert("product updated")
            }


            setProductName("")
            setTax(0)
        } catch (error: any) {
            alert(error.message)
        }



    }


    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="border border-gray-600 rounded-2xl shadow-xl p-8 space-y-6">


                <form className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium  ">Product name</label>
                        <input id="product-name"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="paste" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium  ">Price</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            id="price" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="18" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium  ">Stock</label>
                        <input
                            type="number"
                            value={currentStock}
                            onChange={(e) => setCurrentStock(Number(e.target.value))}
                            id="stock" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="18" required />
                    </div>

                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium  ">Tax percentage</label>
                        <input
                            type="number"
                            value={tax}
                            onChange={(e) => setTax(Number(e.target.value))}
                            id="tax" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="18" required />
                    </div>


                    <button onClick={handleSubmit} className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                        {product ? "Update Product" : "Add Product"}
                    </button>
                </form>

            </div>
        </div>
    );
};

export default CreateProducts;
