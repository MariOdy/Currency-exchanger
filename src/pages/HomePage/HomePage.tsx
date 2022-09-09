import React from "react";
import Header from "components/Header";
import Container from "components/Container";
import GithubLink from "components/GithubLink";
import ExchangeRates from "components/ExchangeRates";
import ExchangeCalculator from "components/ExchangeCalculator";
import { HomePageWrapper, RatesPageLink } from "./styles";

const HomePage: React.FC = () => (
  <HomePageWrapper>
    <Container>
      <Header />
      <main>
        <ExchangeCalculator />
        <ExchangeRates symbols="USD,EUR" />
      </main>
      <footer>
        <RatesPageLink to="/exchangeRates">All rates &#8594;</RatesPageLink>
      </footer>
    </Container>
    <GithubLink />
  </HomePageWrapper>
);

export default HomePage;
