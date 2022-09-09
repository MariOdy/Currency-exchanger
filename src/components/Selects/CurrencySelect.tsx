import React from "react";
import Select from "react-select";
import useSymbols from "utils/useSymbols";
import type Currency from "types/Currency";
import { Box, FormatOptionWrapper } from "./styles";

// Format currency to "Code | Name" format
const formatOptionLabel: React.FC<Currency> = ({ value, label }) => (
  <FormatOptionWrapper>
    <div className="format-label">{label}</div>
    <span>|</span>
    <div className="format-fullName">{value}</div>
  </FormatOptionWrapper>
);

interface CurrencySelectProps {
  value: Currency;
  onChange: (newValue: Currency) => any;
}

/** Custom selector for currencies */
const CurrencySelect: React.FC<CurrencySelectProps> = ({ value, onChange }) => {
  const { symbols } = useSymbols();

  /** Format symbols array to select options */
  const symbolsData = React.useMemo(
    () =>
      symbols?.map((symbol) => ({
        label: symbol.code,
        value: symbol.name,
      })) || [],
    [symbols]
  );

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

export default CurrencySelect;
