import DatePicker from "react-datepicker";
import TodayIcon from "@mui/icons-material/Today";
import "react-datepicker/dist/react-datepicker.css";

export interface DatePickerProps {
  date: Date | null;
  setDate: (date: Date | null) => void;
}

export function DatePickerComponent({ date, setDate }: DatePickerProps) {
  return (
    <div className="text-icon">
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        customInput={<TodayIcon color="inherit" />}
        popperPlacement="left-end"
      />
    </div>
  );
}
