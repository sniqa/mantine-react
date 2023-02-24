import MantineCustomReactTable, {
  MRT_ColumnDef,
} from "@comps/table/MantineCustomReactTable";
import { useLanguage } from "@libs/hooks";

import { UsbKeyInfo, UsbKeyInfoWithId } from "@mantine-assets/types";
import { useMemo, useState } from "react";
import CustomModal from "@comps/CustomModal";
import { Grid, TextInput, Textarea } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { DateTimePicker } from "@comps/DateTimePicker";

// default
export default () => {
  const language = useLanguage();

  const columns = useMemo<MRT_ColumnDef<UsbKeyInfoWithId>[]>(
    () => [
      { accessorKey: "number", header: language.usbKeyTableHeader.number },
      { accessorKey: "state", header: language.usbKeyTableHeader.state },
      { accessorKey: "user", header: language.usbKeyTableHeader.user },
      {
        accessorKey: "enable_timestamp",
        header: language.usbKeyTableHeader.enable_timestamp,
      },
      {
        accessorKey: "collection_timsetamp",
        header: language.usbKeyTableHeader.collection_timsetamp,
      },
      {
        accessorKey: "return_timestamp",
        header: language.usbKeyTableHeader.return_timestamp,
      },
      { accessorKey: "remark", header: language.usbKeyTableHeader.remark },
    ],
    []
  );

  return (
    <>
      <MantineCustomReactTable columns={columns} data={[]} />

      <UsbkeyDetailModal opened={true} onClose={() => {}} />
    </>
  );
};

interface UsbkeyDetailModalProps {
  opened: boolean;
  onClose: () => void;
  onAccept?: (value: UsbKeyInfo | UsbKeyInfoWithId) => {};
  defaultValue?: UsbKeyInfoWithId;
}

const initialValue: UsbKeyInfo = {
  number: "",
  user: "",
  state: "",
  collection_timsetamp: 0,
  enable_timestamp: 0,
  create_timestamp: 0,
  return_timestamp: 0,
  last_modify_timestamp: 0,
  remark: "",
};

const UsbkeyDetailModal = ({
  opened,
  onClose,
  defaultValue,
  onAccept,
}: UsbkeyDetailModalProps) => {
  const language = useLanguage();

  const [usbKey, setUsbKey] = useDebouncedValue<UsbKeyInfo | UsbKeyInfoWithId>(
    200,
    defaultValue || initialValue
  );

  return (
    <CustomModal
      opened={opened}
      onClose={onClose}
      language={language}
      onAccept={() => onAccept && onAccept(usbKey)}
    >
      <Grid gutter="xs">
        {/* number */}
        <Grid.Col span={6}>
          <TextInput label={language.usbKeyTableHeader.number} size="sm" />
        </Grid.Col>

        {/* user */}
        <Grid.Col span={6}>
          <TextInput label={language.usbKeyTableHeader.user} size="sm" />
        </Grid.Col>

        {/* state */}
        <Grid.Col span={6}>
          <TextInput label={language.usbKeyTableHeader.state} size="sm" />
        </Grid.Col>

        {/*    enable_timestamp    */}
        <Grid.Col span={6}>
          <DateTimePicker label={language.usbKeyTableHeader.enable_timestamp} />
        </Grid.Col>

        {/*  collection_timsetamp*/}
        <Grid.Col span={6}>
          <DateTimePicker
            label={language.usbKeyTableHeader.collection_timsetamp}
          />
        </Grid.Col>

        {/* return_timestamp */}
        <Grid.Col span={6}>
          <DateTimePicker label={language.usbKeyTableHeader.return_timestamp} />
        </Grid.Col>

        {/* remark */}
        <Grid.Col span={12}>
          <Textarea label={language.usbKeyTableHeader.remark} size="sm" />
        </Grid.Col>
      </Grid>
    </CustomModal>
  );
};
