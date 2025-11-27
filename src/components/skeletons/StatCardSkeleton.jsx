import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const StatCardSkeleton = ({ bgColor = "bg-white", textColor = "text-gray-900" }) => {
  return (
    <div className={`${bgColor} ${textColor} border-0 shadow-sm h-[105px] rounded-xl`}>
      <div className="p-6 flex items-center gap-3 min-w-0">

        {/* Icon */}
        <Skeleton className={`w-5 h-5 flex-shrink-0 rounded-md ${bgColor === "bg-white" ? "bg-gray-200" : "bg-gray-400"} animate-pulse`} />

        {/* Text Content */}
        <div className="flex-1 min-w-0 space-y-2">

          {/* Title + Trend */}
          <div className="flex items-center justify-between min-w-0">
            <Skeleton className="h-4 w-24 bg-gray-200 animate-pulse rounded-md" />
            <Skeleton className="h-4 w-10 bg-gray-200 animate-pulse rounded-md" />
          </div>

          {/* Amount */}
          <Skeleton className="h-6 w-32 bg-gray-200 animate-pulse rounded-md mt-2" />

        </div>
      </div>
    </div>
  );
};

export default StatCardSkeleton;
