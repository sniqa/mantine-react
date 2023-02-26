import { ConfirmActionIcon } from '@comps/ConfirmButton'
import { DateTimeRangePicker } from '@comps/DateTimePicker'
import {
	IconAdd,
	IconDelete,
	IconExportFile,
	IconImportFile,
} from '@comps/FontAwesomeIcons'
import { LanguageConstants } from '@libs/constant'
import { ActionIcon, Group, Tooltip } from '@mantine/core'
import { MRT_TableInstance } from 'mantine-react-table'
import { ReactNode } from 'react'

export interface MantineReactTableCustomToolbarActionsProps<
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

// Mantine react table renderTopToolbarCustomActions prop
export default <TData extends Record<string, any> = {}>({
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
} & MantineReactTableCustomToolbarActionsProps<TData>) => {
	const isDisable = table.getSelectedRowModel().rows.length <= 0

	return (
		<Group spacing={2}>
			<>
				{/* delete selection */}
				<ConfirmActionIcon
					iconDisable={isDisable}
					icon={<IconDelete />}
					iconTip={language.MantineReactTableDeleteSelectionTip}
					onConfirm={onDeleteSelection}
					position="bottom-start"
				/>

				{/* export selection */}
				<Tooltip label={language.MantineReactTableExportSelectionTip} withArrow>
					<ActionIcon disabled={isDisable}>
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
