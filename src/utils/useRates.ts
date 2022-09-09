import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Rates = Record<string, number>;

const getRates = async (base = "UAH", symbols?: string) => {
  const res = await axios.get(
    `https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`
  );
  const data: Rates = res?.data?.rates;
  return data;
};

const useRates = (base = "UAH", symbols?: string) => {
  const dataRates = useQuery<Rates>(
    ["rates", base, symbols],
    () => getRates(base, symbols),
    { keepPreviousData: true }
  );
  return dataRates;
};

export default useRates;
