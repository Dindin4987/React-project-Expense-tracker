import React from "react";
import { useAuth } from "../redux/useAuth";
import Navigation from "./Navigation";
import Layout2 from "./Layout2";
import Layout1 from "./Layout1";

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <Layout2 /> : <Layout1 />}
    </header>
  );
};

export default Header;
