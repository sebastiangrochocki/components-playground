import React, { useState, useEffect, useMemo } from "react";

import {
  Button,
  AvatarGroup,
  IconButton,
  Avatar,
  Badge,
  BadgeLevel,
  Checkbox,
  CodeHighlight,
  Toast,
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
  UserOnHoldItem,
  Switch,
  DropdownMenu,
  Select,
  Tabs,
  Tooltip,
  ComboBox,
  UserItem,
  Table,
  ScrollArea,
  ToggleGroup,
  Toggle,
  Calendar,
} from "../src/index";
import {
  Component2Icon,
  CopyIcon,
  Cross2Icon,
  FigmaLogoIcon,
  Pencil1Icon,
  SliderIcon,
  ChatBubbleIcon,
  DotsHorizontalIcon,
  TrashIcon,
  CheckIcon,
  ViewGridIcon,
  ViewHorizontalIcon,
} from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";
// import Logo from "./assets/AppLogo2.svg";
// import Logo2 from "../Logo";
import * as Dialog from "@radix-ui/react-dialog";
// import NpmDownloads from "./NpmDownloads";
// import Section from "./Section";
const Hero = () => {
  const [showToastState, setShowToastState] = useState(false);
  //   const [showSimpleToastState, setShowSimpleToastState] = useState(false);

  //
  //
  //
  function handleShowToast() {
    setShowToastState(true);
  }
  //
  //   function handleShowSimpleToast() {
  //     setShowSimpleToastState(true);
  //   }
  //
  //
  //
  //
  const [selectedDate, setSelectedDate] = useState(new Date());
  //
  //
  //
  //
  //
  //
  const user = {
    firstName: "David",
    email: "dav@gmail.com",
    avatar: "./assets/beaver.jpeg",
    role: "Admin",
  };
  //
  //
  //

  //   const [isLoading, setIsLoading] = useState(false);
  //   function handleClickLoading() {
  //     setIsLoading(true);
  //   }
  //
  //
  //
  function handleApprove() {}
  function handleReject() {}
  //
  //
  //
  const notifications = useMemo(
    () => [
      {
        title: "Figma Icons is live!",
        text: "Now you can generate React Icon Library synced with your Figma source.",
        id: "080220241",
        style: "info",
      },
      {
        title: "We will discontinue BlocksIn App!",
        text: "Please backup your data before closing accounts. You have 30 days left.",
        id: "0802202412",
        style: "danger",
      },
      {
        title: "Community is live!",
        text: "Now you can browse through templates.",
        id: "121212120",
        style: "info",
      },
      {
        title: "New Navigation",
        text: "New release comes with the brand new LeftSide Panel navigation.",
        id: "1212121211",
        style: "info",
      },
    ],
    []
  );

  //
  const [currentNotification, setCurrentNotification] = useState(null);
  const username = "dav";

  useEffect(() => {
    // Example logic to select the first notification that hasn't been dismissed
    const undismissedNotification = notifications.find((notification) => {
      const notificationKey = `NotificationShown_${notification.id}_${username}`;
      return !localStorage.getItem(notificationKey);
    });

    setCurrentNotification(undismissedNotification);
  }, [username, notifications]);

  const dismissNotification = () => {
    if (currentNotification) {
      const notificationKey = `NotificationShown_${currentNotification.id}_${username}`;
      localStorage.setItem(notificationKey, "dismissed");
      setCurrentNotification(null); // Remove the notification from the UI
    }
  };
  //
  //
  // const [role, setRole] = useState("");
  const [showDialog, setShowDialog] = React.useState(false);

  //
  //
  //
  // eslint-disable-next-line
  const [usersData, setUsersData] = useState([
    {
      _id: "1",
      username: "John Doe",
      email: "john@example.com",
      avatar: Beaver,
    },
    {
      _id: "2",
      username: "Zeb Bonk",
      email: "jane@example.com",
      avatar: Beaver,
    },
    {
      _id: "3",
      username: "Beaver Zoe",
      email: "jane@example.com",
      avatar: Beaver,
    },
  ]); // Mock users data
  const [selectedOwners, setSelectedOwners] = useState([]);
  //
  //
  const options = usersData.map((user) => ({
    label: user.username,
    value: user._id,
    avatar: user.avatar,
  }));

  const handleChange = (selectedOptions) => {
    setSelectedOwners(selectedOptions);
  };
  //
  //
  //

  const columns = [
    {
      Header: "Name",
      accessor: "name",
      Cell: (value, row) => (
        <UserItem
          altText={row.name}
          avatar={row.avatar}
          name={row.name}
          helper={row.email}
        />
      ),
    },
    { Header: "Age", accessor: "age" },
    { Header: "Country", accessor: "country" },
    {
      Header: (
        <DropdownMenu>
          <DropdownMenu.Trigger>
            <IconButton size="small" variant="ghost">
              <DotsHorizontalIcon />
            </IconButton>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end" sideOffset={4}>
            <DropdownMenu.Item
              icon={CheckIcon}
              onClick={() => alert("Multi-selection action")}
            >
              Approve
            </DropdownMenu.Item>

            <DropdownMenu.Item icon={TrashIcon}>Delete</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      ),
      accessor: "actions",
      Cell: (value, row) => (
        <DropdownMenu>
          <DropdownMenu.Trigger>
            <IconButton size="small" variant="ghost">
              <DotsHorizontalIcon />
            </IconButton>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end" sideOffset={4}>
            <DropdownMenu.Item
              icon={CheckIcon}
              onClick={() => alert(`Editing ${row.name}`)}
            >
              Approve
            </DropdownMenu.Item>

            <DropdownMenu.Item icon={TrashIcon}>Delete</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      ),
      maxWidth: "40px",
    },
  ];

  const data = [
    {
      name: "Alice",
      age: 25,
      country: "USA",
      email: "john@example.com",
      avatar: Beaver,
    },
    {
      name: "Bob",
      age: 30,
      country: "Canada",
      email: "john@example.com",
      avatar: Beaver,
    },
    {
      name: "Charlie",
      age: 35,
      country: "UK",
      email: "john@example.com",
      avatar: Beaver,
    },
    { name: "Diana", age: 28, country: "Germany" },
    { name: "Ethan", age: 22, country: "Australia" },
    { name: "Fiona", age: 27, country: "Spain" },
    { name: "George", age: 31, country: "France" },
    { name: "Hannah", age: 24, country: "Netherlands" },
    { name: "Ian", age: 29, country: "Italy" },
    { name: "Julia", age: 32, country: "Portugal" },
    { name: "Kevin", age: 26, country: "Norway" },
    { name: "Lily", age: 34, country: "Sweden" },
    { name: "Michael", age: 29, country: "Denmark" },
    { name: "Nora", age: 23, country: "Ireland" },
    { name: "Oscar", age: 37, country: "Belgium" },
    { name: "Pamela", age: 33, country: "Switzerland" },
    { name: "Quentin", age: 25, country: "Austria" },
    { name: "Rachel", age: 30, country: "Finland" },
    { name: "Steven", age: 36, country: "Greece" },
    { name: "Tina", age: 28, country: "Czech Republic" },
  ];

  //
  //
  //
  const [toggleViewState, setToggleViewState] = useState("Grid");
  const onToggleGrid = (checked) => {
    alert("Toggle clicked, checked:", checked);
  };
  //
  //
  //
  //
  return (
    <Flex customClass="Body">
      <Dialog.Root
        className="DialogRoot"
        open={showDialog}
        onOpenChange={setShowDialog}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent">
            <Heading level={3} weight="bold">
              Add GitHub Widget
            </Heading>

            <Flex customClass="DialogDescription" direction={"column"}>
              <Paragraph size="large">
                Add GitHub intergation to your Control Panel by using endpoint
                URL / REST API.
              </Paragraph>
            </Flex>

            <Flex
              direction="row"
              align="end"
              justify={"end"}
              gap={200}
              style={{
                marginTop: "var(--size-400)",
                paddingTop: "var(--size-150)",
                borderTop: "1px solid var(--border-neutral-subtle)",
              }}
            >
              <Dialog.Close asChild>
                <Button size="medium" variant="solid">
                  Add integration
                </Button>
              </Dialog.Close>
            </Flex>
            <Flex customClass="closeButton" gap={100}>
              <Dialog.Close asChild>
                <IconButton aria-label="Close" size="small" variant="ghost">
                  <Cross2Icon />
                </IconButton>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <div className="components-playground">
        <div className="box">
          <span className="title">{`<Button/>`}</span>
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
          <span className="title">{`<IconButton/>`}</span>

          <IconButton size="large">
            <Pencil1Icon />
          </IconButton>
        </div>

        <div className="box">
          <span className="title">{`<Avatar/>`}</span>

          <Avatar avatar={Beaver} altText="John Doe" role="Software Engineer" />
        </div>
        <div className="box">
          <span className="title">{`<AvatarGroup/>`}</span>
          <AvatarGroup>
            <Avatar
              avatar={Beaver}
              altText="John Doe"
              role="Software Engineer"
            />
            <Avatar altText="John Doe" role="Software Engineer" />
            <Avatar altText="John Doe" role="Software Engineer" />
            <Avatar altText="John Doe" role="Software Engineer" />
          </AvatarGroup>
        </div>
        <div className="box">
          <span className="title">{`<Badge/>`}</span>

          <div
            style={{
              width: "44px",
              height: "44px",
              position: "relative",
            }}
            className="dashed"
          >
            <Badge label="New" />
          </div>
        </div>
        <div className="box">
          <span className="title">{`<BadgeLevel/>`}</span>

          <BadgeLevel badge={3} />
        </div>
        <div className="box">
          <span className="title">{`<Checkbox/>`}</span>

          <Checkbox customID="agreeTerms">I agree to the t&c</Checkbox>
        </div>
        <div className="box">
          <span className="title">{`<CodeHighlight/>`}</span>

          <CodeHighlight text="npm i blocksin-system" />
        </div>

        <div className="box box2x">
          <span className="title">{`<Select/>`}</span>
          <Select>
            <Select.Trigger aria-label="Role">
              <Select.Value placeholder="Select a role" />
            </Select.Trigger>
            <Select.Content
              side="bottom"
              sideOffset={8}
              align="start"
              position="popper"
            >
              <Select.Item value="Design">Product Designer</Select.Item>
              <Select.Item value="Developer">Developer</Select.Item>
              <Select.Item value="PM">PM</Select.Item>
              <Select.Item value="Brand">Brand Designer</Select.Item>
            </Select.Content>
          </Select>
        </div>

        <div className="box" style={{ overflow: "visible", zIndex: "4" }}>
          <span className="title">{`<Calendar/>`}</span>
          <Calendar
            selectedDate={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            // You can pass other props to the DatePicker component here
          >
            <Input
              placeholder="Select a date"
              readOnly
              validation={false}
              label="Select date"
            />
          </Calendar>
        </div>

        <div className="box" style={{ overflow: "visible" }}>
          <span className="title">{`<ComboBox/>`}</span>

          <ComboBox
            options={options}
            value={selectedOwners}
            onChange={handleChange}
            placeholder="Select owners..."
            isMulti={true}
          />
        </div>
        <div className="box box2x">
          <span className="title">{`<DropdownMenu/>`}</span>

          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <IconButton variant="outline">
                <SliderIcon />
              </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content side="bottom" align="start">
              <DropdownMenu.Item icon={CopyIcon}>Item 1</DropdownMenu.Item>
              <DropdownMenu.Item icon={FigmaLogoIcon}>Item 2</DropdownMenu.Item>
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger icon={Component2Icon}>
                  Item3
                </DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>Item 1</DropdownMenu.Item>
                  <DropdownMenu.Item>Item 2</DropdownMenu.Item>
                  <DropdownMenu.Item hotkey="ctrl + S">
                    Item 3
                  </DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>

        {/* <div className="box">
          <span className="title">DropdownMenu x Dialog</span>
          <Flex gap={200}>
            <Button
              onClick={() => setShowDialog(true)}
              variant="solid"
              size="medium"
            >
              Trigger Dialog
            </Button>
            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <Button variant="outline" size="medium">
                  Menu
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content side="bottom" sideOffset={8} align="center">
                <DropdownMenu.Item
                  icon={FigmaLogoIcon}
                  onClick={() => setShowDialog(true)}
                >
                  Show Dialog
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </Flex>
        </div> */}

        <div className="box box2x tall">
          <span className="title">{`<Table/>`}</span>
          <Table
            columns={columns}
            data={data}
            pageSize={3}
            maxPagination={2}
            fluid
            multiSelect
            cellAlign="center"
          />
        </div>
        <div className="box tall">
          <span className="title">{`<Toggle/>`}</span>

          <Toggle onPressedChange={onToggleGrid} aria-label="Toggle grid lines">
            <ViewGridIcon />
          </Toggle>
        </div>

        <div className="box">
          <span className="title">{`<ToggleGroup/>`}</span>

          <ToggleGroup
            type="single"
            value={toggleViewState}
            onValueChange={setToggleViewState}
            aria-label="Project view"
          >
            <ToggleGroup.Item value="Grid" aria-label="Grid view">
              <ViewGridIcon />
            </ToggleGroup.Item>
            <ToggleGroup.Item value="List" aria-label="List view">
              <ViewHorizontalIcon />
            </ToggleGroup.Item>
          </ToggleGroup>
        </div>

        <div className="box box2">
          <span className="title">{`<Tabs/>`}</span>
          <Tabs defaultValue="tab1" fluid>
            <Tabs.List ariaLabel="Manage your account">
              <Tabs.Trigger value="tab1">Sign Up</Tabs.Trigger>
              <Tabs.Trigger value="tab2">Sign In</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1">
              <Flex style={{ padding: "var(--size-200)" }}>
                Content for Sign Up tab
              </Flex>
            </Tabs.Content>
            <Tabs.Content value="tab2">
              <Flex style={{ padding: "var(--size-200)" }}>
                Content for Sign In tab
              </Flex>
            </Tabs.Content>
          </Tabs>
        </div>

        <div className="box">
          <span className="title">{`<Toast/>`}</span>

          <Button onClick={handleShowToast} variant="ghost" size="large">
            Show Toast
          </Button>
          <Toast
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
          <span className="title">{`<Tooltip/>`}</span>
          <Tooltip delayDuration={200}>
            <Tooltip.Trigger asChild>
              <IconButton>
                <ChatBubbleIcon />
              </IconButton>
            </Tooltip.Trigger>
            <Tooltip.Content side="right">
              <Paragraph size="medium">Test</Paragraph>
            </Tooltip.Content>
          </Tooltip>
        </div>

        <div className="box ">
          <span className="title">{`<Flex/>`}</span>

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
              gap={100}
              style={{ backgroundColor: "var(--white)" }}
            >
              item 1
            </Flex>
            <Flex
              direction="column"
              gap={100}
              style={{ backgroundColor: "var(--white)" }}
            >
              item 2
            </Flex>
            <Flex
              direction="column"
              gap={100}
              style={{ backgroundColor: "var(--white)" }}
            >
              item 3
            </Flex>
          </Flex>
        </div>

        <div className="box box2x">
          <span className="title">{`<Heading/>`}</span>

          <Heading level={2} weight="bold">
            Your Main Title Here
          </Heading>
        </div>
        <div className="box">
          <span className="title">{`<Paragraph/>`}</span>

          <Paragraph size="large" weight="bold">
            This is a large, bold paragraph.
          </Paragraph>
        </div>
        <div className="box">
          <span className="title">{`<Iframe/>`}</span>

          <Iframe url="https://example.com" title="Embedded Content" />
        </div>
        <div className="box">
          <span className="title">{`<Input/>`}</span>

          <Input
            label="Email Address"
            placeholder="Enter your email"
            type="email"
            // value={email}
            // onChange={handleEmailChange}
          />
        </div>

        <div className="box">
          <span className="title">{`<Loader/>`}</span>

          <Loader />
        </div>
        <div className="box">
          <span className="title">{`<Separator/>`}</span>

          <Separator />
        </div>

        <div className="box ">
          <span className="title">{`<ScrollArea/>`}</span>

          <ScrollArea
            style={{
              height: "220px",
              width: "220px",
              borderRadius: "4px",
              boxShadow: "var(--shadow-level-1)",
              border: "1px solid var(--border-neutral-subtle)",
            }}
          >
            <Flex
              style={{
                height: "900px",
                background: "var(--gray-100)",
                padding: "8px",
                boxSizing: "border-box",
              }}
              fluid
              justify="center"
            >
              Long rectangle
            </Flex>
          </ScrollArea>
        </div>
        <div className="box">
          <span className="title">{`<Switch/>`}</span>
          <Switch id="switch">Switch</Switch>
        </div>
        <div className="box">
          <span className="title">{`<Spinner/>`}</span>

          <Spinner />
        </div>
        <div className="box" style={{ gap: "8px" }}>
          <span className="title">Tag</span>

          <Tag text="Primary" variant="Primary" />
          <Tag text="Demo" variant="Demo" />
          <Tag text="Default" />
        </div>
        <div className="box">
          <span className="title">{`<TextArea/>`}</span>

          <TextArea
            label="Message"
            placeholder="Type your message here"
            // value={message}
            // onChange={handleMessageChange}
          />
        </div>

        <div className="box box2x">
          <span className="title">{`<TopBanner/>`}</span>
          {currentNotification && (
            <TopBanner
              username={username}
              notification={currentNotification}
              onDismiss={dismissNotification}
            />
          )}
        </div>

        <div className="box">
          <span className="title">{`<UserListItem/>`}</span>

          <UserListItem
            name="John Doe"
            badge={3}
            avatar={Beaver}
            role="Developer"
          />
        </div>

        <div className="box">
          <span className="title">{`<UserItem/>`}</span>

          <UserItem name="John Doe" avatar={Beaver} helper="Developer" />
        </div>

        <div className="box box2x">
          <span className="title">{`<UserOnHoldItem/>`}</span>

          <UserOnHoldItem
            user={user}
            onApprove={handleApprove}
            onReject={handleReject}
            fluid
          />
        </div>
        <div className="box">
          <span className="title">{`<Youtube/>`}</span>

          <Youtube videoId="dQw4w9WgXcQ" />
        </div>
      </div>
    </Flex>
  );
};

export default Hero;
