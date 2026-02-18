"use client";
import { useEffect, useState } from "react";
import DashboardSection from "./DashboardSection";

// Starting with Sunday for whatever reason...
const weekdays: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function InformationSection() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  const weekDay = weekdays[time.getDay()];

  const day = time.getDate().toString().padStart(2, "0");
  const month = months[time.getMonth()];
  const year = time.getFullYear();

  return (
    <DashboardSection>
      <div>
        <div className="flex flex-row gap-10 font-light items-center font-mono rounded-2xl w-fit p-2">
          <span className="text-6xl p-4 rounded-2xl">
            {hours}:{minutes}:{seconds}
          </span>
          <div className="flex flex-col gap-1.5 text-3xl text-gray-400">
            <span>{weekDay}</span>
            <span>
              {day} {month} {year}
            </span>
          </div>
        </div>
        {/*<GoogleCalendar />*/}
      </div>
    </DashboardSection>
  );
}
