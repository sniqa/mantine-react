import { IconDate, IconTime } from '@comps/FontAwesomeIcons'
import { useLanguage } from '@libs/hooks'
import { Box, Group } from '@mantine/core'
import { DatePicker, TimeInput } from '@mantine/dates'
import 'dayjs/locale/en'
import 'dayjs/locale/zh-cn'
import { memo, ReactNode, useEffect, useState } from 'react'

type DateTime = {
	date: Date
	time: Date
}

interface DateTimePickerProps {
	defaultDate?: Date
	defaultTime?: Date
	onChange?: ({ date, time }: DateTime) => void
	excludeDate?: (date: Date, selectedDate: Date) => boolean
	withIcon?: boolean
	timeError?: ReactNode
}

const underlineToHorizontalLine = (str: string) => str.split('_').join('-')

export const DateTimePicker = memo(
	({
		onChange,
		excludeDate,
		defaultDate,
		defaultTime,
		withIcon = true,
		timeError,
	}: DateTimePickerProps) => {
		const language = useLanguage()

		const currentDate = new Date()

		const [date, setDate] = useState(defaultDate || currentDate)

		const [time, setTime] = useState(
			defaultTime || new Date(currentDate.toLocaleDateString())
		)

		useEffect(() => {
			onChange &&
				onChange({
					date,
					time,
				})
		}, [date, time])

		return (
			<Box className="flex border border-solid border-gray-200 w-52 rounded overflow-hidden">
				<DatePicker
					placeholder={language.pickDateTip}
					withAsterisk
					icon={withIcon && <IconDate />}
					size={'xs'}
					value={date}
					className="w-40"
					locale={underlineToHorizontalLine(language.languageKind)}
					inputFormat="YYYY/MM/DD"
					onChange={(value) => value && setDate(value)}
					variant="unstyled"
					rightSection={
						<TimeInput
							size="xs"
							icon={withIcon && <IconTime />}
							value={time}
							withSeconds
							variant="unstyled"
							error={timeError}
							onChange={setTime}
						/>
					}
					excludeDate={(oldDate) =>
						!!(excludeDate && excludeDate(oldDate, date))
					}
				/>
			</Box>
		)
	}
)

interface DateTimePickerProps {
	className?: string
}

export const DateTimeRangePicker = ({ className }: DateTimePickerProps) => {
	const currentDate = new Date()
	const t = new Date(currentDate.toLocaleDateString())

	const [startTime, setStartTime] = useState<DateTime>({
		date: currentDate,
		time: t,
	})
	const [endTime, setEndTime] = useState<DateTime>({
		date: currentDate,
		time: t,
	})

	const [timeError, setTimeError] = useState(false)

	const test = (dateTime: DateTime) => {
		setTimeError(false)
		if (dateTime.time.getTime() < startTime.time.getTime()) {
			setTimeError(true)
		}

		setEndTime(dateTime)
	}

	return (
		<Group spacing="xs" className={className}>
			<DateTimePicker onChange={setStartTime} defaultDate={currentDate} />

			<div className="bg-gray-400 w-4 h-0.5 rounded-md"></div>

			<DateTimePicker
				onChange={test}
				defaultDate={currentDate}
				timeError={timeError}
				excludeDate={(date) => date.getDate() < startTime?.date.getDate()}
			/>
		</Group>
	)
}
