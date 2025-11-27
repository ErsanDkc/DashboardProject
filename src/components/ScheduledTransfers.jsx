import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Ellipsis } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getTransactionsScheduled } from "@/services/apis";
import { Skeleton } from "./ui/skeleton";
import ScheduledTransfersSkeleton from "./skeletons/ScheduledTransfers";

const ScheduledTransfers = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["scheduledData"],
        queryFn: getTransactionsScheduled
    })

    return <>
        {
            isLoading ? <ScheduledTransfersSkeleton /> : <div className="space-y-1">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Scheduled Transfers</h2>
                    <Button variant="ghost" className="text-sm text-[#29A073] flex items-center gap-1">
                        View All <ChevronRight size={16} />
                    </Button>
                </div>

                <div className="space-y-4">
                    {data?.transfers?.map((t, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-medium text-sm">{t.name}</p>
                                    <p className="text-xs text-gray-500">{t.date}</p>
                                </div>
                            </div>

                            <p className="font-semibold text-gray-500">{t.amount}</p>
                        </div>
                    ))}
                </div>
            </div>
        }
    </>
}
export default ScheduledTransfers