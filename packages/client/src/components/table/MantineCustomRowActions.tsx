import { ConfirmActionIcon } from "@comps/ConfirmButton";
import { IconDelete, IconEdit } from "@comps/FontAwesomeIcons";
import { LanguageConstants } from "@libs/constant";
import { ActionIcon, Box, Group, Tooltip } from "@mantine/core";
import { MRT_Cell, MRT_Row, MRT_TableInstance } from "mantine-react-table";
import { ReactNode } from "react";

export interface MantineReactTableCustomRowActionsProps<
  TData extends Record<string, any> = {}
> {
  onDelete?: () => void;
  onEdit?: () => void;
  customRowAction?: (prop: {
    cell: MRT_Cell<TData>;
    row: MRT_Row<TData>;
    table: MRT_TableInstance<TData>;
  }) => ReactNode;
}

// Mantine react table renderRowActions prop
export default <TData extends Record<string, any> = {}>({
  cell,
  row,
  table,
  language,
  onDelete,
  onEdit,
  customRowAction,
}: {
  cell: MRT_Cell<TData>;
  row: MRT_Row<TData>;
  table: MRT_TableInstance<TData>;
  language: LanguageConstants;
} & MantineReactTableCustomRowActionsProps) => {
  return (
    <Group spacing={"xs"}>
      <>
        {/* edit */}
        {onEdit && (
          <Tooltip label={language.editTip} withArrow withinPortal>
            <ActionIcon onClick={() => table.setEditingRow(row)}>
              <IconEdit />
            </ActionIcon>
          </Tooltip>
        )}

        {/* delete */}
        {onDelete && (
          <ConfirmActionIcon
            icon={<IconDelete />}
            iconTip={language.MantineReactTableDeleteTip}
            onConfirm={onDelete}
            position="bottom-end"
          />
        )}

        {customRowAction}
      </>
    </Group>
  );
};
