import { ColorScheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { useCallback } from "react";

export const useToggleDarkModel = () => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return {
    colorScheme,
    setColorScheme,
    toggleColorScheme,
    toggleDarkModel: () =>
      setColorScheme(colorScheme === "dark" ? "light" : "dark"),
  };
};
