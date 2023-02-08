import { Button, ColorScheme } from "@mantine/core";
import { useToggleDarkModel } from "@libs/toggleDarkModel";

export default () => {
  const { toggleDarkModel } = useToggleDarkModel();

  return <Button onClick={toggleDarkModel}></Button>;
};
