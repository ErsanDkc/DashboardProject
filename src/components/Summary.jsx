import { useQuery } from "@tanstack/react-query"
import StatCard from "./StatCard"
import { getSummary } from "@/services/apis"
import { PiggyBank, TrendingUp, Wallet } from "lucide-react"
import SummarySkeleton from "./skeletons/SummarySkeleton"

const Summary = () => {
    const { data: summary, isLoading } = useQuery({
        queryKey: ["summary"],
        queryFn: getSummary
    })
    if(isLoading) return <SummarySkeleton />
    return <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        <StatCard
            title="Total balance"
            currency={summary?.totalBalance?.currency}
            amount={summary?.totalBalance?.amount}
            icon={Wallet}
            bgColor="bg-gradient-to-br from-gray-800 to-gray-900"
            textColor="text-white"
            trend={summary?.totalBalance?.change?.trend}
            trendAmount={summary?.totalBalance?.change?.percentage}
        />
        <StatCard
            title="Total spending"
            currency={summary?.totalExpense?.currency}
            amount={summary?.totalExpense?.amount}
            icon={TrendingUp}
            trend={summary?.totalExpense?.change?.trend}
            trendAmount={summary?.totalExpense?.change?.percentage}
        />
        <StatCard
            title="Total saved"
            currency={summary?.totalSavings?.currency}
            amount={summary?.totalSavings?.amount}
            icon={PiggyBank}
            trend={summary?.totalSavings?.change?.trend}
            trendAmount={summary?.totalSavings?.change?.percentage}
        />
    </div>

}
export default Summary