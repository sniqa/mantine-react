import { ActionIcon, Menu, Tooltip } from "@mantine/core";
import { IconLanguage } from "./FontAwesomeIcons";
import { useLanguage, Languagelist, useToggleLanguage } from "@libs/hooks";

export default () => {
  const language = useLanguage();

  const { toggleLanguage } = useToggleLanguage();

  return (
    <Menu>
      <Menu.Target>
        <Tooltip label={language.toggleLanguageTip} withArrow>
          <ActionIcon>
            <IconLanguage />
          </ActionIcon>
        </Tooltip>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item onClick={() => toggleLanguage(Languagelist.zh)}>
          {language.Chinese}
        </Menu.Item>
        <Menu.Item onClick={() => toggleLanguage(Languagelist.en)}>
          {language.English}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
