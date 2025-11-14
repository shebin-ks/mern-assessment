import { Loader2, type LucideIcon } from "lucide-react";
import { useAppSelector } from "../../hooks/reduxHooks";

type Props = {
    bgColor: string;
    heading: string;
    count: string;
    icon: LucideIcon;

}

const DashboardCard = ({ bgColor, heading, count, icon: Icon }: Props) => {

    const { loading } = useAppSelector(state => state.dashboard)

    return (
        <div className={`${bgColor} w-[220px]  flex justify-between items-center px-4 py-6 rounded-md border border-gray-100 shadow-sm`}>
            <div className="flex-1">
                <h2 className="text-lg font-medium text-white">{heading}</h2>

                <div className=" flex items-center justify-between text-2xl font-bold mt-2 text-white">
                    <div className={`p-3 rounded-lg `}>
                        <Icon className={`w-8 h-8 text-white`} />
                    </div>
                    {loading ?
                        <Loader2 className="animate-spin w-10 h-10" />
                        :
                        count
                    }
                </div>

            </div>

        </div>
    );
}

export default DashboardCard