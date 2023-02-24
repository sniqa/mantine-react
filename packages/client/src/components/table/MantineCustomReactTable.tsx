import DropzoneModal, { DropzoneModalProps } from "@comps/DropzoneModal";
import { fontAwesomeIcons } from "@comps/FontAwesomeIcons";
import { ConstantList, LanguageConstants } from "@libs/constant";
import { useLanguage } from "@libs/hooks";

import { FileWithPath } from "@mantine/dropzone";
import { MantineReactTable, MRT_ColumnDef } from "mantine-react-table";
import { memo, useCallback, useState } from "react";
import MantineCustomRowActions, {
  MantineReactTableCustomRowActionsProps,
} from "./MantineCustomRowActions";

import MantineCustomToolbarActions, {
  MantineReactTableCustomToolbarActionsProps,
} from "./MantineCustomToolbarActions";

export type { MRT_ColumnDef };

type MantineReactTableCustomProps<TData extends Record<string, any> = {}> = {
  columns: MRT_ColumnDef<TData>[];
  data: TData[];
  uploadState?: Omit<DropzoneModalProps, "opened" | "onClose">;
  rowCustomActionsSize?: number;
  rowCustomSelectSize?: number;
} & MantineReactTableCustomRowActionsProps &
  Omit<MantineReactTableCustomToolbarActionsProps, "onUploadFile">;

export default memo(
  <TData extends Record<string, any> = {}>({
    columns,
    data,
    onCreate,
    onDeleteSelection,
    uploadState,
    onDelete,
    onEdit,
    rowCustomActionsSize = 50,
    rowCustomSelectSize = 30,
  }: MantineReactTableCustomProps<TData>) => {
    const language = useLanguage();

    const [openUploadModal, setOpenUploadModal] = useState(false);

    const handleToggleUploadModal = useCallback(
      () => setOpenUploadModal((o) => !o),
      []
    );

    return (
      <>
        <MantineCustomReactTable
          columns={columns}
          data={data}
          language={language}
          enableRowActions={!!onEdit}
          onCreate={onCreate}
          onDelete={onDelete}
          onEdit={onEdit}
          onDeleteSelection={onDeleteSelection}
          onUploadFile={uploadState && handleToggleUploadModal}
          rowCustomActionsSize={rowCustomActionsSize}
          rowCustomSelectSize={rowCustomSelectSize}
        />

        {uploadState && (
          <DropzoneModal
            {...uploadState}
            opened={openUploadModal}
            onClose={handleToggleUploadModal}
          />
        )}
      </>
    );
  }
) as <TData extends Record<string, any> = {}>(
  props: MantineReactTableCustomProps<TData>
) => JSX.Element;

//
type MantineCustomReactTableProps<TData extends Record<string, any> = {}> =
  MantineReactTableCustomProps<TData> & {
    onUploadFile?: () => void;
    language: LanguageConstants;
    enableRowActions?: boolean;
    rowCustomActionsSize: number;
    rowCustomSelectSize: number;
  };

const MantineCustomReactTable = memo(
  <TData extends Record<string, any> = {}>({
    columns,
    data,
    language,
    enableRowActions = false,
    onCreate,
    onDeleteSelection,
    onUploadFile,
    onDelete,
    onEdit,
    rowCustomActionsSize = 30,
    rowCustomSelectSize = 50,
    customRowAction,
    customToolbarActions,
  }: MantineCustomReactTableProps<TData>) => {
    console.log("mantine-react-table");

    return (
      <>
        <MantineReactTable
          columns={columns}
          data={data}
          icons={fontAwesomeIcons}
          localization={language.MantineReactTableLanguage}
          enableColumnFilterModes
          enableColumnOrdering
          enableGrouping
          enablePinning
          enableRowActions={enableRowActions}
          enableRowSelection
          enablePagination
          enableClickToCopy
          enableRowVirtualization
          enableColumnResizing
          positionToolbarAlertBanner="bottom"
          positionActionsColumn="last"
          rowVirtualizerProps={{ overscan: 5 }}
          mantineSelectAllCheckboxProps={{
            size: "sm",
          }}
          mantineSelectCheckboxProps={{
            size: "sm",
          }}
          selectAllMode="all"
          renderTopToolbarCustomActions={({ table }) => (
            <MantineCustomToolbarActions
              table={table}
              language={language}
              onCreate={onCreate}
              onDeleteSelection={onDeleteSelection}
              onUploadFile={onUploadFile}
              customToolbarActions={customToolbarActions}
            />
          )}
          renderRowActions={(prop) => (
            <MantineCustomRowActions
              {...prop}
              language={language}
              onDelete={onDelete}
              onEdit={onEdit}
              customRowAction={customRowAction}
            />
          )}
          mantinePaperProps={{
            shadow: "none",
            sx: {
              borderRadius: "0.5rem",
              overflow: "hidden",
            },
          }}
          mantineTopToolbarProps={{
            sx: { zIndex: 4 },
          }}
          mantineTableHeadProps={{
            sx: { boxShadow: "none" },
          }}
          mantineTableContainerProps={{
            sx: {
              maxHeight: ConstantList.Mantine_react_table_conteiner_height,
              height: ConstantList.Mantine_react_table_conteiner_height,
            },
          }}
          initialState={{
            columnPinning: {
              right: ["mrt-row-actions"],
              left: ["mrt-row-select"],
            },
          }}
          displayColumnDefOptions={{
            "mrt-row-actions": {
              size: rowCustomActionsSize,
              mantineTableHeadCellProps: {
                align: "center",
              },
            },
            "mrt-row-select": {
              size: rowCustomSelectSize,
            },
          }}
        />
      </>
    );
  }
) as <TData extends Record<string, any> = {}>(
  props: MantineCustomReactTableProps<TData>
) => JSX.Element;
