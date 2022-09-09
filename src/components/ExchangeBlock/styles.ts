import styled from "styled-components";

export const ExchangeBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 4px;
  margin-bottom: 50px;

  > div {
    display: grid;
    grid-template-columns: 45% auto 45%;
    justify-items: center;
    gap: 20px;
    align-items: center;
    width: 100%;
    .middle-btn {
      background-color: #ffffff;
    }
    .middle {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: none;
      display: flex;
      justify-content: center;
      line-height: 46px;
      font-size: 26px;
    }
  }
  > div:nth-child(2) {
    input {
      width: 100%;
      height: 60px;
      background: #f9f5eb;
      font-size: 20px;
      outline: none;
      padding: 4px 12px;
      border-radius: 8px;
      border: none;
    }
  }
  @media (max-width: 960px) {
    gap: 8px;
    > div {
      display: flex;
      gap: 8px;
      .middle {
        border-radius: 8px;
        height: 30px;
        width: 80px;
      }
    }
    > div:nth-child(2) {
      input {
        height: 50px;
        font-size: 20px;
      }
    }
  }
`;
