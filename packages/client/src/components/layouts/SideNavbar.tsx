import { Navbar, Text } from "@mantine/core";

interface SideNavbarProps {
  opened: boolean;
}

export default ({ opened }: SideNavbarProps) => {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Text>Application navbar</Text>
    </Navbar>
  );
};
