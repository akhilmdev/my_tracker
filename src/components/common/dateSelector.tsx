"use client";
import ScrollContainer from "react-indiana-drag-scroll";

import { getDayAndDateCurrentMonth } from "@/lib/dateAndTime";
import { useEffect, useRef } from "react";

export interface DateSelectorProps {
  selectedDate: string;
  updateDate: (date: number) => void;
}

export function DateSelector({ selectedDate, updateDate }: DateSelectorProps) {
  const days = getDayAndDateCurrentMonth();

  const divRef = useRef<HTMLDivElement>(null);

  const setDate = (date: string) => {
    updateDate(+date);
  };

  useEffect(() => {
    scrollToElement();
  }, []);

  const scrollToElement = () => {
    const { current } = divRef;
    if (current !== null && current !== undefined) {
      // current.scrollTo({ left: 100 });
      current.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };

  return (
    <ScrollContainer
      vertical={false}
      className="flex gap-4 p-4 max-w-full text-white overflow-hidden mr-4 mt-4"
    >
      {days.map(({ day, date }) => (
        <div
          key={day + date}
          className={`flex flex-col gap-2 rounded-3xl min-w-12 p-2 ${
            date === selectedDate ? "bg-dateBackground" : ""
          }`}
          ref={date === selectedDate ? divRef : null}
          onClick={() => setDate(date)}
        >
          <span
            className={`capitalize text-sm mx-auto font-light ${
              date !== selectedDate ? "text-dateBackground" : ""
            }`}
          >
            {day}
          </span>
          <span
            className={`m-auto text-xl font-medium ${
              date !== selectedDate ? "text-dateBackground" : ""
            }`}
          >
            {date}
          </span>
        </div>
      ))}
    </ScrollContainer>
  );
}
