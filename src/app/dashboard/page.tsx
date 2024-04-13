"use client";
import { Header } from "@/components/common";
import { DateSelector } from "@/components/common/dateSelector";
import { TodayWithDate } from "@/app/dashboard/components/todayWithDate";
import { useDateSelection } from "@/stores/date-selection.store";
import { TaskList } from "./components/TaskList";

export default function dashbaord() {
  const { dayjs, date, updateDate, updateMonth } = useDateSelection();

  return (
    <div className="bg-pageBackground w-full h-screen">
      <Header />
      <TodayWithDate dayjs={dayjs} updateMonth={updateMonth} />
      <DateSelector selectedDate={date} updateDate={updateDate} />
      <hr className="h-1 text-border mt-3" />
      <TaskList />
    </div>
  );
}
