import {
  IconAccount,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconComputer,
  IconDevice,
  IconDocument,
  IconHome,
  IconIpAddrees,
  IconLiner,
  IconMessage,
  IconNetwork,
  IconNetworkDevice,
  IconNetworkType,
  IconOfficeDevice,
  IconServer,
  IconSettings,
  IconTel,
  IconUsbKey,
  IconUserManage,
} from "@comps/FontAwesomeIcons";
import { LanguageConstants } from "@libs/constant";
import { useColorScheme, useLanguage } from "@libs/hooks";
import {
  ActionIcon,
  Center,
  Code,
  Collapse,
  Flex,
  Group,
  Image,
  Menu,
  Navbar,
  Text,
  Tooltip,
} from "@mantine/core";
import { RouterPath } from "@path";
import { memo, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

interface SideNavbarProps {
  opened: boolean;
  isBreakepoint?: boolean;
}

interface MenuListPros {
  title: string;
  icon: JSX.Element;
  to?: string;
  subMenu?: MenuListPros[];
}

const MenuList = ({ menuList }: { menuList: MenuListPros[] }) => {
  const { isDarkModel } = useColorScheme();
  const navigate = useNavigate();

  return (
    <>
      {menuList.map((menu) => {
        const [opened, setOpened] = useState(false);

        return (
          <Flex
            key={menu.title}
            direction="column"
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              menu.subMenu ? setOpened(!opened) : navigate(menu.to || "");
            }}
          >
            <Flex
              justify="space-between"
              className={`${
                isDarkModel
                  ? "hover:bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              } py-2 px-4`}
            >
              <Group>
                <ActionIcon
                  variant={isDarkModel ? "filled" : "light"}
                  color={`light`}
                >
                  {menu.icon}
                </ActionIcon>

                <Text className="text-sm">{menu.title}</Text>
              </Group>

              {menu.subMenu && (
                <Center className="text-xs rotate-180">
                  {opened ? <IconChevronDown /> : <IconChevronRight />}
                </Center>
              )}
            </Flex>

            {menu.subMenu && (
              <Collapse
                in={opened}
                className={`pl-4 border-l border-indigo-500`}
              >
                <MenuList menuList={menu.subMenu} />
              </Collapse>
            )}
          </Flex>
        );
      })}
    </>
  );
};

export default memo(({ opened, isBreakepoint = false }: SideNavbarProps) => {
  const language = useLanguage();

  const [expaned, setExpaned] = useState(false);

  const menuList = useMemo<MenuListPros[]>(
    () => [
      { title: language.homePageTip, icon: <IconHome />, to: RouterPath.Home },
      {
        title: language.userManagePageTip,
        icon: <IconUserManage />,
        subMenu: [
          {
            title: language.accountTip,
            icon: <IconAccount />,
            to: RouterPath.Account,
          },
        ],
      },
      { title: language.profilePageTip, icon: <IconDocument /> },
      {
        title: language.networkPageTip,
        icon: <IconNetwork />,
        subMenu: [
          {
            title: language.networkTypeTip,
            icon: <IconNetworkType />,
            to: RouterPath.Network_type,
          },
          {
            title: language.ipAddressTip,
            icon: <IconIpAddrees />,
            to: RouterPath.Network_ip_address,
          },
          {
            title: language.linerTip,
            icon: <IconLiner />,
            to: RouterPath.Network_liner,
          },
          {
            title: language.telTip,
            icon: <IconTel />,
            to: RouterPath.Network_tel,
          },
        ],
      },
      {
        title: language.devicePageTip,
        icon: <IconDevice />,
        subMenu: [
          {
            title: language.computerTip,
            icon: <IconComputer />,
            to: RouterPath.Device_computer,
          },
          {
            title: language.officeDeviceTip,
            icon: <IconOfficeDevice />,
            to: RouterPath.Device_office,
          },
          {
            title: language.networkDeviceTip,
            icon: <IconNetworkDevice />,
            to: RouterPath.Device_network,
          },
          {
            title: language.serverTip,
            icon: <IconServer />,
            to: RouterPath.Device_server,
          },
          {
            title: language.usbKeyTip,
            icon: <IconUsbKey />,
            to: RouterPath.Device_usb_key,
          },
        ],
      },
      {
        title: language.messagePageTip,
        icon: <IconMessage />,
        to: RouterPath.Logs,
      },
      { title: language.settingPageTip, icon: <IconSettings /> },
    ],
    [language]
  );

  console.log("side-navbar");

  return (
    <Navbar
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: expaned ? 80 : 240, lg: expaned ? 80 : 272 }}
      className={`transition-all`}
    >
      {expaned ? (
        <ShrinkNavbar language={language} menuList={menuList} />
      ) : (
        <ExpanedNavbar language={language} menuList={menuList} />
      )}

      {isBreakepoint && (
        <Navbar.Section className="flex-grow flex  items-end px-2">
          <Tooltip label={language.navbarToggleExpandTip} withArrow>
            <div
              className="h-16 w-full cursor-pointer flex items-center justify-center border-0 border-t border-solid border-gray-300"
              onClick={() => setExpaned(!expaned)}
            >
              {expaned ? <IconChevronRight /> : <IconChevronLeft />}
            </div>
          </Tooltip>
        </Navbar.Section>
      )}
    </Navbar>
  );
});

//
interface ExpanedNavbarProps {
  language: LanguageConstants;
  menuList: MenuListPros[];
}

const ExpanedNavbar = memo(({ language, menuList }: ExpanedNavbarProps) => {
  return (
    <>
      <Navbar.Section>
        <Flex className="h-20 px-4 " justify="space-between" align="center">
          <Center>
            <Image
              src={`/hamster.png`}
              height={`80%`}
              width={`80%`}
              maw={`4rem`}
            />

            <Text className="text-2xl">{language.projectNameTip}</Text>
          </Center>

          <Code className="h-6 mt-2">{__APP_VERSION}</Code>
        </Flex>
      </Navbar.Section>
      <Navbar.Section>
        <MenuList menuList={menuList} />
      </Navbar.Section>
    </>
  );
});

interface ShrinkNavbarProps {
  language: LanguageConstants;
  menuList: MenuListPros[];
}

const ShrinkNavbar = memo(({ language, menuList }: ShrinkNavbarProps) => {
  const { isDarkModel } = useColorScheme();

  return (
    <>
      <Navbar.Section>
        <Center className="h-20 w-full">
          <Image src={`/hamster.png`} maw={`3rem`} />
        </Center>
      </Navbar.Section>

      <Navbar.Section>
        {menuList.map((menu) => (
          <Menu position="right-start" withArrow key={menu.title}>
            <Menu.Target>
              <Tooltip label={menu.title} position="right" withArrow>
                <Center
                  className={`${
                    isDarkModel
                      ? "hover:bg-blue-500 text-white"
                      : "hover:bg-gray-100"
                  } py-2`}
                >
                  <ActionIcon
                    variant={isDarkModel ? "filled" : "light"}
                    color={`light`}
                  >
                    {menu.icon}
                  </ActionIcon>
                </Center>
              </Tooltip>
            </Menu.Target>

            {menu.subMenu && (
              <Menu.Dropdown>
                <MenuList menuList={menu.subMenu} />
              </Menu.Dropdown>
            )}
          </Menu>
        ))}
      </Navbar.Section>
    </>
  );
});
