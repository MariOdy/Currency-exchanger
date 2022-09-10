import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  > div {
    width: 8%;
  }
  @media (max-width: 960px) {
    padding: 40px 20px;
    > div {
      width: 30%;
      height: 40px;
    }
  }
  @media (max-width: 480px) {
    padding: 30px;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  gap: 12px;
  align-items: center;
  flex: 1 0;

  font-weight: 600;
  line-height: 35px;
  h2 {
    color: black;
    font-size: 40px;
  }
  &:hover {
    color: #f4a476;
  }
  @media (max-width: 960px) {
    gap: 6px;
    h2 {
      font-size: 26px;
    }
    img {
      width: 45px;
    }
  }
  @media (max-width: 480px) {
    h2 {
      font-size: 18px;
    }
    img {
      height: 40px;
    }
  }
  @media (max-width: 400px) {
    h2 {
      display: none;
    }
    img {
      height: 60px;
    }
  }
`;
