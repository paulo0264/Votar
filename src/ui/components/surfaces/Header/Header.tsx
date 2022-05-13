import React from "react";
import { HeaderAppBar, HeaderLogo } from "./Header.style";
import { Toolbar, Container, Typography, Link } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    
      <HeaderAppBar position={"sticky"}>
        <Toolbar component={Container}>
          <HeaderLogo src={"/img/home/processo.jpeg"} alt={"urna eletronica"} />
          <Typography>
            <Link href="#">Inicio</Link>
            <Link href="#">Lista</Link>
      </Typography>
        </Toolbar>
      </HeaderAppBar>
     
   
  );
};

export default Header;
