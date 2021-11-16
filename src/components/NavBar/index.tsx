import { Button } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";

import { MenuContainer, NavBarContainer } from "./style";

interface NavBarProps {}

const NavBar: React.FunctionComponent<NavBarProps> = () => {
  return (
    <NavBarContainer>
      <MenuContainer>
        <Link title="Home" to="/" style={{ textDecoration: "none" }}>
          <Button style={{ fontSize: "20px", color: "white" }}>Home</Button>
        </Link>
        <Link
          title="Favourite List"
          to="/favouritemovies"
          style={{ textDecoration: "none" }}
        >
          <Button style={{ fontSize: "20px", color: "white" }}>
            Favourites
          </Button>
        </Link>
      </MenuContainer>
    </NavBarContainer>
  );
};

export default NavBar;
