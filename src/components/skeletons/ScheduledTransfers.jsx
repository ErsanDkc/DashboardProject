import { Skeleton } from "../ui/skeleton";

const ScheduledTransfersSkeleton = () => {
    return (
        <div className="space-y-4 p-4 min-h-[200px] bg-white">

            <div className="flex items-center justify-between mb-4 gap-1">
                <Skeleton className="h-6 w-48 bg-gray-200 animate-pulse rounded-md" />
                <Skeleton className="h-6 w-24 bg-gray-200 animate-pulse rounded-md" />
            </div>

            <div className="space-y-4">
                {[1, 2, 3].map((idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-between min-w-0"
                    >
                        <div className="flex items-center gap-3 min-w-0">
                            <Skeleton className="w-10 h-10 rounded-full bg-gray-200 animate-pulse flex-shrink-0" />
                            <div className="space-y-2 min-w-0">
                                <Skeleton className="h-4 w-32 bg-gray-200 animate-pulse rounded-md" />
                                <Skeleton className="h-3 w-24 bg-gray-200 animate-pulse rounded-md" />
                            </div>
                        </div>

                        <Skeleton className="h-5 w-16 bg-gray-200 animate-pulse rounded-md" />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ScheduledTransfersSkeleton