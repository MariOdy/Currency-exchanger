import styled from "styled-components";

export const ExchangeRateWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 4px 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  > div {
    display: flex;
    justify-content: flex-start;
    gap: 8px;
    align-items: center;

    h2 {
      font-size: 20px;
      font-weight: 600;
    }
    h4 {
      font-weight: 500;
      font-size: 16px;
    }
    > div {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export const RatesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 0 40px;

  @media (max-width: 960px) {
    padding: 0 20px;
    margin-top: -10px;
  }
`;
