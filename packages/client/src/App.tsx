import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useToggleDarkModel } from "@libs/toggleDarkModel";

export default () => {
  // const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
  //   key: "mantine-color-scheme",
  //   defaultValue: "light",
  //   getInitialValueInEffect: true,
  // });

  // const toggleColorScheme = (value?: ColorScheme) =>
  //   setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const { colorScheme, toggleColorScheme } = useToggleDarkModel();

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <RouterProvider router={router} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
