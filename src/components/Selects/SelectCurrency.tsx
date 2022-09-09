import React from "react";
import Select from "react-select";
import useSymbols from "src/utils/useSymbols";
import { Currency } from "../GlobalState/GlobalState";
import { Box, FormatOptionWrapper } from "./styles";

const formatOptionLabel: React.FC<Currency> = ({ value, label }) => (
  <FormatOptionWrapper>
    <div className="format-label">{label}</div>
    <span>|</span>
    <div className="format-fullName">{value}</div>
  </FormatOptionWrapper>
);

interface SelectCurrencyProps {
  value: Currency;
  onChange: (newValue: Currency) => any;
}

const SelectCurrency: React.FC<SelectCurrencyProps> = ({ value, onChange }) => {
  const symbols = useSymbols();

  const symbolsData = symbols?.data?.map((symbol) => ({
    label: symbol.code,
    value: symbol.name,
  }));

  return (
    <Box>
      <Select
        value={value}
        onChange={(newValue) => onChange(newValue as Currency)}
        options={symbolsData}
        formatOptionLabel={formatOptionLabel}
        classNamePrefix="react-select"
        className="react-select-container"
      />
    </Box>
  );
};

export default SelectCurrency;
