import { IconClick, IconDate, IconTime } from "@comps/FontAwesomeIcons";
import { useLanguage } from "@libs/hooks";
import { notifications } from "@libs/notifications";
import { ActionIcon, Box, Button, Group } from "@mantine/core";
import { DatePicker, TimeInput, DatePickerProps } from "@mantine/dates";
import "dayjs/locale/en";
import "dayjs/locale/zh-cn";
import { memo, ReactNode, useCallback, useEffect, useState } from "react";

type DateTime = {
  date: Date;
  time: Date;
};

type DateTimePickerProps = {
  defaultDate?: Date;
  defaultTime?: Date;
  onChange?: ({ date, time }: DateTime) => void;
  excludeDate?: (date: Date, selectedDate: Date) => boolean;
  withIcon?: boolean;
  timeError?: ReactNode;
  className?: string;
} & DatePickerProps;

const underlineToHorizontalLine = (str: string) => str.split("_").join("-");

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
    const language = useLanguage();

    const currentDate = new Date();

    const [date, setDate] = useState(defaultDate || currentDate);

    const [time, setTime] = useState(
      defaultTime || new Date(currentDate.toLocaleDateString())
    );

    useEffect(() => {
      onChange &&
        onChange({
          date,
          time,
        });
    }, [date, time]);

    return (
      <Box className={`"flex rounded overflow-hidden ${className}`}>
        <DatePicker
          {...prop}
          size={size}
          placeholder={language.pickDateTip}
          icon={withIcon && <IconDate />}
          locale={underlineToHorizontalLine(language.languageKind)}
          inputFormat="YYYY/MM/DD"
          onChange={(value) => value && setDate(value)}
          rightSection={
            <TimeInput
              size={size}
              icon={withIcon && <IconTime />}
              value={time}
              withSeconds
              variant="unstyled"
              className="mr-20"
              error={timeError}
              onChange={setTime}
            />
          }
        />
      </Box>
    );
  }
);

// Date Time Range Picker
interface DateTimeRangePickerProps {
  className?: string;
  onChange?: (value: { startTimestamp: number; endTimestamp: number }) => void;
}

export const DateTimeRangePicker = ({
  className,
  onChange,
}: DateTimeRangePickerProps) => {
  const language = useLanguage();

  const currentDate = new Date();

  const t = new Date(currentDate.toLocaleDateString());

  const [startTime, setStartTime] = useState<DateTime>({
    date: currentDate,
    time: t,
  });
  const [endTime, setEndTime] = useState<DateTime>({
    date: currentDate,
    time: t,
  });

  const [timeError, setTimeError] = useState(false);

  // test the endTime is large startTime
  const test = useCallback((dateTime: DateTime) => {
    setTimeError(false);

    if (dateTime.time.getTime() < startTime.time.getTime()) {
      setTimeError(true);
    }

    setEndTime(dateTime);
  }, []);

  const handleonClick = useCallback(() => {
    const startTimestamp = getTimestampFromDateAndTime(startTime);

    const endTimestamp = getTimestampFromDateAndTime(endTime);

    if (endTimestamp < startTimestamp) {
      return notifications.error(
        language.errmsg.dateTimeRangePicker.endTimeLessStartTime
      );
    }

    onChange &&
      onChange({
        startTimestamp,
        endTimestamp,
      });
  }, [startTime, endTime]);

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

      <Button size="xs" onClick={handleonClick}>
        {"确定"}
      </Button>
    </Group>
  );
};

const getTimestampFromDateAndTime = ({
  date,
  time,
}: {
  date: Date;
  time: Date;
}) => {
  return (
    new Date(date.toLocaleDateString()).getTime() +
    (time.getTime() - new Date(time.toLocaleDateString()).getTime())
  );
};
