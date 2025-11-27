import React from "react";
import { Skeleton } from "../ui/skeleton";

const WalletCompSkeleton = () => {
  return (
    <div className="w-full max-w-md mx-auto space-y-4 p-4">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Skeleton className="h-6 w-32 bg-gray-200 animate-pulse rounded-md" />
        <Skeleton className="h-6 w-6 bg-gray-200 animate-pulse rounded-full" />
      </div>

      {/* First Card Skeleton */}
      <div className="rounded-2xl h-[210px] bg-gray-300/30 p-6 relative overflow-hidden shadow-xl">
        <div className="flex flex-col justify-between h-full">
          {/* Bank Name */}
          <Skeleton className="h-4 w-32 bg-gray-200 animate-pulse rounded-md" />
          
          {/* Chip + Contactless */}
          <div className="flex justify-between items-center gap-3 mt-4">
            <Skeleton className="w-10 h-8 bg-gray-200 animate-pulse rounded-md" />
            <Skeleton className="w-7 h-7 bg-gray-200 animate-pulse rounded-full" />
          </div>

          {/* Card Number */}
          <Skeleton className="h-6 w-48 bg-gray-200 animate-pulse rounded-md mt-4" />

          {/* Logo Bottom Right */}
          <Skeleton className="w-6 h-4 bg-gray-200 animate-pulse rounded-md self-end mt-2" />
        </div>
      </div>

      {/* Second Card Skeleton */}
      <div className="h-[172px] relative">
        <div className="h-full w-full rounded-xl overflow-hidden backdrop-blur-sm border border-gray-200/10 bg-gray-200/20 shadow-lg p-5 flex flex-col justify-between">
          {/* Bank Name */}
          <Skeleton className="h-3 w-28 bg-gray-200 animate-pulse rounded-md" />

          {/* Chip + Contactless */}
          <div className="flex justify-between items-center gap-3 mt-2">
            <Skeleton className="w-10 h-8 bg-gray-200 animate-pulse rounded-md" />
            <Skeleton className="w-5 h-5 bg-gray-200 animate-pulse rounded-full" />
          </div>

          {/* Card Number */}
          <Skeleton className="h-5 w-40 bg-gray-200 animate-pulse rounded-md mt-4" />

          {/* Expiry + Network */}
          <div className="flex justify-between mt-2">
            <Skeleton className="h-3 w-16 bg-gray-200 animate-pulse rounded-md" />
            <Skeleton className="h-3 w-12 bg-gray-200 animate-pulse rounded-md" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default WalletCompSkeleton;
