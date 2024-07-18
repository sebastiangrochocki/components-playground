import React, { useEffect, useState } from "react";
import { Flex, Button, Switch, IconButton, Separator } from "../src/index";
import Logo from "../Logo";
import { HeartIcon, PlayIcon } from "sebikostudio-icons";
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
        <a href="/" style={{ color: "var(--white)", cursor: "pointer" }}>
          <Logo />
        </a>
        <Flex
          gap={100}
          style={{ marginLeft: "var(--size-200)", height: "100%" }}
          customClass="ButtonsContainer"
          align="center"
        >
          {/* <Button
            onClick={() => {
              navigate("");
            }}
            variant="ghost"
          >
            Start
          </Button> */}
          <Separator vertical />
          <Button
            size="small"
            onClick={() => {
              navigate("/introduction");
            }}
            variant="ghost"
          >
            Introduction
          </Button>
          <Button
            size="small"
            onClick={() => {
              window.open("https://www.npmjs.com/package/blocksin-system");
            }}
            variant="ghost"
          >
            NPM
          </Button>
          <Button
            size="small"
            onClick={() => {
              window.open("https://icons.sebikostudio.com/");
            }}
            variant="ghost"
          >
            <HeartIcon />
            Icons
          </Button>
        </Flex>

        <Flex
          style={{ marginLeft: "auto", height: "100%" }}
          align="center"
          gap={300}
        >
          <Switch id="darkmode" onCheckedChange={setDark} checked={dark}>
            Dark is {dark ? "on" : "off"}
          </Switch>
          <Separator vertical />
          <IconButton size="mini" variant="solid" onClick={resetAnimation}>
            <PlayIcon />
          </IconButton>
        </Flex>
      </Flex>
    </>
  );
};
export default Nav;
