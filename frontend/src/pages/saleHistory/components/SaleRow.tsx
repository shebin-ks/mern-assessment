
import { useNavigate } from "react-router-dom"
import type { Sale } from "../../../redux/features/sales/saleTypes"

type Props = {
    sale: Sale
}

const TableRow = ({ sale }: Props) => {


    const dateObj = new Date(sale.createdAt);

   

    const formattedTime = dateObj.toLocaleTimeString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    });
    const navigate = useNavigate()
    return (
        <tr className="bg-gray-50 border-b  border-gray-200 text-gray-800">
            <th scope="row" className="px-6 py-4 font-medium ">
                {formattedTime}
            </th>
            <td className="px-6 py-4">
                {sale.customerNumber ?? "Not given"}
            </td>
            <td className="px-6 py-4">
                {sale.salePrice}
            </td>
            <td className="px-6 py-4">
                ${sale.discount}
            </td>
            <td className="px-6 py-4">
                <div className="cursor-pointer" onClick={() => {
                    navigate(`/view-sale`, {
                        state: { sale }
                    });
                }}>
                    View
                </div>
            </td>

        </tr>
    )
}

export default TableRow