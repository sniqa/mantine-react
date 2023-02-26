import { DateTimePicker, DateTimeRangePicker } from '@comps/DateTimePicker'
import { type MRT_ColumnDef } from '@comps/table/MantineCustomReactTable'

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
		<>
			<DateTimePicker></DateTimePicker>
			<DateTimeRangePicker></DateTimeRangePicker>
		</>
	)
}
