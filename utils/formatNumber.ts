import { formatNumberProps } from "@/types";

export const formatNumber = (value: number, options: formatNumberProps = {}): string => {
  return value.toLocaleString(undefined, {
    style: options.currency ? "currency" : "decimal",
    currency: options.currency,
    maximumFractionDigits: options.maximumFractionDigits ?? 0,
    minimumFractionDigits: options.minimumFractionDigits ?? 0,
  })
}