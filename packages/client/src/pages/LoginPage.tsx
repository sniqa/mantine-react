import {
  Paper,
  Center,
  TextInput,
  PasswordInput,
  Text,
  Button,
  Checkbox,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconUser, IconPassword } from "@comps/FontAwesomeIcons";
import { useLanguage } from "@libs/hooks";
import { useSWRMutation, SWR_KEYS } from "@libs/swr";

import { showNotification } from "@mantine/notifications";

export default () => {
  const language = useLanguage();

  const { onSubmit, getInputProps } = useForm({
    initialValues: {
      user: "",
      password: "",
    },
    validate: {
      user: (value) =>
        value.trim() === "" ? language.inputMustBeProvide : null,
      password: (value) =>
        value.trim() === "" ? language.inputMustBeProvide : null,
    },
  });

  const { trigger } = useSWRMutation(SWR_KEYS.Login, async () => {});

  const formSubmit = (values: { user: string; password: string }) => {};

  return (
    <Center className="h-screen bg-gray-300">
      <Paper>
        <form className="p-8" onSubmit={onSubmit(formSubmit)}>
          <Center>
            <Text className="text-2xl">{language.projectNameTip}</Text>
          </Center>

          <TextInput
            size="md"
            label={language.accountTip}
            icon={<IconUser />}
            withAsterisk
            className="w-80 py-4"
            {...getInputProps("user")}
          />

          <PasswordInput
            size="md"
            label={language.passwordTip}
            icon={<IconPassword />}
            withAsterisk
            className="w-80 pb-4"
            {...getInputProps("password")}
          />

          <Group className="pb-4" position="apart">
            <Checkbox label={language.rememberPasswordTip} />
            <Checkbox label={language.autoLoginTip} />
          </Group>

          <Button fullWidth type="submit">
            {language.loginTip}
          </Button>
        </form>
      </Paper>
    </Center>
  );
};
