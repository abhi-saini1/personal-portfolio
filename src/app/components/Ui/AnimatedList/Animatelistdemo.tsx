"use client";
 
import { cn } from "@/utils/cn";
import { AnimatedList } from "./AnimatedList";
 
interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  year: string;
}
 
let notifications = [
  {
    name: "PG Diploma in Computer Applications",
    description: "Panjab University",
    year: "2022-2023",
    icon: "👨🏻‍🎓",
    color: "#00C9A7",
  },
  {
    name: "Web Development Course",
    description: "Infowiz Sec-34 in Chd",
    year: "2021-2022",
    icon: "📜",
    color: "#FFB800",
  },
  {
    name: "Bachelor of Arts",
    description: "Panjab University",
    year: "2018-2021",
    icon: "👨🏻‍🎓",
    color: "#00C9A7",
  },
  
];
 
notifications = Array.from({ length: 1}, () => notifications).flat();
 
const Notification = ({ name, description, icon, color, year }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit xl:w-full lg:w-full md:w-full sm:w-full w-[290px] max-w-[400px] cursor-pointer overflow-hidden rounded-2xl py-2 px-2 ",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-sm">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="lg:text-[16px] md:text-[16px] sm:text-[14px] text-[12px] font-bold">{name}</span>
          </figcaption>
            <span className="lg:text-[12px] md:text-[12px] sm:text-[12px] text-[11px] text-gray-500 font-semibold">{year}</span>
          <p className="text-[12px] font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};
 
export function Animatelistdemo() {
  return (
    <div className="relative flex xl:h-[500px] lg:h-[500px] md:h-[400px] sm:h-[400px] h-[390px] w-full flex-col pt-4 pb-2 overflow-hidden rounded-lg">
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}