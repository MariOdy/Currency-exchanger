import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Rates = Record<string, number>;

/** Returns latest rates for the selected currency */
const getRates = async (
  base = "UAH",
  symbols?: string
): Promise<Rates> | null => {
  if (!base) return null;
  const res = await axios.get(
    `https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`
  );
  const data: Rates = res?.data?.rates;
  return data;
};

/** Fetches latest rates for the passed based currency */
const useRates = (base = "UAH", symbols?: string) => {
  const { data, ...hookProps } = useQuery<Rates>(
    ["rates", base, symbols],
    () => getRates(base, symbols),
    { keepPreviousData: true }
  );

  return { data, rates: data, ...hookProps };
};

export default useRates;
