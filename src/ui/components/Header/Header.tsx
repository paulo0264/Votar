import React from "react";
import { HeaderAppBar, HeaderLogo } from "./Header.style";
import { Toolbar, Container, Link  } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar component={Container}>
        <HeaderLogo src={"/img/home/processo.jpeg"} alt={"urna eletronica"} />
          <Link href="/">Inicio</Link>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
