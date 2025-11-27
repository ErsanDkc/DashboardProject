import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

// Para formatlama fonksiyonu


const StatCard = ({
  title,
  amount,
  icon: Icon,
  currency,
  trend,
  bgColor = "bg-white",
  textColor = "text-gray-900",
  trendAmount
}) => {
  const trendColor =
    trend === "up"
      ? "text-green-500"
      : trend === "down"
        ? "text-red-500"
        : "text-gray-400";

  const TrendIcon = trend === "up" ? TrendingUp : TrendingDown;

  return (
    <Card className={`${bgColor} ${textColor} border-0 shadow-sm h-[105px]`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 min-w-0">

          <div
            className={`p-3 rounded-xl ${bgColor === "bg-white" ? "bg-gray-50" : "bg-white/10"
              }`}
          >
            <Icon className="w-5 h-5 flex-shrink-0" />
          </div>

          <div className="flex-1 min-w-0">

            <div className="flex items-center justify-between min-w-0">
              <p
                className={`text-sm mb-2 truncate ${bgColor === "bg-white" ? "text-gray-600" : "opacity-90"
                  }`}
              >
                {title}
              </p>

              <div className="flex items-center gap-1 flex-shrink-0">
                <TrendIcon className={`w-4 h-4 ${trendColor}`} />
                <span className={`${trendColor} text-sm`}>
                  {trendAmount}%
                </span>
              </div>
            </div>

            {/* Amount (Taşma buradaydı → FIX edildi) */}
            <p className="text-2xl font-bold break-words truncate min-w-0">
              {formatCurrency(amount, currency)}
            </p>

          </div>

        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
