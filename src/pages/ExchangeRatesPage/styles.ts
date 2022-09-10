import styled from "styled-components";

export const ExchangeRatesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  min-width: 100%;
  position: relative;
  padding: 20px 0;
  > div {
    height: 100%;
  }
  svg {
    position: absolute;
    right: 8px;
    bottom: 8px;
    color: #ffffff;

    width: 30px;
    height: 30px;
  }
  @media (max-width: 960px) {
    padding: 20px;
    > div {
      margin: auto 20px;
    }
  }
`;
