import React from "react";
import type Currency from "types/Currency";
import useConvert from "utils/useConvert";
import { EURCurency, UAHCurency } from "utils/currencies";
import CurrencySelect from "components/Selects/CurrencySelect";
import { ExchangeBlockWrapper } from "./styles";

const ExchangeCalculator: React.FC = () => {
  const [fromCurrency, setFromCurrency] = React.useState<Currency>(EURCurency);
  const [toCurrency, setToCurrency] = React.useState<Currency>(UAHCurency);
  const [amount, setAmount] = React.useState<number>(1);

  const { rate } = useConvert(fromCurrency.label, toCurrency.label);

  // Swap from and to currencies
  const swapCurrencies = React.useCallback(() => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }, [fromCurrency, toCurrency]);

  return (
    <ExchangeBlockWrapper>
      <div>
        <CurrencySelect value={fromCurrency} onChange={setFromCurrency} />
        <button
          className="middle middle-btn"
          type="button"
          onClick={swapCurrencies}
          aria-label="Swap currencies"
        >
          &#10598;
        </button>
        <CurrencySelect value={toCurrency} onChange={setToCurrency} />
      </div>
      <div>
        <input
          type="number"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />
        <div className="middle">&#8776;</div>
        <input
          type="number"
          placeholder="0.00"
          value={amount * rate}
          onChange={(e) => setAmount(+e.target.value / rate)}
        />
      </div>
    </ExchangeBlockWrapper>
  );
};

export default ExchangeCalculator;
