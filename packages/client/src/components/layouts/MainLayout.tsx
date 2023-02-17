import { useLogin } from "@libs/hooks";
import {
  AppShell,
  Burger,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Suspense, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { RouterPath } from "@path";

import Header from "./MainHeader";
import SideNavbar from "./SideNavbar";
import { useMediaQuery } from "@mantine/hooks";

export default () => {
  const { isLogin } = useLogin();

  const theme = useMantineTheme();

  const [opened, setOpened] = useState(false);

  const matches = useMediaQuery(`(min-width: ${theme.breakpoints.xs}px)`);

  if (!isLogin) {
    return <Navigate to={RouterPath.Login} />;
  }

  return (
    <AppShell
      layout={matches ? "alt" : "default"}
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="xs"
      asideOffsetBreakpoint="xs"
      navbar={<SideNavbar opened={opened} />}
      header={<Header opened={opened} close={() => setOpened(!opened)} />}
    >
      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
    </AppShell>
  );
};
