import React from "react";
import ExchangeRates from "components/ExchangeRates";
import GithubLink from "components/GithubLink";
import Container from "components/Container";
import Header from "components/Header";
import { ExchangeRatesWrapper } from "./styles";

const ExchangeRatesPage: React.FC = () => (
  <ExchangeRatesWrapper>
    <Container>
      <Header />
      <ExchangeRates />
    </Container>
    <GithubLink />
  </ExchangeRatesWrapper>
);

export default ExchangeRatesPage;
