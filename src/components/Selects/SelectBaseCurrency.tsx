import React from "react";
import Select from "react-select";
import type Currency from "types/Currency";
import useSymbols from "utils/useSymbols";
import { useAppContext } from "GlobalState";
import { Box, FormatOptionBaseWrapper } from "./styles";

const formatOptionLabel: React.FC<Currency> = ({ label }) => (
  <FormatOptionBaseWrapper>
    <div className="format-label">{label}</div>
  </FormatOptionBaseWrapper>
);

const SelectBaseCurrency: React.FC = () => {
  const { currentCurrency, setCurrentCurrency } = useAppContext();

  const symbols = useSymbols();

  const symbolsData = symbols?.data?.map((symbol) => ({
    label: symbol.code,
    value: symbol.name,
  }));

  return (
    <Box>
      <Select
        value={currentCurrency}
        onChange={(newValue) => setCurrentCurrency(newValue as Currency)}
        options={symbolsData}
        formatOptionLabel={formatOptionLabel}
        classNamePrefix="react-select"
        className="react-select-container"
      />
    </Box>
  );
};

export default SelectBaseCurrency;
