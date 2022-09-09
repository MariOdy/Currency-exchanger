import { useQuery } from "@tanstack/react-query";
import converter from "@cxllm/currency";

interface ConvertionResult {
  from: string;
  to: string;
  amount: number;
  rate: number;
  conversion: number;
  updated: Date;
}

/** Get exchange rate for two currencies */
const getConvert = (
  from: string,
  to: string,
  amount = 1
): Promise<ConvertionResult> | null => {
  if (!from || !to) return null;
  return converter.convert(amount, from, to);
};

/** Fetches exchange rate for two currencies */
const useConvert = (from: string, to: string, amount = 1) => {
  const { data, ...hookProps } = useQuery<ConvertionResult>(
    ["convert", from, to, amount],
    () => getConvert(from, to, amount),
    { keepPreviousData: true }
  );

  return { data, rate: data?.rate || 1, ...hookProps };
};

export default useConvert;
