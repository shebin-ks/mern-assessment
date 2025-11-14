import { useState } from "react";
import { ProductApi } from "../../../api/endpoints/productApi";

const CreateProducts = () => {

    const [productName, setProductName] = useState("")
    const [tax, setTax] = useState(0)
    const [price, setPrice] = useState(0)
    const [currentStock, setCurrentStock] = useState(0)

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (productName.length < 0) {
            alert("Enter product name")

            return;
        }

        try {
            await ProductApi.createProduct({
                productName: productName,
                taxPercentage: tax,
                price: price,
                currentStock
            })
            alert("product added")

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


                    <button onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default CreateProducts;
