import React from "react";
import { useQuery } from "@tanstack/react-query";
import converter from "@cxllm/currency";

const getSymbols = () => converter.currencies();

const useSymbols = () => {
  const { data, ...hookProps } = useQuery(["symbols"], getSymbols);

  const currencies = React.useMemo(() => {
    if (!data) return {};

    return Object.fromEntries(
      data.map((currency) => [currency.code, currency])
    );
  }, [data]);

  return { data, currencies, ...hookProps };
};

export default useSymbols;
