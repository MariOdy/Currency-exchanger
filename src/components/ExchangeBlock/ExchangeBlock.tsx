import React from "react";
import useConvert from "src/utils/useConvert";
import SelectCurrency from "../Selects/SelectCurrency";
import { ExchangeBlockWrapper } from "./styles";
import { Currency } from "../GlobalState/GlobalState";

const UAHCurency = {
  label: "UAH",
  value: "Ukrainian Hryvnia",
};

const EURCurency = {
  label: "EUR",
  value: "Euro",
};

const ExchangeBlock: React.FC = () => {
  const [fromCurrency, setFromCurrency] = React.useState<Currency>(EURCurency);
  const [toCurrency, setToCurrency] = React.useState<Currency>(UAHCurency);
  const [amount, setAmount] = React.useState<number>(1);

  const convert = useConvert(fromCurrency.label, toCurrency.label);

  const rate = convert.data?.rate || 1;

  // Swap from and to currencies
  const swapCurrencies = React.useCallback(() => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }, [fromCurrency, toCurrency]);

  return (
    <ExchangeBlockWrapper>
      <div>
        <SelectCurrency value={fromCurrency} onChange={setFromCurrency} />
        <button
          className="middle middle-btn"
          type="button"
          onClick={swapCurrencies}
          aria-label="Swap currencies"
        >
          &#10598;
        </button>
        <SelectCurrency value={toCurrency} onChange={setToCurrency} />
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

export default ExchangeBlock;
