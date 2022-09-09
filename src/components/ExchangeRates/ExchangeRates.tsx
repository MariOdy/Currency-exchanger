import React from "react";
import useRates from "utils/useRates";
import useSymbols from "utils/useSymbols";
import { useAppContext } from "GlobalState";
import ExchangeRate from "./ExchangeRate";
import { RatesWrapper } from "./styles";

interface ExchangeRatesProps {
  symbols?: string;
}

const ExchangeRates: React.FC<ExchangeRatesProps> = ({ symbols }) => {
  const { currentCurrency } = useAppContext();

  const { rates } = useRates(currentCurrency.label, symbols);
  const { currencies } = useSymbols();

  return (
    <RatesWrapper>
      {Object.entries(rates || {}).map(([code, rate]) => (
        <ExchangeRate
          code={code}
          name={currencies[code]?.name}
          rate={rate}
          baseCode={currentCurrency.label}
          key={code}
        />
      ))}
    </RatesWrapper>
  );
};

export default ExchangeRates;
