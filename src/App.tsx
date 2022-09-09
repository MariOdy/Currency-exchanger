import React from "react";
import { Routes, Route } from "react-router";
import ExchangeRatesPage from "./pages/ExchangeRatesPage/ExchangeRatesPage";
import HomePage from "./pages/HomePage/HomePage";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GlobalStateProvider } from "./components/GlobalState/GlobalState";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStateProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exchangeRates" element={<ExchangeRatesPage />} />
        </Routes>
      </GlobalStateProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
