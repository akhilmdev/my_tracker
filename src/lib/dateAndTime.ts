import dayjs from "dayjs";

export enum Months {
  "January" = "0",
  "February" = "1",
  "March" = "2",
  "April" = "3",
  "May" = "4",
  "June" = "5",
  "July" = "6",
  "August" = "7",
  "September" = "8",
  "October" = "9",
  "November" = "10",
  "December" = "11",
}

/**
 * Function to get a formatted date string from a Date object
 * @returns A dayjs object
 */
export const getCurrentDate = (
  date?: string | number | Date | dayjs.Dayjs | null | undefined
): dayjs.Dayjs => {
  if (date) {
    return dayjs(date);
  }
  return dayjs();
};

/**
 * Function to get a formatted date string from a Date object
 * @param date - The Date object to format
 * @returns A string representing the time in "DD/MM/YYYY" format
 */
export const getDateString = (date: dayjs.Dayjs): String => {
  const dateObj = dayjs(date);
  if (!dateObj.isValid) {
    return "";
  }

  return dateObj.format("DD/MM/YYYY");
};

/**
 * Function to get a formatted time string from a Date object
 * @param date - The Date object to format
 * @returns A string representing the time in "hh:mm A" format
 */
export const getTimeString = (
  date: dayjs.Dayjs,
  format = "hh:mm A"
): String => {
  const dateObj = dayjs(date);
  if (!dateObj.isValid) {
    return "";
  }

  return dateObj.format(format);
};

/**
 * Function to get a formatted time string from a Date object
 * @param date - The Date object to format
 * @returns A string representing the date time in "DD/MM/YYYY-hh:mm A" format
 */
export const getDateTimeString = (date: dayjs.Dayjs): String => {
  const dateObj = dayjs(date);
  if (!dateObj.isValid) {
    return "";
  }

  return dateObj.format("DD/MM/YYYY-hh:mm A");
};

export const getTodayString = (today = dayjs()): String[] => {
  return [today.format("MMMM, YY"), today.format("D, dddd")];
};

type DayAndDate = {
  date: string;
  day: string;
};
export const getDayAndDateCurrentMonth = (): DayAndDate[] => {
  const daysInMonth = dayjs().daysInMonth();
  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    const day = dayjs().date(i).format("ddd").toLowerCase();
    const date = dayjs().date(i).format("DD");
    days.push({ day: day, date: date });
  }
  return days;
};

export const getDate = (date = getCurrentDate()) => {
  return date.format("DD");
};

/**
 * Function to get a formatted time string from a Date object
 * @param date - The Date object to format
 * @param monthFormate - The month formate
 * @returns A string representing the date time in "DD/MM/YYYY-hh:mm A" format
 */
export const getMonth = (
  monthFormate: "M" | "MM" | "MMM" | "MMMM" = "MMMM",
  date = getCurrentDate()
) => {
  return date.format(monthFormate);
};

/**
 * Function to get a formatted time string from a Date object
 * @param date - The Date object to format
 * @param yearFormate - The month formate
 * @returns A string representing the date time in "DD/MM/YYYY-hh:mm A" format
 */
export const getYear = (
  yearFormate: "YY" | "YYYY" = "YYYY",
  date = getCurrentDate()
) => {
  return date.format(yearFormate);
};
