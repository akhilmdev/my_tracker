import { getTimeString } from "@/lib/dateAndTime";
import dayjs from "dayjs";

export interface DateRangeProps {
  fromDate: dayjs.Dayjs;
  toDate: dayjs.Dayjs;
}

export const DateRange = ({ fromDate, toDate }: DateRangeProps) => {
  return (
    <div className="text-border m-auto w-14">
      <div className="flex flex-col gap-0">
        <span className="text-xl m-auto font-medium">
          {getTimeString(fromDate, "HH")}
        </span>
        <span className="text-sm m-auto -mt-2">
          {getTimeString(fromDate, "MM")}
        </span>
      </div>
      <div className="h-4 w-px border ml-6 my-1"></div>
      <div className="flex flex-col gap-0">
        <span className="text-xl m-auto font-medium">
          {getTimeString(toDate, "HH")}
        </span>
        <span className="text-sm m-auto -mt-2">
          {getTimeString(toDate, "MM")}
        </span>
      </div>
    </div>
  );
};
