import React from "react";
import StatCardSkeleton from "./StatCardSkeleton";

const SummarySkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
      <StatCardSkeleton bgColor="bg-gray-300/20" textColor="text-gray-400" />
      <StatCardSkeleton bgColor="bg-gray-300/20" textColor="text-gray-400" />
      <StatCardSkeleton bgColor="bg-gray-300/20" textColor="text-gray-400" />
    </div>
  );
};

export default SummarySkeleton;
