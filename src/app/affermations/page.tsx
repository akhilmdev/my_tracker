import { getAffermation } from "@/db/queries/affermations";
import { setStartTIme } from "@/db/queries/startTime";
import Link from "next/link";
import { notFound } from "next/navigation";

interface AffermationsPropsInterface {}

export default async function Affermations({}: AffermationsPropsInterface) {
  const affermation = await getAffermation();
  if (!affermation) {
    notFound();
  }

  await setStartTIme();

  return (
  <div className="w-full p-8 md:p-14 lg:p-16 justify-center h-screen flex flex-col">
      <div className="w-auto m-auto">
        <p className="max-w-3xl text-center text-4xl leading-12 font-affermations">
          {affermation.text}
        </p>
      </div>
      <Link
        href={"/dashboard"}
        className="flex justify-center items-center text-center bg-button rounded-md h-12"
      >
        <span className="text-text font-bold tracking-widest">
          {"Let's play"}
        </span>
      </Link>
    </div>
  );
}
