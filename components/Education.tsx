import TimelineCard from "./TimelineCard";
import educationData from "@/data/education.json";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-gray-50 px-[clamp(1.25rem,8%,7.5rem)] py-[90px]"
    >
      <h2 className="text-center text-[clamp(1.8rem,4vw,2.5rem)] font-bold mb-12 relative after:content-[''] after:block after:w-[50px] after:h-[4px] after:bg-indigo-600 after:mx-auto after:mt-2.5 after:rounded">
        Educational Journey
      </h2>

      {/* Timeline wrapper */}
      <div className="relative max-w-[820px] mx-auto">
        {/* Centre line — hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2" />

        {/* Left rule on mobile */}
        <div className="md:hidden absolute left-5 top-0 bottom-0 w-[2px] bg-gray-200" />

        <div className="flex flex-col gap-9">
          {educationData.map((item, i) => (
            <div key={item.title} className="relative flex">
              {/* Dot — desktop */}
              <div
                className={`hidden md:block absolute top-5 w-4 h-4 rounded-full bg-white border-[3px] border-indigo-600 z-10
                  ${i % 2 === 0 ? "left-1/2 -translate-x-1/2" : "left-1/2 -translate-x-1/2"}`}
              />

              {/* Dot — mobile */}
              <div className="md:hidden absolute left-[13px] top-5 w-4 h-4 rounded-full bg-white border-[3px] border-indigo-600 z-10" />

              {/* Card positioning */}
              <div
                className={`w-full md:w-1/2 pl-12 md:pl-0
                  ${i % 2 === 0 ? "md:pr-10 md:flex md:justify-end" : "md:pl-10 md:ml-auto"}`}
              >
                <TimelineCard {...item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
