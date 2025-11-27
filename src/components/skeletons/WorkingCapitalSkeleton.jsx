import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const WorkingCapitalChartSkeleton = () => {
  return (
    <Card className="border border-[#F5F5F5]">
      <CardHeader>
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Title */}
          <Skeleton className="h-6 w-40 bg-gray-200 animate-pulse rounded-md" />

          {/* Legend + Select */}
          <div className="flex items-center gap-4">
            <Skeleton className="h-4 w-16 bg-gray-200 animate-pulse rounded-md" />
            <Skeleton className="h-4 w-16 bg-gray-200 animate-pulse rounded-md" />
            <Skeleton className="h-6 w-36 bg-gray-200 animate-pulse rounded-md" />
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {/* Chart Area */}
        <Skeleton className="w-full h-[290px] bg-gray-200 animate-pulse rounded-md" />
      </CardContent>
    </Card>
  );
};

export default WorkingCapitalChartSkeleton;
