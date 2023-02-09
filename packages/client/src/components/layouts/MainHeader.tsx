import {
  Burger,
  Header,
  MediaQuery,
  useMantineTheme,
  Image,
  Text,
  Flex,
  Avatar,
  Grid,
} from "@mantine/core";

interface HeaderProps {
  opened: boolean;
  close: () => void;
}

export default ({ opened, close }: HeaderProps) => {
  const theme = useMantineTheme();

  return (
    <Header height={{ base: 40, md: 60 }} className="flex items-center">
      <div className="flex bg-red-400  w-full">
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={close}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Grid>
          <Grid.Col span={1}>
            <div className="bg-gray-300">Image</div>
            {/* <Image /> */}
          </Grid.Col>
          <Grid.Col span={10}>
            <div className="bg-gray-400">Hamster Project</div>
          </Grid.Col>

          <Grid.Col span={1}>
            <Avatar />
          </Grid.Col>
        </Grid>
      </div>
    </Header>
  );
};
