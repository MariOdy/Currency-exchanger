import React from "react";
import { ExchangeRateWrapper } from "./styles";

interface ExchangeRateProps {
  code: string;
  name: string;
  rate: number;
  baseCode: string;
}

const ExchangeRate: React.FC<ExchangeRateProps> = ({
  code,
  name,
  rate,
  baseCode,
}) => (
  <ExchangeRateWrapper>
    <div>
      <h3>{code}</h3>
      <span> | </span>
      <p>{name}</p>
    </div>
    <div>
      <p>{rate}</p>
      <div>{baseCode}</div>
    </div>
  </ExchangeRateWrapper>
);

export default ExchangeRate;
