import { useLanguage } from "@libs/hooks";
import {
  ActionIcon,
  Anchor,
  Button,
  Center,
  Flex,
  Group,
  Modal,
  ModalProps,
  Text,
} from "@mantine/core";
import { Dropzone, FileWithPath, DropzoneProps } from "@mantine/dropzone";
import { memo, useState } from "react";
import { IconHome, IconFile, IconDelete } from "./FontAwesomeIcons";
import { notifications } from "@libs/notifications";

export type DropzoneModalProps = {
  modalTitle?: string;
  downloadLinkTip?: string;
  opened: boolean;
  onClose: () => void;
  onUploadStart?: (Files: FileWithPath[]) => void;
} & Omit<DropzoneProps, "children" | "onDrop">;

export default memo(
  ({
    opened,
    onClose,
    modalTitle,
    downloadLinkTip,
    onUploadStart,
    ...prop
  }: DropzoneModalProps) => {
    const language = useLanguage();

    const [files, setFiles] = useState<FileWithPath[]>([]);

    return (
      <Modal
        opened={opened}
        onClose={onClose}
        centered
        title={modalTitle || language.tableDropzoneModalTitleTip}
        sx={{ padding: 0 }}
      >
        <div className="mb-2">
          <Anchor className="pb-2">
            {downloadLinkTip || language.tableDropzoneModalDownloadLinkTip}
          </Anchor>
        </div>

        {/* Dropzone */}
        <Dropzone {...prop} onDrop={(files) => setFiles(files)}>
          <Center className="py-1 text-2xl text-gray-400">
            <IconFile />
          </Center>

          <Flex direction={"column"} justify="center" align="center">
            <Text size="xl" className=" text-gray-400">
              {language.tableDropzoneModalHint1Tip}
            </Text>

            <Text size="sm" className="pt-1 text-gray-300">
              {language.tableDropzoneModalHint1Tip}
            </Text>
          </Flex>
        </Dropzone>

        {files.map((file) => (
          <TextWithDelete
            key={file.size}
            message={file.name}
            onDelete={() =>
              setFiles((oldFiles) =>
                oldFiles.filter((f) => f.path != file.path)
              )
            }
          />
        ))}

        {/* buttons */}
        <Group position="right" className="mt-4">
          <Button size="xs" variant="outline" onClick={onClose}>
            {language.cancelButtonTip}
          </Button>
          <Button
            size="xs"
            disabled={files.length === 0}
            onClick={() => onUploadStart && onUploadStart(files)}
          >
            {language.acceptButtonTip}
          </Button>
        </Group>
      </Modal>
    );
  }
);

const TextWithDelete = ({
  message,
  onDelete,
}: {
  message: string;
  onDelete: () => void;
}) => {
  return (
    <Group position="apart">
      <Text>{message}</Text>

      <ActionIcon onClick={onDelete}>
        <IconDelete />
      </ActionIcon>
    </Group>
  );
};
