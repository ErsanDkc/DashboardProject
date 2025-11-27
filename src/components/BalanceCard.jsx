// components/balance-card.jsx
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function BalanceCard({
  title,
  amount,
  isActive = false,
  onClick,
  src
}) {
  return (
    <Card
      className={cn(
        "cursor-pointer transition-all duration-200 border-2",
        isActive
          ? "bg-black border-black text-white"
          : "bg-white border-gray-200 text-gray-900 hover:border-gray-300"
      )}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className={cn(
            "p-3 rounded-lg flex items-center justify-center",
            isActive ? "bg-gray-800" : "bg-gray-100"
          )}>
            <img
              src={src}
              alt={title}
              className={cn(
                "w-6 h-6",
                isActive ? "filter invert" : "" 
              )}
            />
          </div>
          <div>
            <p className={cn(
              "text-sm font-medium mb-1",
              isActive ? "text-gray-300" : "text-gray-600"
            )}>
              {title}
            </p>
            <p className={cn(
              "text-2xl font-bold",
              isActive ? "text-white" : "text-gray-900"
            )}>
              {amount}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}