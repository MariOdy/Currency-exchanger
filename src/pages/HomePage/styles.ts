import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  min-width: 100%;
  position: relative;

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 40px;
    gap: 12px;
    > div:nth-child(2) {
      padding: 0;
    }
  }
  svg {
    position: absolute;
    top: 12px;
    right: 12px;
    color: #ffffff;

    width: 30px;
    height: 30px;
  }

  footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 0 40px;
    margin-top: 20px;
  }

  @media (max-width: 960px) {
    padding: 0 20px;
    main {
      padding: 0 20px;
    }
  }
`;

export const NextPage = styled(Link)`
  background-color: #000000;
  color: #ffffff!important;
  width: 120px;
  height: 40px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
