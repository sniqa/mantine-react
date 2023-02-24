import { useLanguage } from "@libs/hooks";
import {
  ActionIcon,
  Button,
  Flex,
  Group,
  Popover,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { FloatingPosition } from "@mantine/core/lib/Floating";
import { ReactNode, useCallback, useState } from "react";

interface ComfirmButtonProps {
  target: ReactNode;
  dropdown: ReactNode;
}

interface ConfirmActionIconProps {
  icon: ReactNode;
  iconTip: ReactNode;
  iconDisable?: boolean;
  onConfirm?: () => void;
  title?: ReactNode;
  message?: ReactNode;
  position?: FloatingPosition;
}

// ActionIcon with confirm
export const ConfirmActionIcon = ({
  icon,
  iconTip,
  iconDisable = false,
  title,
  message,
  position = "bottom",
  onConfirm,
}: ConfirmActionIconProps) => {
  const [opened, setOpened] = useState(false);

  const language = useLanguage();

  const onClose = useCallback(() => setOpened((o) => !o), []);

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      position={position}
      withArrow
      arrowSize={12}
      zIndex={99}
      withinPortal
    >
      <Popover.Target>
        <Tooltip label={iconTip} withArrow withinPortal>
          <ActionIcon disabled={iconDisable} onClick={onClose}>
            {icon}
          </ActionIcon>
        </Tooltip>
      </Popover.Target>

      <Popover.Dropdown>
        <Flex direction={`column`}>
          <Title size="xs">{title || language.hint}</Title>

          <Text className="p-4" size="xs">
            {message || language.confirmDeletion}
          </Text>

          <Group>
            <Button size="xs" variant="outline" onClick={onClose}>
              {language.cancelButtonTip}
            </Button>
            <Button size="xs" onClick={onConfirm}>
              {language.acceptButtonTip}
            </Button>
          </Group>
        </Flex>
      </Popover.Dropdown>
    </Popover>
  );
};
