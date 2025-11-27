import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { formatCurrency } from '@/lib/utils';
import { getWorkingCapital } from '@/services/apis';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import WorkingCapitalChartSkeleton from './skeletons/WorkingCapitalSkeleton';

const WorkingCapitalChart = () => {
    const [timePeriod, setTimePeriod] = useState('last6Months');
    const { data, isLoading } = useQuery({
        queryKey: ["workingCapital"],
        queryFn: getWorkingCapital
    })

    if (isLoading) return <WorkingCapitalChartSkeleton />
    return <Card className="border border-[#F5F5F5]">
        <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-4 text-[#1B212D]">
                <CardTitle className="text-xl ">Working Capital</CardTitle>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                        <span className="text-sm ">Income</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <span className="text-sm ">Expenses</span>
                    </div>
                    <Select value={timePeriod} onValueChange={setTimePeriod}>
                        <SelectTrigger className="w-[140px] bg-white  border-[#F8F8F8]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-[#F8F8F8]">
                            <SelectItem value="last6Months">Son 6 Ay</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <ResponsiveContainer width="100%" height={290}>
                <LineChart data={data?.data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#929EAE" />
                    <XAxis
                        dataKey="month"
                        stroke="#929EAE"
                        fontSize={12}
                        tickLine={false}
                    />
                    <YAxis
                        stroke="#929EAE"
                        fontSize={12}
                        tickLine={false}
                        tickFormatter={(value) => `${value / 1000}k`}
                    />
                    <Tooltip
                        formatter={(value) => `${formatCurrency(value, data?.currency)}`}
                        contentStyle={{
                            borderRadius: '8px',
                            border: '1px solid #e5e7eb',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="income"
                        stroke="#14b8a6"
                        strokeWidth={2}
                        dot={{ fill: '#14b8a6', r: 4 }}
                        activeDot={{ r: 6 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="expense"
                        stroke="#fbbf24"
                        strokeWidth={2}
                        dot={{ fill: '#fbbf24', r: 4 }}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
}
export default WorkingCapitalChart