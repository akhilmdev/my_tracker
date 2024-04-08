"use client";
import { useState } from "react";

import { Header } from "@/components/common";
import { DateSelector } from "@/components/common/dateSelector";
import { TodayWithDate } from "@/components/dashboard/todayWithDate";

// const

export default function dashbaord() {
  const [date, setDate] = useState<Date>(new Date());

  const setDateValue = (selectedDate: Date | null) => {
    if (!selectedDate) return;
    setDate(selectedDate);
  };

  return (
    <div className="bg-pageBackground w-full h-screen">
      <Header />
      <TodayWithDate />

      <DateSelector />
    </div>
  );
}
