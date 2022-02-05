import React, { VFC } from "react"
import { Typography } from "@mui/material"
import styled from "@emotion/styled"

const Header: VFC = () => {
  const StyledNav = styled.nav`
    box-shadow: "0px 13px 10px 5px rgba(0, 0, 0, 0.12)";
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    position: sticky;
    top: 0;
    background-color: #ffffffdf;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #000000;
  `
  const StyledLogoText = styled(Typography)``
  return (
    <StyledNav>
      <StyledLogoText>Wecken</StyledLogoText>
    </StyledNav>
  )
}

export default Header
