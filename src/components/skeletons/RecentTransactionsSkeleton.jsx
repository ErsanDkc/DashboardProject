import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const RecentTransactionSkeleton = () => {
  const rows = [1, 2, 3]; // 3 satır için

  return (
    <Card className="border border-[#F5F5F5] h-[290px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-40 bg-gray-200 animate-pulse rounded-md" />
          <Skeleton className="h-6 w-24 bg-gray-200 animate-pulse rounded-md" />
        </div>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2 px-2"><Skeleton className="h-4 w-24 bg-gray-200 animate-pulse rounded-md" /></th>
                <th className="py-2 px-2"><Skeleton className="h-4 w-16 bg-gray-200 animate-pulse rounded-md" /></th>
                <th className="py-2 px-2"><Skeleton className="h-4 w-16 bg-gray-200 animate-pulse rounded-md" /></th>
                <th className="py-2 px-2"><Skeleton className="h-4 w-16 bg-gray-200 animate-pulse rounded-md" /></th>
              </tr>
            </thead>
            <tbody className="space-y-2">
              {rows.map((idx) => (
                <tr key={idx} className="border-b border-[#F5F5F5] last:border-0">
                  <td className="py-2 px-2">
                    <div className="flex items-center gap-3">
                      <Skeleton className="w-8 h-8 rounded-lg bg-gray-200 animate-pulse" />
                      <div className="space-y-1">
                        <Skeleton className="h-4 w-24 bg-gray-200 animate-pulse rounded-md" />
                        <Skeleton className="h-3 w-20 bg-gray-200 animate-pulse rounded-md" />
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-2"><Skeleton className="h-4 w-12 bg-gray-200 animate-pulse rounded-md" /></td>
                  <td className="py-2 px-2"><Skeleton className="h-4 w-16 bg-gray-200 animate-pulse rounded-md" /></td>
                  <td className="py-2 px-2 text-right"><Skeleton className="h-4 w-12 bg-gray-200 animate-pulse rounded-md" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
       
      </CardContent>
    </Card>
  );
};

export default RecentTransactionSkeleton;
