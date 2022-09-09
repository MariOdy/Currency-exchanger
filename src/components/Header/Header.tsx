import React from "react";
import SelectBaseCurrency from "../Selects/SelectBaseCurrency";
import { HeaderWrapper, Logo } from "./styles";

const Header: React.FC = () => (
  <HeaderWrapper>
    <Logo to="/">
      <img src="/images/Logo.svg" alt="ReExchanger logo" />
      <h2>ReExchanger</h2>
    </Logo>
    <SelectBaseCurrency />
  </HeaderWrapper>
);

export default Header;
