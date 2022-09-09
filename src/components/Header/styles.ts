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
`;

export const Logo = styled(Link)`
  display: flex;
  gap: 12px;
  align-items: center;

  font-weight: 600;
  font-size: 26px;
  line-height: 35px;
  h2 {
    color: black;
  }
  &:hover {
    color: #f4a476;
  }
  @media (max-width: 960px) {
    font-size: 16px;
    gap: 6px;

    img {
      width: 35px;
    }
  }
`;
