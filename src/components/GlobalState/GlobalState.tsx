import React, { useMemo, useState } from "react";

 export interface Currency {
  value: string;
  label: string;
}

interface AppContext {
  currentCurrency: Currency;
  setCurrentCurrency: React.Dispatch<React.SetStateAction<Currency>>;
}

const UAHCurency = {
  label: "UAH",
  value: "Ukrainian Hryvnia",
};

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
