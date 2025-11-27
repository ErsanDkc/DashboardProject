import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const  formatCurrency = (value, currency = "TRY") => {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(value);
};
export const formatCardExpiry = (month, year) => {
  const formattedMonth = String(month || '').padStart(2, '0');
  return `${formattedMonth}/${year || ''}`;
};