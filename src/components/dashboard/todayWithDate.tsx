import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { getTodayString } from "@/lib/dateAndTime";
import { MonthPicker, MonthPickerProps } from "../common/monthPicker";

interface TodayWithDateProps {}

export function TodayWithDate({}: TodayWithDateProps) {
  const [monthYear, dateDay] = getTodayString();

  return (
    <Box className="flex text-text justify-between px-4 mt-6">
      <Box>
        <Typography className="text-4xl font-semibold">{monthYear}</Typography>

        <Typography className="text-4xl font-semibold">{dateDay}</Typography>
      </Box>
    </Box>
  );
}
