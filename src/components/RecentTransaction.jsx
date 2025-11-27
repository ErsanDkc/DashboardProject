import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getTransactionsResent } from '@/services/apis';
import dayjs from 'dayjs';
import RecentTransactionSkeleton from './skeletons/RecentTransactionsSkeleton';

const RecentTransaction = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const { data, isLoading } = useQuery({
    queryKey: ["recentTransaction"],
    queryFn: getTransactionsResent
  })
  const totalPages = data ? Math.ceil(data.summary?.count / itemsPerPage) : 0;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTransactions = data ? data?.transactions?.slice(startIndex, endIndex) : [];
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
 if(isLoading) return <RecentTransactionSkeleton />

  return <Card className="border border-[#F5F5F5] h-[290px]">
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-xl ">Recent Transaction</CardTitle>
        <Button variant="ghost" className="text-sm text-[#29A073] flex items-center ">
          View All <ChevronRight size={16} />
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#F5F5F5] text-[#929EAE]">
              <th className="text-left py-1 px-2 text-xs font-medium  uppercase tracking-wider">
                NAME/BUSINESS
              </th>
              <th className="text-left py-1 px-2 text-xs font-medium  uppercase tracking-wider">
                TYPE
              </th>
              <th className="text-left py-1 px-2 text-xs font-medium  uppercase tracking-wider">
                AMOUNT
              </th>
              <th className="text-right py-1 px-2 text-xs font-medium  uppercase tracking-wider">
                DATE
              </th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions?.map((transaction) => (
              <tr key={transaction.id} className="border-b border-[#F5F5F5] last:border-0 hover:bg-gray-50 transition-colors">
                <td className="py-2 px-2">
                  <div className="flex items-center gap-3">
                    <div >
                      <img src={transaction.image} className='w-8 h-8 rounded-lg' />
                    </div>
                    <div>
                      <p className="font-medium ">{transaction.name}</p>
                      <p className="text-sm ">{transaction.business}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-2 ">{transaction.type}</td>
                <td className="py-4 px-2 font-semibold ">{transaction.amount}</td>
                <td className="py-4 px-2  text-right">{dayjs(transaction.date)?.format("DD/MM/YYYY")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#F5F5F5]">
          <div className="text-sm text-gray-500">
            Sayfa {currentPage} / {totalPages}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft size={16} />
            </Button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? "default" : "outline"}
                  size="sm"
                  onClick={() => goToPage(pageNum)}
                  className={`h-8 w-8 p-0 ${currentPage === pageNum
                      ? 'bg-lime-400 hover:bg-lime-500 text-gray-900'
                      : ''
                    }`}
                >
                  {pageNum}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="h-8 w-8 p-0"
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      )}
    </CardContent>
  </Card>
}
export default RecentTransaction