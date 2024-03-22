import React, { useEffect, useState } from "react";
import { Flex, Button, Switch, Separator, IconButton } from "../src/index";
import Logo from "../Logo";
import { PlayIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

const Nav = ({ setDark, dark, resetAnimation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 72);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClasses = `Navbar darkmode ${isScrolled ? " scrolled" : ""}`;

  return (
    <>
      <Flex gap={100} customClass={navClasses}>
        <a href="/" style={{ color: "var(--white)" }}>
          <Logo />
        </a>
        <Flex gap={100} style={{ marginLeft: "var(--size-400)" }}>
          {/* <Button
            onClick={() => {
              navigate("");
            }}
            variant="ghost"
          >
            Start
          </Button> */}
          <Button
            onClick={() => {
              navigate("/introduction");
            }}
            variant="ghost"
          >
            Introduction
          </Button>
          <Button
            onClick={() => {
              window.open("https://www.npmjs.com/package/blocksin-system");
            }}
            variant="ghost"
          >
            NPM
          </Button>
          <Button
            onClick={() => {
              window.open("https://blocksin.com/");
            }}
            variant="ghost"
          >
            BlocksIn App
          </Button>
        </Flex>
        <Flex style={{ marginLeft: "auto" }} gap={100}>
          <Switch id="darkmode" onCheckedChange={setDark} checked={dark}>
            Dark is {dark ? "on" : "off"}
          </Switch>
          <Separator vertical />

          <IconButton size="medium" variant="outline" onClick={resetAnimation}>
            <PlayIcon />
          </IconButton>
        </Flex>
      </Flex>
    </>
  );
};
export default Nav;
