import React from "react";
import Container from "../../Container";
import { BsGithub } from "react-icons/bs";
import { HomePageWrapper, NextPage } from "./styles";
import Header from "../../components/Header/Header";
import ExchangeBlock from "src/components/ExchangeBlock/ExchangeBlock";
import ExchangeRates from "src/components/ExchangeRate/ExchangeRates";

const HomePage: React.FC = () => {
  return (
    <HomePageWrapper>
      <Container>
        <Header />
        <main>
          <ExchangeBlock />
          <ExchangeRates symbols="USD,EUR" />
        </main>
        <footer>
          <NextPage to="/exchangeRates">All rates &#8594;</NextPage>
        </footer>
      </Container>
      <a href="https://github.com/MariOdy" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </HomePageWrapper>
  );
};

export default HomePage;
