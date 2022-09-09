import React from "react";
import { useQuery } from "@tanstack/react-query";
import converter from "@cxllm/currency";

/** Fetches available symbols */
const getSymbols = () => converter.currencies();

/** Use available currencies */
const useSymbols = () => {
  const { data, ...hookProps } = useQuery(["symbols"], getSymbols);

  // Convert array of currencies to object
  const currencies = React.useMemo(() => {
    if (!data) return {};

    return Object.fromEntries(
      data.map((currency) => [currency.code, currency])
    );
  }, [data]);

  return { data, symbols: data, currencies, ...hookProps };
};

export default useSymbols;
