import MantineCustomReactTable, {
	MRT_ColumnDef,
} from '@comps/table/MantineCustomReactTable'
import { useLanguage } from '@libs/hooks'

import CustomModal from '@comps/CustomModal'
import { DateTimePicker } from '@comps/DateTimePicker'
import { UsbKeyInfo, UsbKeyInfoWithId } from '@mantine-assets/types'
import { Grid, Select, Textarea, TextInput } from '@mantine/core'
import { useDebouncedValue } from '@mantine/hooks'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'

const fackerData = Array.from({ length: 100 }, (_, index) => ({
	_id: index,
	number: index,
	state: '',
	user: 'user' + '' + index,
	enable_timestamp: 0,
	collection_timsetamp: index,
	return_timestamp: index,
	remark: 'remark' + index,
}))

// default
export default () => {
	const language = useLanguage()

	const [openDetailMaodal, setOpenDetailModal] = useState(false)

	const [currentRow, setCurrentRow] = useState<UsbKeyInfoWithId | null>(null)

	// close Detail Modal
	const handleCloseDetailModal = useCallback(
		() => setOpenDetailModal(false),
		[]
	)

	// open Detail Modal
	const handleOnCreate = useCallback(() => {
		setCurrentRow(null)

		setOpenDetailModal(true)
	}, [])

	const handleOnEdit = useCallback((currentRow: UsbKeyInfoWithId) => {
		setCurrentRow(currentRow)

		setOpenDetailModal(true)
	}, [])

	const columns = useMemo<MRT_ColumnDef<UsbKeyInfoWithId>[]>(
		() => [
			{ accessorKey: 'number', header: language.usbKeyTableHeader.number },
			{ accessorKey: 'state', header: language.usbKeyTableHeader.state },
			{ accessorKey: 'user', header: language.usbKeyTableHeader.user },
			{
				accessorKey: 'enable_timestamp',
				header: language.usbKeyTableHeader.enable_timestamp,
			},
			{
				accessorKey: 'collection_timsetamp',
				header: language.usbKeyTableHeader.collection_timsetamp,
			},
			{
				accessorKey: 'return_timestamp',
				header: language.usbKeyTableHeader.return_timestamp,
			},
			{ accessorKey: 'remark', header: language.usbKeyTableHeader.remark },
		],
		[]
	)

	return (
		<>
			<MantineCustomReactTable<UsbKeyInfoWithId>
				columns={columns}
				data={fackerData}
				onCreate={handleOnCreate}
				onEdit={handleOnEdit}
			/>

			<UsbkeyDetailModal
				opened={openDetailMaodal}
				onClose={handleCloseDetailModal}
				defaultValue={currentRow}
			/>
		</>
	)
}

interface UsbkeyDetailModalProps {
	opened: boolean
	onClose: () => void
	onAccept?: (value: UsbKeyInfo | UsbKeyInfoWithId) => {}
	defaultValue?: UsbKeyInfoWithId | null
}

const initialValue: UsbKeyInfo = {
	number: '',
	user: '',
	state: '',
	collection_timsetamp: 0,
	enable_timestamp: 0,
	create_timestamp: 0,
	return_timestamp: 0,
	last_modify_timestamp: 0,
	remark: '',
}

const UsbkeyDetailModal = memo(
	({
		opened,
		onClose,
		defaultValue = null,
		onAccept,
	}: UsbkeyDetailModalProps) => {
		const language = useLanguage()

		const [value, setValue] = useState<UsbKeyInfo | UsbKeyInfoWithId>(
			defaultValue || initialValue
		)

		const [debounced] = useDebouncedValue(value, 200)

		console.log(defaultValue)
		useEffect(() => {
			defaultValue ? setValue(defaultValue) : setValue(initialValue)
		}, [defaultValue])

		return (
			<CustomModal
				opened={opened}
				onClose={onClose}
				// title={}
				language={language}
				onAccept={() => onAccept && onAccept(debounced)}
			>
				<Grid gutter="xs">
					{/* number */}
					<Grid.Col span={6}>
						<TextInput
							label={language.usbKeyTableHeader.number}
							value={value?.number.toString() || ''}
							size="xs"
							onChange={(e) =>
								setValue((old) => ({ ...old, number: e.target.value.trim() }))
							}
						/>
					</Grid.Col>

					{/* user */}
					<Grid.Col span={6}>
						<TextInput
							label={language.usbKeyTableHeader.user}
							size="xs"
							value={value?.user}
							onChange={(e) =>
								setValue((old) => ({
									...old,
									user: e.target.value.trim(),
								}))
							}
						/>
					</Grid.Col>

					{/* state */}
					<Grid.Col span={6}>
						<Select
							label={language.usbKeyTableHeader.state}
							size="xs"
							value={value?.state || ''}
							onChange={(value) =>
								setValue((old) => ({
									...old,
									state: value || language.usbKeyState.idle,
								}))
							}
							data={[
								language.usbKeyState.in_use,
								language.usbKeyState.idle,
								language.usbKeyState.failure,
							]}
						/>
					</Grid.Col>

					{/*    enable_timestamp    */}
					<Grid.Col span={6}>
						<DateTimePicker
							size="xs"
							label={language.usbKeyTableHeader.enable_timestamp}
							defaultValue={new Date(value?.enable_timestamp)}
							onChange={(timestamp) =>
								setValue((old) => ({
									...old,
									enable_timestamp: timestamp,
								}))
							}
						/>
					</Grid.Col>

					{/*  collection_timsetamp*/}
					<Grid.Col span={6}>
						<DateTimePicker
							size="xs"
							label={language.usbKeyTableHeader.collection_timsetamp}
							defaultValue={new Date(value?.collection_timsetamp)}
							onChange={(timestamp) =>
								setValue((old) => ({
									...old,
									collection_timsetamp: timestamp,
								}))
							}
						/>
					</Grid.Col>

					{/* return_timestamp */}
					<Grid.Col span={6}>
						<DateTimePicker
							size="xs"
							label={language.usbKeyTableHeader.return_timestamp}
							defaultValue={new Date(value?.return_timestamp)}
							onChange={(timestamp) =>
								setValue((old) => ({
									...old,
									return_timestamp: timestamp,
								}))
							}
						/>
					</Grid.Col>

					{/* remark */}
					<Grid.Col span={12}>
						<Textarea
							label={language.usbKeyTableHeader.remark}
							size="xs"
							value={value?.remark || ''}
							onChange={(e) =>
								setValue((old) => ({
									...old,
									remark: e.target.value.trim(),
								}))
							}
						/>
					</Grid.Col>
				</Grid>
			</CustomModal>
		)
	}
)
