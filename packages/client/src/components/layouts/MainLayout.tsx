import {
  AppShell,
  Burger,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./MainHeader";
import SideNavbar from "./SideNavbar";

export default () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<SideNavbar opened={opened} />}
      header={<Header opened={opened} close={() => setOpened(!opened)} />}
    >
      <Outlet />
    </AppShell>
  );
};
