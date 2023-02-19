import CustomMantineReactTable, {
	type MRT_ColumnDef,
} from '@comps/table/CustomMantineReactTable'

const columns: MRT_ColumnDef[] = [
	{ accessorKey: 'firstname', header: 'firstname' },
	{ accessorKey: 'lastname', header: 'lastname' },
	{ accessorKey: 'age', header: 'age' },
	{ accessorKey: 'job', header: 'job' },
	{ accessorKey: 'city', header: 'city' },
]

const data = Array.from({ length: 100 }, (_, index) => ({
	firstname: 'hello ' + index,
	lastname: 'world ' + index,
	age: 18 + index,
	job: 'engener ' + index,
	city: 'New York ' + index,
}))

const d = () => {}

export default () => {
	return (
		<CustomMantineReactTable
			columns={columns}
			data={data}
			onUploadFile={d}
			onCreate={d}
			onDelete={d}
			onDeleteSelection={d}
			onEdit={d}
		/>
	)
	// return (
	// 	<Group className="p-12 bg-white">
	// 		<DateTimePicker
	// 			onChange={(date) => {}}
	// 			excludeDate={(date, selectedDate) =>
	// 				date.getDate() < selectedDate.getDate()
	// 			}
	// 		/>

	// 		<DateTimePicker
	// 			onChange={(date) => {}}
	// 			excludeDate={(date, selectedDate) =>
	// 				date.getDate() < selectedDate.getDate()
	// 			}
	// 		/>

	// 		<DateTimeRangePicker />
	// 	</Group>
	// )
}
