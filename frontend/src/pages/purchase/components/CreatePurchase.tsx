import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { fetchProducts } from "../../../redux/features/products/productThunks";
import { PurchaseApi } from "../../../api/endpoints/purchaseApi";

const CreatePurchase = () => {

    const [productId, setProductId] = useState("")
    const [purchasePrice, setPurchasePrice] = useState(0)
    const [purchaseDate, setPurchaseDate] = useState("")
    const [quantity, setQuantity] = useState(0)


    const { products, loading, success } = useAppSelector(state => state.products)

    const dispatch = useAppDispatch()
    useEffect(() => {
        if (!loading && success == null) {
            dispatch(fetchProducts())
        }

    }, [loading, success])

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        try {
            await PurchaseApi.createPurchase({
                productId,
                purchaseDate,
                purchasePrice,
                quantity
            })
            alert("Purchase added")

            setPurchaseDate("")
            setPurchasePrice(0)
            setProductId("")
            setQuantity(0)
        } catch (error: any) {
            alert(error.message)
        }



    }


    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="border border-gray-600 rounded-2xl shadow-xl p-8 space-y-6">


                <form className="max-w-sm mx-auto">

                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium ">Select a product</label>
                        <select
                            name="productId"
                            value={productId}
                            onChange={(e) => setProductId(e.target.value)}
                            className="w-full p-3 rounded-lg border border-gray-700 focus:outline-non"
                        >
                            <option
                                className="bg-gray-50 border border-gray-300  text-sm rounded-lg block w-full p-2.5"
                                value="">Select a Product</option>
                            {loading ? (
                                <option disabled>Loading Products...</option>
                            ) : (
                                products != null && products.map((p) => (
                                    <option key={p.productId} value={p.productId}>
                                        {p.productName}
                                    </option>
                                ))
                            )}
                        </select>
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium ">Quantity</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            id="Quantity"
                            className="bg-gray-50 border border-gray-300  text-sm rounded-lg block w-full p-2.5" placeholder="18" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium  ">Purchase price</label>
                        <input
                            type="number"
                            value={purchasePrice}
                            onChange={(e) => setPurchasePrice(Number(e.target.value))}
                            id="purchasePrice" className="bg-gray-50 border border-gray-300  text-sm rounded-lg block w-full p-2.5" placeholder="18" required />
                    </div>

                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium ">Purchase Date</label>
                        <input
                            type="date"
                            name="startTime"
                            value={purchaseDate}
                            onChange={(e) => setPurchaseDate(e.target.value)}
                            className="w-full p-3 rounded-lg border border-gray-700"
                        />
                    </div>



                    <button onClick={handleSubmit} className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div >
        </div >
    );
};

export default CreatePurchase;
