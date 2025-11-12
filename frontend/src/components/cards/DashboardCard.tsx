import type { LucideIcon } from "lucide-react";

type Props = {
    bgColor: string;
    heading: string;
    count: string;
    icon: LucideIcon;

}

const DashboardCard = ({ bgColor, heading, count, icon: Icon }: Props) => {


    return (
        <div className={`${bgColor} max-w-[250px] flex justify-between items-center px-4 py-6 rounded-md border border-gray-100 shadow-sm`}>
            <div className="flex-1">
                <h2 className="text-lg font-medium text-white">{heading}</h2>

                <div className=" flex items-center justify-between text-2xl font-bold mt-2 text-white">
                    <div className={`p-3 rounded-lg `}>
                        <Icon className={`w-8 h-8 text-white`} />
                    </div>
                    {count}
                </div>

            </div>

        </div>
    );
}

export default DashboardCard