import { getCurrentDate, getDateTimeString } from "@/lib/dateAndTime";
import { db } from "@/db";

export async function setStartTIme() {
  const currentDate = getCurrentDate();
  const dateTImeString = getDateTimeString(currentDate).split("-");

  const isExist = await db.startTime.count({
    where: { date: dateTImeString[0] },
  });

  if (isExist) return;
  await db.startTime.create({
    data: {
      date: dateTImeString[0],
      time: dateTImeString[1],
    },
  });
}
