import { ConfirmActionIcon } from '@comps/ConfirmButton'
import { DateTimeRangePicker } from '@comps/DateTimePicker'
import DropzoneModal from '@comps/DropzoneModal'
import {
	fontAwesomeIcons,
	IconAdd,
	IconDelete,
	IconEdit,
	IconExportFile,
	IconImportFile,
} from '@comps/FontAwesomeIcons'
import { ConstantList, LanguageConstants } from '@libs/constant'
import { useLanguage } from '@libs/hooks'
import { ActionIcon, Box, Group, Tooltip } from '@mantine/core'
import {
	MantineReactTable,
	MRT_Cell,
	MRT_ColumnDef,
	MRT_Row,
	MRT_TableInstance,
} from 'mantine-react-table'
import { memo, ReactNode, useCallback, useState } from 'react'

export type { MRT_ColumnDef }

interface CustomMantineReactTableRowActionsProps<
	TData extends Record<string, any> = {}
> {
	onDelete?: () => void
	onEdit?: () => void
	customRowAction?: (prop: {
		cell: MRT_Cell<TData>
		row: MRT_Row<TData>
		table: MRT_TableInstance<TData>
	}) => ReactNode
}

interface CustomMantineReactTableToolbarActionsProps<
	TData extends Record<string, any> = {}
> {
	onDeleteSelection?: () => void
	onUploadFile?: () => void
	onCreate?: () => void
	onDateTimeRangePickerChange?: () => void
	customToolbarActions?: (prop: {
		table: MRT_TableInstance<TData>
	}) => ReactNode
}

type CustomMantineReactTableProps<TData extends Record<string, any> = {}> = {
	columns: MRT_ColumnDef<TData>[]
	data: TData[]
} & CustomMantineReactTableRowActionsProps &
	CustomMantineReactTableToolbarActionsProps

export default memo(
	<TData extends Record<string, any> = {}>({
		columns,
		data,
		onDeleteSelection,
		onUploadFile,
		onCreate,
		onDelete,
		onEdit,
		customRowAction,
		customToolbarActions,
	}: CustomMantineReactTableProps<TData>) => {
		const language = useLanguage()

		const [openUploadModal, setOpenUploadModal] = useState(false)

		const handleToggleUploadModal = useCallback(
			() => setOpenUploadModal((o) => !o),
			[]
		)

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
					enableRowActions={!!onEdit}
					enableRowSelection
					enablePagination
					enableClickToCopy
					enableRowVirtualization
					enableColumnResizing
					positionToolbarAlertBanner="bottom"
					positionActionsColumn="last"
					rowVirtualizerProps={{ overscan: 5 }}
					selectAllMode="all"
					renderTopToolbarCustomActions={({ table }) => (
						<MantineCustomToolbarActions
							table={table}
							language={language}
							onCreate={onCreate}
							onDeleteSelection={onDeleteSelection}
							onUploadFile={() => (handleToggleUploadModal(), onUploadFile)}
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
						shadow: 'none',
						sx: {
							borderRadius: '0.5rem',
							overflow: 'hidden',
						},
					}}
					mantineTopToolbarProps={{
						sx: { zIndex: 4 },
					}}
					mantineTableHeadProps={{
						sx: { boxShadow: 'none' },
					}}
					mantineTableContainerProps={{
						sx: {
							maxHeight: ConstantList.Mantine_react_table_conteiner_height,
							height: ConstantList.Mantine_react_table_conteiner_height,
						},
					}}
					initialState={{
						columnPinning: {
							right: ['mrt-row-actions'],
							left: ['mrt-row-select'],
						},
					}}
				/>

				{onUploadFile && (
					<DropzoneModal
						opened={openUploadModal}
						onClose={handleToggleUploadModal}
					/>
				)}
			</>
		)
	}
)

// Mantine react table renderTopToolbarCustomActions prop
const MantineCustomToolbarActions = <TData extends Record<string, any> = {}>({
	table,
	language,
	onCreate,
	onDeleteSelection,
	onUploadFile,
	onDateTimeRangePickerChange,
	customToolbarActions,
}: {
	table: MRT_TableInstance<TData>
	language: LanguageConstants
} & CustomMantineReactTableToolbarActionsProps) => {
	return (
		<Group spacing={2}>
			<>
				{/* delete selection */}
				<ConfirmActionIcon
					icon={<IconDelete />}
					iconTip={language.MantineReactTableDeleteSelectionTip}
					onConfirm={onDeleteSelection}
				/>

				{/* export selection */}
				<Tooltip label={language.MantineReactTableExportSelectionTip} withArrow>
					<ActionIcon>
						<IconExportFile />
					</ActionIcon>
				</Tooltip>

				{/* upload */}
				{onUploadFile && (
					<Tooltip label={language.MantineReactTableUploadTip} withArrow>
						<ActionIcon onClick={onUploadFile}>
							<IconImportFile />
						</ActionIcon>
					</Tooltip>
				)}

				{/* create */}
				{onCreate && (
					<Tooltip label={language.MantineReactTableCreateTip} withArrow>
						<ActionIcon onClick={onCreate}>
							<IconAdd />
						</ActionIcon>
					</Tooltip>
				)}

				{customToolbarActions}

				<DateTimeRangePicker className="ml-2" />
			</>
		</Group>
	)
}

// Mantine react table renderRowActions prop
const MantineCustomRowActions = <TData extends Record<string, any> = {}>({
	cell,
	row,
	table,
	language,
	onDelete,
	onEdit,
	customRowAction,
}: {
	cell: MRT_Cell<TData>
	row: MRT_Row<TData>
	table: MRT_TableInstance<TData>
	language: LanguageConstants
} & CustomMantineReactTableRowActionsProps) => {
	return (
		<Box className="flex">
			<>
				{/* edit */}
				{onEdit && (
					<Tooltip label={language.editTip}>
						<ActionIcon onClick={onEdit}>
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
					/>
				)}

				{customRowAction}
			</>
		</Box>
	)
}
