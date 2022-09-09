import React from "react";
import { BsGithub } from "react-icons/bs";
import ExchangeRates from "src/components/ExchangeRate/ExchangeRates";
import Container from "src/Container";
import Header from "../../components/Header/Header";
import { ExchangeRatesWrapper } from "./styles";

const ExchangeRatesPage: React.FC = () => {
  return (
    <ExchangeRatesWrapper>
      <Container>
        <Header />
        <ExchangeRates />
      </Container>
      <a href="https://github.com/MariOdy" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </ExchangeRatesWrapper>
  );
};

export default ExchangeRatesPage;
