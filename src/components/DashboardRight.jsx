import React from "react";
import ScheduledTransfers from "./ScheduledTransfers";
import WalletComp from "./Wallet";

export default function DashboardRight() {


  return (
    <div className="w-full h-[740px] p-4 flex flex-col justify-between">
    <WalletComp />

     <ScheduledTransfers />
    </div>
  );
}