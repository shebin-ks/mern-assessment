import type { Item } from "../Sale"
import SaleRow from "./TableRow"

type Props = {
    items: Item[]
    updateItem: any
}

const SaleTable = ({ items ,updateItem}: Props) => {

    return (
        <div className="">
            <table className="w-full text-sm  text-left rtl:text-right text-gray-500">
                <thead className="text-md  uppercase text-gray-800 bg-gray-200">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Unit price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total price
                        </th>
                         <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <SaleRow item={item} updateItem={updateItem}/>


                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default SaleTable