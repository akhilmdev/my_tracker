"use client";
import { Header } from "@/components/common";
import { DateSelector } from "@/components/common/dateSelector";
import { TodayWithDate } from "@/app/dashboard/components/todayWithDate";
import { useDateSelection } from "@/stores/date-selection.store";
import { TaskList } from "./components/TaskList";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

export default function dashbaord() {
  const { dayjs, date, updateDate, updateMonth } = useDateSelection();

  return (
    <div className="bg-pageBackground w-full h-screen">
      <Header />
      <TodayWithDate dayjs={dayjs} updateMonth={updateMonth} />
      <DateSelector selectedDate={date} updateDate={updateDate} />
      <hr className="h-1 text-border mt-3" />
      <div className="text-text font-medium text-lg m-4 flex justify-between align-middle">
        <span className="my-auto">Plan's for the day</span>
        <Link
          className="w-10 h-10 my-auto text-white p-1 border border-white rounded-full flex justify-center"
          href={"/tasks/create-or-edit"}
        >
          <span className="">
            <AddIcon />
          </span>
        </Link>
      </div>
      <div className=" mx-4"></div>
      <TaskList />
    </div>
  );
}
