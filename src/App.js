import "./App.scss";
import "./src/Variables.scss";
import { useState } from "react";
//
import {
  Button,
  IconButton,
  Avatar,
  Badge,
  BadgeLevel,
  CheckboxCustom,
  CodeHighlight,
  CustomToast,
  Paragraph,
  Heading,
  Flex,
  Iframe,
  Input,
  Loader,
  Spinner,
  Tag,
  TextArea,
  TopBanner,
  UserListItem,
  Youtube,
  Separator,
} from "./src/index";
import { CopyIcon, Pencil1Icon } from "@radix-ui/react-icons";
import Beaver from "./assets/beaver.jpeg";
import Logo from "./assets/AppLogo2.svg";
// import "./src/shared-styles.scss";
//
function App() {
  const [showToastState, setShowToastState] = useState(false);
  //
  //
  //
  function handleShowToast() {
    setShowToastState(true);
  }
  //
  //
  //
  const documentationUrl = "https://www.npmjs.com/package/blocksin-system";

  const handleOpenDocumentation = () => {
    window.open(documentationUrl, "_blank");
  };
  //
  //
  //
  const [showToastCopy, setShowToastCopy] = useState(false);
  const [toastMessage, setToastMessage] = useState(""); // New state for toast message

  const npmCommand = "npm i blocksin-system";

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(npmCommand)
      .then(() => {
        setToastMessage("Copied to clipboard!"); // Set success message
        setShowToastCopy(true); // Show toast
      })
      .catch((err) => {
        setToastMessage("Failed to copy!"); // Set error message
        setShowToastCopy(true); // Show toast
        console.error("Failed to copy text: ", err);
      });
  };
  //
  //
  //
  const notifications = [
    {
      title: "Community is live!",
      text: "Now you can browse through templates.",
      id: "1212121214",
      style: "info",
    },
    {
      title: "New Navigation",
      text: "New release comes with the brand new LeftSide Panel navigation.",
      id: "1212121212",
      style: "info",
    },
  ];
  //
  //
  //
  return (
    <>
      <CustomToast
        showToast={showToastCopy}
        setShowToast={setShowToastCopy}
        headline="Notification"
        text={toastMessage} // Use dynamic toast message
        time={3000}
        simple
      />
      <Flex direction="column" align="center">
        <img src={Logo} className="Logo" alt="Design System" />

        <Heading level={2} weight="bold">
          BlocksIn System
        </Heading>
        <Heading level={4}>React Component Library</Heading>
        <Flex
          direction="row"
          gap={100}
          align="center"
          style={{
            marginTop: "var(--size-400)",
            width: "100%",
            maxWidth: "440px",
          }}
        >
          <Button fluid variant="outline" onClick={handleCopyToClipboard}>
            {npmCommand} <CopyIcon />
          </Button>
          <Button fluid variant="ghost" onClick={handleOpenDocumentation}>
            Documentation
          </Button>
        </Flex>
      </Flex>

      <div className="components-playground">
        <div className="box">
          <span className="title">Button</span>
          <Button
            // onClick={handleClick}
            variant="solid"
            size="large"
            showBadge
            badgeLabel="New"
          >
            Click Me
          </Button>
        </div>
        <div className="box">
          <span className="title">IconButton</span>

          <IconButton size="large">
            <Pencil1Icon />
          </IconButton>
        </div>
        <div className="box">
          <span className="title">Avatar</span>

          <Avatar avatar={Beaver} altText="John Doe" role="Software Engineer" />
        </div>
        <div className="box">
          <span className="title">Badge</span>

          <div
            style={{ width: "44px", height: "44px", position: "relative" }}
            className="dashed"
          >
            <Badge label="New" />
          </div>
        </div>
        <div className="box">
          <span className="title">BadgeLevel</span>

          <BadgeLevel badge={3} />
        </div>
        <div className="box">
          <span className="title">CheckboxCustom</span>

          <CheckboxCustom customID="agreeTerms">
            I agree to the t&c
          </CheckboxCustom>
        </div>
        <div className="box">
          <span className="title">CodeHighlight</span>

          <CodeHighlight text="npm i blocksin-system" />
        </div>
        <div className="box">
          <span className="title">CustomToast</span>

          <Button onClick={handleShowToast} variant="ghost" size="large">
            Show Toast
          </Button>
          <CustomToast
            showToast={showToastState}
            setShowToast={setShowToastState}
            headline="Success!"
            text="Your action was successful."
            time={3000}
            showAgain={true}
            // onDismissForever={handleDismissForever}
          />
        </div>
        <div className="box">
          <span className="title">Flex</span>

          <Flex
            direction="column"
            align="center"
            justify="space-between"
            gap={100}
            style={{
              backgroundColor: "var(--brand-2)",
              padding: "var(--size-200)",
            }}
          >
            <Flex
              direction="column"
              align="center"
              justify="space-between"
              gap={100}
              style={{ backgroundColor: "var(--white)" }}
            >
              item 1
            </Flex>
            <Flex
              direction="column"
              align="center"
              justify="space-between"
              gap={100}
              style={{ backgroundColor: "var(--white)" }}
            >
              item 2
            </Flex>
            <Flex
              direction="column"
              align="center"
              justify="space-between"
              gap={100}
              style={{ backgroundColor: "var(--white)" }}
            >
              item 3
            </Flex>
          </Flex>
        </div>
        <div className="box box2x">
          <span className="title">Heading</span>

          <Heading level={2} weight="bold">
            Your Main Title Here
          </Heading>
        </div>
        <div className="box">
          <span className="title">Paragraph</span>

          <Paragraph size="large" weight="bold">
            This is a large, bold paragraph.
          </Paragraph>
        </div>
        <div className="box">
          <span className="title">Iframe</span>

          <Iframe url="https://example.com" title="Embedded Content" />
        </div>
        <div className="box">
          <span className="title">Input</span>

          <Input
            label="Email Address"
            placeholder="Enter your email"
            type="email"
            // value={email}
            // onChange={handleEmailChange}
          />
        </div>

        <div className="box">
          <span className="title">Loader</span>

          <Loader />
        </div>
        <div className="box">
          <span className="title">Separator</span>

          <Separator />
        </div>
        <div className="box"></div>
        <div className="box">
          <span className="title">Spinner</span>

          <Spinner />
        </div>
        <div className="box">
          <span className="title">Spinner</span>

          <Tag text="Technology" variant="Primary" />
        </div>
        <div className="box">
          <span className="title">TextArea</span>

          <TextArea
            label="Message"
            placeholder="Type your message here"
            // value={message}
            // onChange={handleMessageChange}
          />
        </div>

        <div className="box box2x">
          <span className="title">TopBanner</span>

          <TopBanner username="johndoe" notifications={notifications} />
        </div>
        <div className="box">
          <span className="title">UserListItem</span>

          <UserListItem
            name="John Doe"
            badge={3}
            avatar={Beaver}
            role="Developer"
          />
        </div>
        <div className="box">
          <span className="title">Youtube</span>

          <Youtube videoId="dQw4w9WgXcQ" />
        </div>
        <div className="box"></div>
      </div>
    </>
  );
}

export default App;
