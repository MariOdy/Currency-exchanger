import React from "react";
import { Routes, Route } from "react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { GlobalStateProvider } from "GlobalState";
import ExchangeRatesPage from "pages/ExchangeRatesPage";
import HomePage from "pages/HomePage";

// Create Query Client for the App
const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalStateProvider>
      <Routes>
        <Route path="/exchangeRates" element={<ExchangeRatesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </GlobalStateProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
