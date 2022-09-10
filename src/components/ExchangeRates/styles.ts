import styled from "styled-components";

export const ExchangeRateWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  height: 50px;
  padding: 4px 12px;
  width: 100%;

  align-items: center;
  display: flex;
  flex: 1 0;
  justify-content: space-between;

  > div {
    display: flex;
    justify-content: flex-start;
    gap: 8px;
    align-items: center;

    h3 {
      font-size: 20px;
      font-weight: 600;
    }
    p {
      font-weight: 500;
      font-size: 16px;
    }
    > div {
      font-size: 16px;
      font-weight: 600;
    }
  }
  @media (max-width: 480px) {
    > div {
      flex: 1;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      padding: 4px;
      span {
        display: none;
      }
      p {
        font-size: 14px;
        white-space: pre-wrap;
      }
    }
    > div:nth-child(2) {
      flex: 0;
      align-items: center;
    }
  }
`;

export const RatesWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  padding: 0 40px;
  width: 100%;

  @media (max-width: 960px) {
    padding: 0 20px;
    margin-top: -10px;
  }
`;
