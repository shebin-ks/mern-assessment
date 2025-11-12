import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { fetchProducts } from "../../redux/features/products/productThunks"
import { Loader2 } from "lucide-react"
import ProductsList from "./components/ProductsList"
import { searchProduct } from "../../redux/features/products/productSlice"
import type { Product } from "../../redux/features/products/productTypes"
import SaleTable from "./components/SaleTable"
import { SalesApi } from "../../api/endpoints/salesApi"


export interface Item {
    product: Product,
    quantity: number
}

interface sale {
    discount: string;
    salePrice: string;
    salesItems: Item
}
type Props = {}

const Sale = ({ }: Props) => {
    const { products, loading, success, searchResult } = useAppSelector(state => state.products)

    const [searchTerm, setSearchTerm] = useState("")

    const [bill, setBill] = useState<sale | null>();

    const dispatch = useAppDispatch()
    useEffect(() => {
        if (!loading && success == null) {
            dispatch(fetchProducts())
        }


    }, [loading, success])

    useEffect(() => {
        if (searchTerm.length >= 0) {
            dispatch(searchProduct(searchTerm))
        }


    }, [searchTerm])

    useEffect(() => {
        if (bill) {
            dispatch(fetchProducts())
        }


    }, [bill])


    const [items, setItems] = useState<Item[]>([])


    const addItem = (newItem: Item) => {

        if (newItem.product.currentStock === 0) {
            alert("Out of stock")
            return
        }
        let isUpdated = false;
        items.map((item) => {
            if (item.product.productId === newItem.product.productId) {
                isUpdated = true;
                updateItem(newItem.product.productId, item.quantity + 1)
            }
        })
        if (!isUpdated) {
            setItems(prevItems => [...prevItems, newItem]);
        }



    };

    const removeItem = (productId: String) => {
        setItems(prevItems => prevItems.filter((item) => item.product.productId !== productId));
    };

    const updateItem = (productId: string, newQuantity: number) => {

        if (newQuantity === 0) {
            return removeItem(productId)
        }
        setItems(prevItems => prevItems.map((item) => {
            if (item.product.productId === productId) {
                if (item.product.currentStock < newQuantity) {
                    alert("Not enough stocks")

                } else {
                    return {
                        ...item,
                        quantity: newQuantity
                    }
                }
            }
            return item
        }

        ));
    };


    const createBill = async () => {
        if (items.length < 1) {
            alert("Add atleast 1 element")
            return;
        }

        const payload = items.map((item) => {
            return {
                'productId': item.product.productId,
                'quantity': item.quantity
            }

        })


        try {
            const result = await SalesApi.createSale({ products: payload })

            setBill(result.sale)

        } catch (error: any) {
            alert(error.message)
        }

    }

    const clearData = () => {
        setItems([])
        setBill(null)
    }

    return (
        <div className="flex px-6 py-8 place-content-between">
            <div className="billing mt-12 flex flex-col items-center ">
                <SaleTable
                    items={items}
                    updateItem={updateItem}
                />


                {(items && items.length > 0) &&
                    (
                        <div
                            onClick={createBill}
                            className="inline-flex my-8 cursor-pointer bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md">
                            Generate Bill
                        </div>
                    )}

                {(bill) &&
                    (

                        <div className="flex flex-col w-full ">
                            <div className="w-3/5 rounded-xl border border-gray-600 px-4 py-3">
                                <div className="flex flex-col">
                                    <h2>Discount: {bill.discount} %</h2>
                                    <h2>Amount to pay: ${bill.salePrice}</h2>
                                </div>
                                <div
                                    onClick={clearData}
                                    className="inline-flex  my-8 cursor-pointer bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md">
                                    Print receipt
                                </div>
                            </div>
                        </div>
                    )}



            </div>
            <div className="products ">
                {
                    (loading) &&
                    (
                        <div className="flex h-30  justify-center items-center">
                            <Loader2 className="animate-spin w-10 h-10" />
                        </div>
                    )

                }
                <div className="flex justify-end">
                    {products ?
                        (
                            <ProductsList
                                products={(searchResult && searchResult.length > 0) ? searchResult : products}
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                addItem={addItem}

                            />
                        ) :
                        <h1 className="text-red-500 text-3xl">No Products</h1>
                    }
                </div>
            </div>
        </div>
    )
}

export default Sale