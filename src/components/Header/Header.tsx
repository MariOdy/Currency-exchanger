import React from "react";
import SelectBaseCurrency from "../Selects/SelectBaseCurrency";
import { HeaderWrapper, Logo } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo to="/">
        <img src="/images/Logo.svg" alt="logo" />
        <h2>ReExchanger</h2>
      </Logo>
      <SelectBaseCurrency />
    </HeaderWrapper>
  );
};

export default Header;
