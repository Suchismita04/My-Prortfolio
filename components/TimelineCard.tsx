interface TimelineCardProps {
  icon: string;
  date: string;
  title: string;
  subtitle: string;
  alt?: boolean;
}

export default function TimelineCard({
  icon,
  date,
  title,
  subtitle,

  alt = false,
}: TimelineCardProps) {
  return (
    <div
      className={`border border-gray-200 rounded-xl p-5 shadow-sm w-full max-w-[340px]
        hover:-translate-y-1 hover:shadow-md hover:border-indigo-100 transition-all duration-300
        ${alt ? "bg-gray-50" : "bg-white"}`}
    >
      {/* Icon circle */}
      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
        <i className={`${icon} text-indigo-600 text-[0.95rem]`} />
      </div>

      {/* Date badge */}
      <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 text-[0.8rem] font-semibold rounded-full mb-2">
        {date}
      </span>

      <h3 className="font-bold text-[1.05rem] mb-1">{title}</h3>
      <h4 className="text-[0.9rem] text-gray-500 font-medium mb-2">{subtitle}</h4>
      
    </div>
  );
}
