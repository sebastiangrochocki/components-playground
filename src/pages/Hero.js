import React, { useState } from "react";
// useEffect, useMemo
import KineticCanvas from "../KineticCanvas";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import {
  Card,
  Button,
  AvatarGroup,
  IconButton,
  Avatar,
  Badge,
  Checkbox,
  Paragraph,
  Heading,
  Flex,
  Input,
  Spinner,
  TopBanner,
  Switch,
  DropdownMenu,
  Tabs,
  Tooltip,
  ComboBox,
  UserItem,
  Table,
  ToggleGroup,
  Calendar,
} from "../src/index";
import {
  Cross2Icon,
  DotsHorizontalIcon,
  TrashIcon,
  CheckIcon,
  ViewGridIcon,
  ViewHorizontalIcon,
  TooltipIcon,
  StarFilledIcon,
} from "sebikostudio-icons";
import Beaver from "../assets/avatar.png";
import * as Dialog from "@radix-ui/react-dialog";
const Hero = ({ bgColor }) => {
  //
  //
  const [selectedDate, setSelectedDate] = useState(new Date());

  const username = "dav";

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
  const [toggleViewState, setToggleViewState] = useState("Grid");
  //
  //
  //

  return (
    <Flex customClass="Body">
      <div
        className="HeroBg"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <KineticCanvas />
      </div>

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

      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        direction="vertical"
        loop={true}
        speed={10000}
        className="LeftSide"
        slidesPerView="3"
        autoplay={{ delay: 0, disableOnInteraction: false }}
        breakpoints={{
          835: {
            slidesPerView: "2",
          },
          9999: {
            slidesPerView: "3",
          },
        }}
      >
        <SwiperSlide>
          <div
            className="box frame"
            style={{
              maxWidth: "200px",
              height: "200px",
            }}
          >
            <span className="frameTitle">{`Button Component`}</span>
            <Button
              // onClick={handleClick}
              variant="solid"
              size="medium"
              showBadge
              badgeLabel="New"
            >
              Click Me
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="calendarSlide">
          <div
            className="box frame"
            style={{
              overflow: "visible",
              zIndex: "4",

              maxWidth: "400px",
              height: "400px",
            }}
          >
            <span className="frameTitle">{`Calendar Component`}</span>
            <Calendar
              selectedDate={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              open
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
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="box frame"
            style={{
              maxWidth: "300px",
              height: "300px",
            }}
          >
            <span className="frameTitle">{`AvatarGroup Component`}</span>
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
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="box frame"
            style={{
              maxWidth: "300px",
              height: "300px",
            }}
          >
            <span className="frameTitle">{`Checkbox Component`}</span>
            <Flex direction="column" gap={300}>
              <Flex gap={300}>
                <Checkbox checked customID="agreeTerms" />
                <Checkbox checked customID="agreeTerms" />
                <Checkbox customID="agreeTerms" />
              </Flex>
              <Flex gap={300}>
                <Checkbox customID="agreeTerms" />
                <Checkbox checked disabled customID="agreeTerms" />
                <Checkbox disabled customID="agreeTerms" />
              </Flex>
              <Flex gap={300}>
                <Checkbox customID="agreeTerms" />
                <Checkbox checked customID="agreeTerms" />
                <Checkbox customID="agreeTerms" />
              </Flex>
            </Flex>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="box frame"
            style={{
              maxWidth: "300px",
              height: "300px",
            }}
          >
            <span className="frameTitle">{`Input Component`}</span>

            <Input
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              // value={email}
              // onChange={handleEmailChange}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="box frame"
            style={{
              maxWidth: "600px",
              height: "200px",
            }}
          >
            <span className="frameTitle">{`TopBanner Component`}</span>
            {/* {currentNotification && (
            // <TopBanner
            //   username={username}
            //   notification={currentNotification}
            //   onDismiss={dismissNotification}
            // />
          )} */}
            <TopBanner
              username={username}
              notification={{
                title: "Figma Icons is live!",
                text: "Now you can generate React Icon Library synced with your Figma source.",
                id: "080220241",
                style: "info",
              }}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="box frame"
            style={{
              maxWidth: "300px",
              height: "300px",
            }}
          >
            <span className="frameTitle">{`Tabs Component`}</span>
            <Tabs defaultValue="tab1" fluid>
              <Tabs.List aria-label="Manage your account">
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
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="box frame"
            style={{
              maxWidth: "300px",
              height: "300px",
            }}
          >
            <span className="frameTitle">{`Card Component`}</span>

            <Card>
              <Paragraph>I am a deafult Card component.</Paragraph>
            </Card>
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        direction="vertical"
        loop={true}
        speed={10000}
        className="RightSide"
        slidesPerView="3"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        breakpoints={{
          835: {
            slidesPerView: "2",
          },
          9999: {
            slidesPerView: "3",
          },
        }}
      >
        <SwiperSlide>
          <div
            className="box frame"
            style={{
              maxWidth: "200px",
              height: "200px",
            }}
          >
            <span className="frameTitle">{`IconButton Component`}</span>

            <IconButton size="medium">
              <StarFilledIcon />
            </IconButton>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="box frame"
            style={{
              overflow: "visible",
              maxWidth: "300px",
              height: "300px",
            }}
          >
            <span className="frameTitle">{`ComboBox Component`}</span>

            <ComboBox
              options={options}
              value={selectedOwners}
              onChange={handleChange}
              placeholder="Select owners..."
              isMulti={true}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="box frame"
            style={{
              width: "220px",
              height: "220px",
            }}
          >
            <span className="frameTitle">{`ToggleGroup Component`}</span>

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
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="box frame"
            style={{
              overflow: "visible",
              zIndex: "4",

              maxWidth: "200px",
              height: "200px",
            }}
          >
            <span className="frameTitle">{`Switch Component`}</span>
            <Switch id="switch">Switch</Switch>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="box frame"
            style={{
              maxWidth: "300px",
              height: "300px",
            }}
          >
            <span className="frameTitle">{`Tooltip Component`}</span>
            <Tooltip open delayDuration={200}>
              <Tooltip.Trigger asChild>
                <IconButton variant="ghost">
                  <TooltipIcon />
                </IconButton>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="right"
                className="heroTooltip TooltipContent"
              >
                <Paragraph size="medium">Tooltip content</Paragraph>
              </Tooltip.Content>
            </Tooltip>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="box frame"
            style={{
              overflow: "visible",
              zIndex: "4",

              maxWidth: "200px",
              height: "200px",
            }}
          >
            <span className="frameTitle">{`Spinner Component`}</span>

            <Spinner />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="box frame"
            style={{
              overflow: "visible",
              zIndex: "4",
              maxWidth: "200px",
              height: "200px",
            }}
          >
            <span className="frameTitle">{`Badge Component`}</span>

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
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="box frame"
            style={{
              maxWidth: "300px",
              height: "300px",
            }}
          >
            <span className="frameTitle">{`Flex Component`}</span>

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
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="box frame"
            style={{
              maxWidth: "600px",
              height: "400px",
            }}
          >
            <span className="frameTitle">{`Table Component`}</span>

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
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};

export default Hero;
