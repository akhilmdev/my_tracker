"use client";
import { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import { getDate, getMonth } from "@/lib/dateAndTime";

export interface MonthPickerProps {
  month: string;
  setMonth: (month: string) => void;
}

export function MonthPicker({ month, setMonth }: MonthPickerProps) {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  if (month === "") month = getMonth();

  return (
    <>
      <div className="flex gap-2">
        <div onClick={() => setIsOpen(!isOpen)}>{month}</div>
      </div>
      <div className={`flex flex-wrap w-10 ${isOpen ? "" : "hidden"}`}>
        {["Jan", "Feb", "Mar", "Apr", "may", "jun"].map((month) => {
          return (
            <div className={`flex w-4 h-2`}>
              <span className="">{month}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
