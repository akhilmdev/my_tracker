import { getCurrentDate } from "@/lib/dateAndTime";
import dayjs from "dayjs";

import { create } from "zustand";

interface DateSelectionState {
  dayjs: dayjs.Dayjs;
  date: string;
  month: string;
  year: string;
  updateMonth: (numberOfMonths?: number, isForward?: boolean) => void;
  updateDate: (date: number) => void;
}

const currentDate = getCurrentDate();
export const useDateSelection = create<DateSelectionState>((set) => ({
  dayjs: currentDate,
  date: currentDate.format("DD"),
  month: currentDate.format("MMMM"),
  year: currentDate.format("YYYY"),
  updateMonth: (numberOfMonths = 1, isForward = true) =>
    set((state) => {
      let updatedDayjs: dayjs.Dayjs;
      if (isForward) {
        updatedDayjs = state.dayjs.add(numberOfMonths, "month");
      } else {
        updatedDayjs = state.dayjs.subtract(numberOfMonths, "month");
      }
      return {
        ...state,
        dayjs: updatedDayjs,
        month: updatedDayjs.format("MMMM"),
        year: updatedDayjs.format("YYYY"),
      };
    }),
  updateDate: (date: number) =>
    set((state) => {
      const dateObj = state.dayjs.set("date", date);
      return {
        ...state,
        dayjs: dateObj,
        date: dateObj.format("DD"),
      };
    }),
}));

// export function useDateSelection() {
//   console.log("=====================");
//   const currentDate = getCurrentDate();
//   const [selectedDate, setSelectedDate] = useState({
//     dayjs: currentDate,
//     date: currentDate.format("DD"),
//     month: currentDate.format("MMMM"),
//     year: currentDate.format("YYYY"),
//   });

//   const updateMonth = (numberOfMonths: number, isForward: boolean) => {
//     let updatedDayjs: dayjs.Dayjs;
//     if (isForward) {
//       updatedDayjs = selectedDate.dayjs.add(numberOfMonths, "month");
//     } else {
//       updatedDayjs = selectedDate.dayjs.subtract(numberOfMonths, "month");
//     }
//     setSelectedDate({
//       ...selectedDate,
//       dayjs: updatedDayjs,
//       month: updatedDayjs.format("MMMM"),
//       year: updatedDayjs.format("YYYY"),
//     });
//   };

//   const updateDate = (date: number) => {
//     const dateObj = selectedDate.dayjs.set("date", date);
//     setSelectedDate({
//       ...selectedDate,
//       dayjs: dateObj,
//       date: dateObj.format("DD"),
//     });
//   };

//   return {
//     selectedDate,
//     setSelectedDate,
//     updateMonth,
//     updateDate,
//   };
// }
