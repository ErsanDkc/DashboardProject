import React, { useState } from 'react';
import Summary from './Summary';
import WorkingCapitalChart from './WorkingCapitalChart';
import RecentTransaction from './RecentTransaction';



export default function DashboardLeft({ summary }) {
  return (
    <div className="space-y-4 h-[740px]">
      <Summary />
      <WorkingCapitalChart />
      <RecentTransaction />
    </div>
  );
}