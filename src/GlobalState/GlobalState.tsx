import React, { useMemo, useState } from "react";
import type Currency from "types/Currency";
import { UAHCurency } from "utils/currencies";

interface AppContext {
  currentCurrency: Currency;
  setCurrentCurrency: React.Dispatch<React.SetStateAction<Currency>>;
}

const defaultValue: AppContext = {
  currentCurrency: UAHCurency,
  setCurrentCurrency: () => {},
};

// Create context
export const appContext = React.createContext<AppContext>(defaultValue);

// Use context (hook)
export const useAppContext = () => React.useContext(appContext);

interface GlobalStateProviderProps {
  children: React.ReactNode;
}

// Context Provider
export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({
  children,
}) => {
  const [currentCurrency, setCurrentCurrency] = useState<Currency>(UAHCurency);

  const value = useMemo(
    () => ({ currentCurrency, setCurrentCurrency }),
    [currentCurrency, setCurrentCurrency]
  );

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};
