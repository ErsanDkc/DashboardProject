import DashboardLeft from "@/components/DashboardLeft"
import DashboardRight from "@/components/DashboardRight"

const Dashboard = () => {
    return (
        <div className="flex flex-col md:flex-row gap-2">
            <div className="md:w-[70%] w-full">
                <DashboardLeft  />
            </div>
            <div className="md:w-[30%] w-full">
                <DashboardRight />
            </div>
        </div>
    )
}

export default Dashboard
