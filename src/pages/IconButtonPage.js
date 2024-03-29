import React, { useState, useEffect } from "react";
import Section from "./Section";

import {
  Flex,
  Paragraph,
  Heading,
  Iframe,
  DropdownMenu,
  Separator,
  CodeHighlight,
  Button,
  ScrollArea,
  IconButton,
  Tabs,
  Table,
} from "../src/index";
import NotificationItem from "../pages/NotificationItem";
import usernotifications from "../pages/userNotifications.json";
import ReactLive from "./ReactLive";
import {
  TrashIcon,
  Cross2Icon,
  SizeIcon,
  CopyIcon,
  BellIcon,
  TimerIcon,
  PlayIcon,
  PauseIcon,
  StopIcon,
} from "@radix-ui/react-icons";
import CodeFormatter from "./CodeFormatter";

const IconButtonPage = () => {
  // IconButton with notifications
  const [timer, setTimer] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          return 45;
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const codeString1 = `  
import { IconButton } from "blocksin-system";
import { YourIconComponent } from "your-icon-library";

<IconButton onClick={handleClick} size="large" variant="outline">
  <YourIconComponent />
</IconButton>
          `;

  const codeString2 = `  
const [minutes, setMinutes] = useState(0);
const [seconds, setSeconds] = useState(0);
const [isActive, setIsActive] = useState(false);

useEffect(() => {
  let intervalId;

  if (isActive) {
    intervalId = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(intervalId);
          setIsActive(false);
          return;
        }
        setMinutes((prev) => prev - 1);
        setSeconds(59);
      } else {
        setSeconds((prev) => prev - 1);
      }
    }, 1000);
  }

  return () => clearInterval(intervalId);
}, [isActive, minutes, seconds]);

// Helper function to format the timer display
const formatTime = (time) =>
  time < 10 ? \`0\${time}\` : \`\${time}\`.toString().padStart(2, "0");

const handleAddMinute = () => {
  setMinutes((prev) => prev + 1);
};

const handleStart = () => {
  setIsActive(true);
};

const handlePause = () => {
  setIsActive(false);
};

const handleReset = () => {
  setMinutes(0);
  setSeconds(0);
  setIsActive(false);
};

<DropdownMenu.Content sideOffset={4} align="end">
  <Flex direction="column" gap={100}>
    <Flex
      customClass="TimerInputs"
      align="center"
      justify="center"
    >
      <input
        type="number"
        value={formatTime(minutes)}
        onChange={(e) => setMinutes(parseInt(e.target.value))}
        placeholder="Minutes"
        min="0"
        max="59"
      />
      <Heading level={2}>:</Heading>
      <input
        type="number"
        value={formatTime(seconds)}
        onChange={(e) => setSeconds(parseInt(e.target.value))}
        placeholder="Seconds"
        max="59"
        min="0"
      />
    </Flex>
    <Separator />
    <Flex justify="between" gap={200}>
      <Button
        variant="outline"
        size="small"
        onClick={handleAddMinute}
      >
        +1 min
      </Button>
      <Flex gap={100}>
        {!isActive && (
          <IconButton
            size="small"
            onClick={handleStart}
            disabled={isActive}
          >
            <PlayIcon />
          </IconButton>
        )}
        {isActive && (
          <IconButton
            variant="outline"
            onClick={handlePause}
            disabled={!isActive}
            size="small"
          >
            <PauseIcon />
          </IconButton>
        )}
        <IconButton
          variant="outline"
          size="small"
          onClick={handleReset}
        >
          <StopIcon />
        </IconButton>
      </Flex>
    </Flex>
  </Flex>
</DropdownMenu.Content>
`;

  const [notifications, setNotifications] = useState([]);
  const scope = {
    Separator,
    Button,
    Cross2Icon,
    SizeIcon,
    CopyIcon,
    IconButton,
    Flex,
    Heading,
    BellIcon,
    Paragraph,
  };
  useEffect(() => {
    setNotifications(usernotifications.notifications);
  }, []);

  // Function to handle the dismissal of a notification
  const handleDismissNotification = (notificationId) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== notificationId)
    );
  };

  //
  const columns = [
    {
      Header: "Prop",
      accessor: "prop",
      Cell: (value) => <CodeHighlight text={value} />,
    },
    { Header: "Description", accessor: "description" },
    {
      Header: "Value",
      accessor: "value",
    },
  ];

  const data = [
    {
      prop: "size (string)",
      description:
        'Determines the size of the button. Default values include "small", "medium", and "large".',
      value: '"small", "medium", "large"',
    },
    {
      prop: "variant (string)",
      description:
        'Defines the visual style of the button. Supported variants are "solid", "outline", "ghost", "ghost-static", and "danger".',
      value: '"solid", "outline", "ghost", "ghost-static", "danger"',
    },
    {
      prop: "onClick (function)",
      description: "Function to be executed when the button is clicked.",
      value: "-",
    },
    {
      prop: "children (ReactNode)",
      description: "The icon or content displayed within the button.",
      value: "-",
    },
    {
      prop: "showBadge (boolean)",
      description: "Indicates whether to display a badge on the button.",
      value: '"true", "false"',
    },
    {
      prop: "badgeLabel (string)",
      description: "Text content for the badge.",
      value: "-",
    },
  ];
  //
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
            setIsActive(false);
            return;
          }
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        } else {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, minutes, seconds]);

  // Helper function to format the timer display
  const formatTime = (time) =>
    time < 10 ? `0${time}` : `${time}`.padStart(2, "0");

  const handleAddMinute = () => {
    setMinutes((prev) => prev + 1);
  };

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setMinutes(0);
    setSeconds(0);
    setIsActive(false);
  };
  //
  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Icon Button Component
          </Heading>
          <Paragraph size="large">
            The IconButton component is a versatile UI element designed to offer
            a clickable interface element that can incorporate various icons.
            It's crafted to be flexible, allowing customization of size,
            appearance, and behavior through its properties.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <IconButton size="small" variant="solid">
              <BellIcon />
            </IconButton>
          </Flex>
          <Heading level={3} weight="bold">
            Usage
          </Heading>
          <CodeFormatter language="" codeString={codeString1} />
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Variants
          </Heading>
          <Paragraph size="large">
            The Icon Button component showcases various versatile variants,
            including ghost, outline, and solid, each capable of integrating an
            additional badge component. This versatility makes it a cornerstone
            for constructing 90% of standard product experiences. It's ideal for
            displaying dynamic data such as time for timer functionalities or
            indicating the count of unread notifications, ensuring enhanced
            visibility within interfaces.
          </Paragraph>
          <Tabs defaultValue="tab1">
            <Tabs.List aria-label="Manage your account">
              <Tabs.Trigger value="tab1">For developers</Tabs.Trigger>
              <Tabs.Trigger value="tab2">For designers</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1">
              <Flex customClass="ComponentPreview">
                <IconButton size="small" variant="ghost">
                  <BellIcon />
                </IconButton>
                <IconButton size="small" variant="outline">
                  <BellIcon />
                </IconButton>
                <IconButton size="small" variant="solid">
                  <BellIcon />
                </IconButton>
                <IconButton size="small" variant="danger">
                  <TrashIcon />
                </IconButton>
                <IconButton size="small" disabled variant="ghost">
                  <BellIcon />
                </IconButton>
                <IconButton
                  size="small"
                  variant="ghost"
                  showBadge
                  badgeLabel="8"
                >
                  <BellIcon />
                </IconButton>
                <IconButton
                  size="small"
                  variant="ghost"
                  showBadge
                  badgeLabel={`${timer}sec`}
                >
                  <TimerIcon />
                </IconButton>
              </Flex>
            </Tabs.Content>
            <Tabs.Content value="tab2">
              <Iframe url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FYZW2UgEtRkveoF6bTbmWPw%2FBlocksInGrids-App%3Ftype%3Ddesign%26node-id%3D745%253A947%26mode%3Ddesign%26t%3DwC7qfQ1IqvY8x6g8-1" />
            </Tabs.Content>
          </Tabs>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            IconButton with Timer function
          </Heading>
          <Paragraph size="large">
            I will write a bit more about this pattern, soon..
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <DropdownMenu modal={false}>
              <DropdownMenu.Trigger asChild>
                <IconButton
                  size="small"
                  variant="ghost"
                  showBadge
                  badgeLabel={`${formatTime(minutes)}:${formatTime(seconds)}`}
                >
                  <BellIcon />
                </IconButton>
              </DropdownMenu.Trigger>

              <DropdownMenu.Content sideOffset={4} align="end">
                <Flex direction="column" gap={100}>
                  <Flex
                    customClass="TimerInputs"
                    align="center"
                    justify="center"
                  >
                    <input
                      type="number"
                      value={formatTime(minutes)}
                      onChange={(e) => setMinutes(parseInt(e.target.value))}
                      placeholder="Minutes"
                      min="0"
                      max="59"
                    />
                    <Heading level={2}>:</Heading>
                    <input
                      type="number"
                      value={formatTime(seconds)}
                      onChange={(e) => setSeconds(parseInt(e.target.value))}
                      placeholder="Seconds"
                      max="59"
                      min="0"
                    />
                  </Flex>
                  <Separator />
                  <Flex justify="between" gap={200}>
                    <Button
                      variant="outline"
                      size="small"
                      onClick={handleAddMinute}
                    >
                      +1 min
                    </Button>
                    <Flex gap={100}>
                      {!isActive && (
                        <IconButton
                          size="small"
                          onClick={handleStart}
                          disabled={isActive}
                        >
                          <PlayIcon />
                        </IconButton>
                      )}
                      {isActive && (
                        <IconButton
                          variant="outline"
                          onClick={handlePause}
                          disabled={!isActive}
                          size="small"
                        >
                          <PauseIcon />
                        </IconButton>
                      )}
                      <IconButton
                        variant="outline"
                        size="small"
                        onClick={handleReset}
                      >
                        <StopIcon />
                      </IconButton>
                    </Flex>
                  </Flex>
                </Flex>
              </DropdownMenu.Content>
            </DropdownMenu>
          </Flex>
          <Heading level={3} weight="bold">
            Usage
          </Heading>
          <CodeFormatter language="" codeString={codeString2} />
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            IconButton with Notifications
          </Heading>
          <Paragraph size="large">
            The single Icon Button finds its utility within compact UI modules
            like dialogs and popups, simplifying user navigation through primary
            actions such as close or save. Its most prevalent use case often
            involves actions like edit or more actions, typically represented by
            the three-dot icon. This commonly precedes a dropdown menu, offering
            more accessible items for further actions, thus enriching user
            interaction and experience.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <DropdownMenu modal={false}>
              <DropdownMenu.Trigger asChild>
                <IconButton
                  size="small"
                  variant="ghost"
                  showBadge
                  badgeLabel={notifications.length.toString()}
                >
                  <BellIcon />
                </IconButton>
              </DropdownMenu.Trigger>

              <DropdownMenu.Content
                className="DropdownMenuContent userNotifications"
                sideOffset={4}
                align="end"
              >
                <ScrollArea>
                  {notifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                      onDismiss={handleDismissNotification}
                      isDismissedByCurrentUser={notification.read}
                    />
                  ))}
                </ScrollArea>
              </DropdownMenu.Content>
            </DropdownMenu>
          </Flex>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Properties
          </Heading>

          <Table
            fluid
            columns={columns}
            data={data}
            pageSize={10}
            sorting={false}
            fullBorder
            large
          />
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Playground
          </Heading>
          <Paragraph size="large">
            Experience real-time component interaction with React! This powerful
            feature empowers non-technical users—designers, project managers,
            brand or content specialists—to seamlessly engage with components.
            They can modify component content on the fly, ensuring comprehensive
            validation against accessibility, localization, and content design
            requirements. This hands-on approach ensures the design aligns
            perfectly with all necessary criteria, fostering a more
            collaborative and efficient development process.
          </Paragraph>

          <ReactLive scope={scope}>
            {`
<Flex direction="row" gap={100}>
  <IconButton
    size="small"
    variant="ghost"
    showBadge
    badgeLabel={"3"}
  >
    <BellIcon />
  </IconButton>
</Flex>
      `}
          </ReactLive>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Design Patterns
          </Heading>
          <Paragraph size="large">
            Icon buttons are often used in toolbars for actions such as saving,
            deleting, or printing. They can also be used as close buttons inside
            dialog boxes. For example, in a text editor, an icon button with a
            floppy disk icon could be used to save the document. In an email
            application, an icon button with a trash can icon could be used to
            delete an email. In both cases, wrapping the icon button in a
            tooltip with text such as "Save" or "Delete" provides additional
            context for users who rely on screen readers.
          </Paragraph>
          <ReactLive scope={scope}>
            {`
<Flex direction="column" gap={100} justify="between"
  style={{
    padding: "var(--size-400) var(--size-100) var(--size-100) var(--size-300)",
    border: "1px solid var(--border-neutral-subtle)",
    borderRadius: "var(--size-100)",
    minWidth: "300px",
    minHeight: "160px",
    position: "relative",
}}>
  <Flex style={{
    position: "absolute",
    top: "var(--size-50)",
    right: "var(--size-50)"
  }}> 
    <IconButton
      size="small"
      variant="ghost"
    >
      <Cross2Icon />
    </IconButton>
  </Flex>
  <Flex direction="column" gap={100}>
    <Heading level={4} weight="bold">Dialog</Heading>
    <Paragraph size="large" >Start playing with the pattern.</Paragraph>
  </Flex>
  <Separator/>
  <Flex direction="row" gap={100} justify="end">
    <Button
      size="small"
      variant="ghost"
    >
      Cancel
    </Button>
    <Button
      size="small"
      variant="solid"
    >
      Save
    </Button>
  </Flex>
</Flex>
      `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default IconButtonPage;
