import "./App.scss";
import "./src/Variables.scss";
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Introduction from "./pages/Introduction";
import Colors from "./pages/Colors";
import IconButtonPage from "./pages/IconButtonPage";
import AvatarPage from "./pages/AvatarPage";
import AvatarGroupPage from "./pages/AvatarGroupPage";
import BadgePage from "./pages/BadgePage";
import BadgeLevelPage from "./pages/BadgeLevelPage";
import ButtonPage from "./pages/ButtonPage";
import CalendarPage from "./pages/CalendarPage";
import ComboBoxPage from "./pages/ComboBoxPage";
import CheckboxPage from "./pages/CheckboxPage";
import CodeHighlightPage from "./pages/CodeHighlightPage";
import ToastPage from "./pages/ToastPage";
import DropdownMenuPage from "./pages/DropdownMenuPage";
import FlexPage from "./pages/FlexPage";
import HeadingPage from "./pages/HeadingPage";
import IframePage from "./pages/IframePage";
import InputPage from "./pages/InputPage";
import LoaderPage from "./pages/LoaderPage";
import ParagraphPage from "./pages/ParagraphPage";
import SpinnerPage from "./pages/SpinnerPage";
import SwitchPage from "./pages/SwitchPage";
import TablePage from "./pages/TablePage";
import TabsPage from "./pages/TabsPage";
import TagsPage from "./pages/TagsPage";
import TextAreaPage from "./pages/TextAreaPage";
import TogglePage from "./pages/TogglePage";
import ToggleGroupPage from "./pages/ToggleGroupPage";
import TooltipPage from "./pages/TooltipPage";
import TopBannerPage from "./pages/TopBannerPage";
import UserOnHoldItemPage from "./pages/UserOnHoldItemPage";
import UserListItemPage from "./pages/UserListItemPage";
import UserItemPage from "./pages/UserItemPage";
import YoutubePage from "./pages/YoutubePage";
import ScrollAreaPage from "./pages/ScrollAreaPage";
import SelectPage from "./pages/SelectPage";
import SeparatorPage from "./pages/SeparatorPage";
import PillPage from "./pages/PillPage";
import CardPage from "./pages/CardPage";
import ToolbarPage from "./pages/ToolbarPage";
import StepperPage from "./pages/StepperPage";
// import Hero from "./pages/Hero";
//
import Lottie from "lottie-react";
import loaderAnimation from "./assets/BlocksIn-Intro.json";
// import { IconButton, Separator, Switch, Flex } from "./src/index";
// import { PlayIcon } from "@radix-ui/react-icons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import NpmDownloads from "./pages/NpmDownloads";
import Home from "./Home";
//
function App() {
  const [animationPlayed, setAnimationPlayed] = useState(false);

  //
  const lottieRef = useRef(null);

  useEffect(() => {
    const played = localStorage.getItem("lottiePlayed");
    if (!played) {
      setAnimationPlayed(true);
      setExpirationDate();
    } else {
      const expiration = new Date(localStorage.getItem("lottieExpiration"));
      if (new Date() > expiration) {
        localStorage.removeItem("lottiePlayed");
        localStorage.removeItem("lottieExpiration");
        setAnimationPlayed(true);
      }
    }
  }, []);

  const setExpirationDate = () => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 14); // 2 weeks from now
    localStorage.setItem("lottieExpiration", expirationDate.toISOString());
  };

  const handleAnimationComplete = () => {
    document.querySelector(".IntroLottie").classList.add("played");
    localStorage.setItem("lottiePlayed", "true");
    setExpirationDate();
  };

  const resetAnimation = () => {
    localStorage.removeItem("lottiePlayed");
    localStorage.removeItem("lottieExpiration");
    setAnimationPlayed(false);
    setTimeout(() => {
      setAnimationPlayed(true);
    }, 100); // Timeout to ensure re-render
  };

  const [dark, setDark] = useState(() => {
    // Retrieve the dark mode setting from local storage or default to false
    const savedDarkMode = localStorage.getItem("dark");
    return savedDarkMode === "true";
  });

  useEffect(() => {
    // Set the dark mode class based on the dark state
    if (dark) {
      document.documentElement.classList.add("darkmode");
    } else {
      document.documentElement.classList.remove("darkmode");
    }
    // Save the dark mode setting to local storage
    localStorage.setItem("dark", dark.toString());
  }, [dark]);

  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BlocksIn System - Component library</title>
        {/* <link rel="canonical" href="https://designsystemsapp.netlify.app/" /> */}
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta
          name="description"
          content="BlocksIn System - React component library."
        />
      </Helmet>
      {/* <Flex
        gap={200}
        style={{
          position: "fixed",
          top: "16px",
          right: "16px",
          zIndex: "999",
        }}
      >
        <Switch id="darkmode" onCheckedChange={setDark} checked={dark}>
          Dark is {dark ? "on" : "off"}
        </Switch>
        <Separator vertical />

        <IconButton size="medium" variant="outline" onClick={resetAnimation}>
          <PlayIcon />
        </IconButton>
      </Flex> */}
      {animationPlayed && (
        <div className="IntroLottie">
          <Lottie
            animationData={loaderAnimation}
            loop={false}
            autoplay={true}
            onComplete={handleAnimationComplete}
            lottieRef={lottieRef}
          />
        </div>
      )}
      <Routes>
        <Route
          path=""
          element={
            <Home
              setDark={setDark}
              dark={dark}
              resetAnimation={resetAnimation}
            />
          }
        >
          <Route path="introduction" element={<Introduction />} />
          <Route path="colors" element={<Colors />} />
          <Route path="icon-button" element={<IconButtonPage />} />
          <Route path="avatar" element={<AvatarPage />} />
          <Route path="avatar-group" element={<AvatarGroupPage />} />
          <Route path="badge" element={<BadgePage />} />
          <Route path="badge-level" element={<BadgeLevelPage />} />
          <Route path="button" element={<ButtonPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="combobox" element={<ComboBoxPage />} />
          <Route path="checkbox" element={<CheckboxPage />} />
          <Route path="codehighlight" element={<CodeHighlightPage />} />
          <Route path="toast" element={<ToastPage />} />
          <Route path="dropdownmenu" element={<DropdownMenuPage />} />
          <Route path="flex" element={<FlexPage />} />
          <Route path="heading" element={<HeadingPage />} />
          <Route path="iframe" element={<IframePage />} />
          <Route path="input" element={<InputPage />} />
          <Route path="loader" element={<LoaderPage />} />
          <Route path="paragraph" element={<ParagraphPage />} />
          <Route path="spinner" element={<SpinnerPage />} />
          <Route path="switch" element={<SwitchPage />} />
          <Route path="table" element={<TablePage />} />
          <Route path="tabs" element={<TabsPage />} />
          <Route path="tags" element={<TagsPage />} />
          <Route path="textarea" element={<TextAreaPage />} />
          <Route path="toggle" element={<TogglePage />} />
          <Route path="toggle-group" element={<ToggleGroupPage />} />
          <Route path="toolbar" element={<ToolbarPage />} />
          <Route path="tooltip" element={<TooltipPage />} />
          <Route path="top-banner" element={<TopBannerPage />} />
          <Route path="user-on-hold-item" element={<UserOnHoldItemPage />} />
          <Route path="user-list-item" element={<UserListItemPage />} />
          <Route path="user-item" element={<UserItemPage />} />
          <Route path="youtube" element={<YoutubePage />} />
          <Route path="scrollarea" element={<ScrollAreaPage />} />
          <Route path="select" element={<SelectPage />} />
          <Route path="separator" element={<SeparatorPage />} />
          <Route path="pill" element={<PillPage />} />
          <Route path="card" element={<CardPage />} />
          <Route path="stepper" element={<StepperPage />} />
          {/* Add more nested routes here */}
        </Route>

        {/* <Route path="/" element={<Hero />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
