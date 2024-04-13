import dayjs from "dayjs";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { getMonth, getTodayString } from "@/lib/dateAndTime";

interface TodayWithDateProps {
  dayjs: dayjs.Dayjs;
  updateMonth: (numberOfMonths?: number, isForward?: boolean) => void;
}

export function TodayWithDate({
  dayjs: dayjsObj,
  updateMonth,
}: TodayWithDateProps) {
  const [monthYear, dateDay] = getTodayString(dayjsObj);
  const currentMonth = getMonth("MMMM", dayjsObj);

  return (
    <Box className="flex text-text justify-end px-4 mt-6">
      {/* <Box>
        <Typography className="text-4xl font-semibold">{monthYear}</Typography>
        <Typography className="text-4xl font-semibold">{dateDay}</Typography>
      </Box> */}

      <Box className="flex gap-2 items-end text-xl font-semibold">
        <span>
          <KeyboardArrowLeftRoundedIcon onClick={() => updateMonth(1, false)} />
        </span>
        <span>{monthYear}</span>
        <span>
          <KeyboardArrowRightRoundedIcon onClick={() => updateMonth()} />
        </span>
      </Box>
    </Box>
  );
}
