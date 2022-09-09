import styled from "styled-components";

export const Box = styled.div`
  background-color: #ffffff;
  padding: 4px 0;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  .react-select__placeholder {
    font-weight: 300;
    text-align: left;
  }

  .react-select-container {
    flex: 1;
    .react-select__menu {
      width: 100%;
      border: none;
      color: inherit;
      margin-top: 8px;
      border-radius: 8px;
      overflow: hidden;

      .react-select__menu-list {
        padding: 0;
        .react-select__option {
          padding: 8px;
        }
      }
    }
    .react-select__control {
      border-radius: 100px;
      border: none;
      box-shadow: none;
      padding-left: 0;
      flex-direction: row-reverse;
      .react-select__indicators {
        display: none;
      }
      svg {
        display: none;
      }
    }
  }
`;

export const FormatOptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 10% auto 80%;
  align-items: center;
  justify-content: start;
  gap: 8px;
  .format-fullName {
    text-align: left;
    font-weight: 500;
    font-size: 16px;
    padding: 0 4px;
  }
  .format-label {
    text-align: center;
    font-size: 20px;
  }

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    white-space: pre-line;
    gap: 2px;
    span {
      display: none;
    }
    .format-fullName {
      font-size: 10px;
      text-align: center;
    }
  }
`;
export const FormatOptionBaseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
