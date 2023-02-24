import { LanguageConstants } from "@libs/constant";
import { useLanguage } from "@libs/hooks";
import { Group, Modal, Text, Stack, Button, Center } from "@mantine/core";
import { ReactNode } from "react";

interface CustomModalProps {
  opened: boolean;
  onClose: () => void;
  language: LanguageConstants;
  onAccept?: () => void;
  children: ReactNode;
  title?: string;
}

export default ({
  opened,
  onClose,
  onAccept,
  children,
  title,
  language,
}: CustomModalProps) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      withCloseButton={false}
      size="480px"
    >
      <Stack>
        {title && (
          <Center>
            <Text className="text-2xl">{title}</Text>
          </Center>
        )}

        <>{children}</>

        <Group position="right">
          <Button size="sm" variant="outline" onClick={onClose}>
            {language.cancelButtonTip}
          </Button>

          <Button size="sm" onClick={onAccept}>
            {language.acceptButtonTip}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};
