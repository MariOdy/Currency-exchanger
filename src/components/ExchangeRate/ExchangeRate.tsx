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
      <h2>{code}</h2>
      <span> | </span>
      <h4>{name}</h4>
    </div>
    <div>
      <h4>{rate}</h4>
      <div>{baseCode}</div>
    </div>
  </ExchangeRateWrapper>
);

export default ExchangeRate;
