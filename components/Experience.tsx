import ExperienceTimelineCard from "./ExperienceTimelineCard";
import TimelineCard from "./TimelineCard";
import experienceData from "@/data/experience.json";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-white px-[clamp(1.25rem,8%,7.5rem)] py-[90px]"
    >
      <h2 className="text-center text-[clamp(1.8rem,4vw,2.5rem)] font-bold mb-12 relative after:content-[''] after:block after:w-[50px] after:h-[4px] after:bg-indigo-600 after:mx-auto after:mt-2.5 after:rounded">
        Work Experience
      </h2>

      <div className="relative max-w-[820px] mx-auto">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2" />
        <div className="md:hidden absolute left-5 top-0 bottom-0 w-[2px] bg-gray-200" />

        <div className="flex flex-col gap-9">
          {experienceData.map((item, i) => (
            <div key={item.title} className="relative flex">
              <div className="hidden md:block absolute left-1/2 top-5 w-4 h-4 rounded-full bg-white border-[3px] border-indigo-600 -translate-x-1/2 z-10" />
              <div className="md:hidden absolute left-[13px] top-5 w-4 h-4 rounded-full bg-white border-[3px] border-indigo-600 z-10" />

              <div
                className={`w-full md:w-1/2 pl-12 md:pl-0
                  ${i % 2 === 0 ? "md:pr-10 md:flex md:justify-end" : "md:pl-10 md:ml-auto"}`}
              >
                <ExperienceTimelineCard {...item}  />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
