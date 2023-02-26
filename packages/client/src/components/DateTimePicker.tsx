import { IconDate, IconTime } from '@comps/FontAwesomeIcons'
import { useLanguage } from '@libs/hooks'
import { notifications } from '@libs/notifications'
import { Box, Button, Group } from '@mantine/core'
import { DatePicker, DatePickerProps, TimeInput } from '@mantine/dates'
import 'dayjs/locale/en'
import 'dayjs/locale/zh-cn'
import { memo, ReactNode, useCallback, useEffect, useState } from 'react'

type DateTimePickerProps = {
	defaultDate?: Date
	defaultTime?: Date
	onChange?: (timestamp: number) => void
	excludeDate?: (date: Date, selectedDate: Date) => boolean
	withIcon?: boolean
	timeError?: ReactNode
	className?: string
} & Omit<DatePickerProps, 'onChange'>

const underlineToHorizontalLine = (str: string) => str.split('_').join('-')

// Date Time Picker
export const DateTimePicker = memo(
	({
		onChange,
		defaultDate,
		defaultTime,
		withIcon = true,
		timeError,
		size,
		className,
		...prop
	}: DateTimePickerProps) => {
		const language = useLanguage()

		const [dateTime, setDateTime] = useState({
			date: defaultDate,
			time: defaultTime || new Date(0),
		})

		useEffect(() => {
			onChange &&
				onChange(
					getTimestampFromDateAndTime({
						date: dateTime.date || new Date(0),
						time: dateTime.time,
					})
				)
		}, [dateTime])

		return (
			<Box className={`flex rounded overflow-hidden ${className}`}>
				<DatePicker
					{...prop}
					size={size}
					placeholder={language.pickDateTip}
					defaultValue={dateTime.date}
					icon={withIcon && <IconDate />}
					locale={underlineToHorizontalLine(language.languageKind)}
					inputFormat="YYYY/MM/DD"
					onChange={(value) =>
						value && setDateTime((old) => ({ ...old, date: value }))
					}
					rightSection={
						<TimeInput
							size={size}
							icon={withIcon && <IconTime />}
							value={dateTime.time}
							withSeconds
							variant="unstyled"
							className="mr-20"
							error={timeError}
							onChange={(value) =>
								value && setDateTime((old) => ({ ...old, time: value }))
							}
						/>
					}
				/>
			</Box>
		)
	}
)

// Date Time Range Picker
type DateTimeRangePickerProps = {
	className?: string
	onChange?: (value: { startTimestamp: number; endTimestamp: number }) => void
} & DatePickerProps

export const DateTimeRangePicker = ({
	className,
	onChange,
	size,
}: DateTimeRangePickerProps) => {
	const language = useLanguage()

	const [dateTimeRange, setDateTimeRange] = useState({
		startTimestamp: 0,
		endTimestamp: 0,
	})

	const handleonClick = useCallback(() => {
		if (dateTimeRange.endTimestamp < dateTimeRange.startTimestamp) {
			return notifications.error(
				language.errmsg.dateTimeRangePicker.endTimeLessStartTime
			)
		}

		console.log(dateTimeRange)

		console.log({
			start: new Date(dateTimeRange.startTimestamp).toLocaleString(),
			end: new Date(dateTimeRange.endTimestamp).toLocaleString(),
		})

		onChange && onChange(dateTimeRange)
	}, [dateTimeRange])

	return (
		<Group spacing="xs" className={className}>
			<DateTimePicker
				size={size}
				onChange={(datetime) =>
					setDateTimeRange((old) => ({
						...old,
						startTimestamp: datetime,
					}))
				}
			/>

			<div className="bg-gray-400 w-4 h-0.5 rounded-md"></div>

			<DateTimePicker
				onChange={(datetime) =>
					setDateTimeRange((old) => ({
						...old,
						endTimestamp: datetime,
					}))
				}
				size={size}
				excludeDate={(date) => date.getTime() < dateTimeRange.startTimestamp}
			/>

			<Button size={size} onClick={handleonClick}>
				{'确定'}
			</Button>
		</Group>
	)
}

const getTimestampFromDateAndTime = ({
	date,
	time,
}: {
	date: Date
	time: Date
}) => {
	return (
		new Date(date?.toLocaleDateString() || 0).getTime() +
		(time.getTime() - new Date(time.toLocaleDateString()).getTime())
	)
}
