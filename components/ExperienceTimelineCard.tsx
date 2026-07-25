export default function ExperienceTimelineCard({
  icon,
  date,
  title,
  subtitle,
  jobType,
  description,
}: {
  icon: string;
  date: string;
  title: string;
  subtitle: string;
  jobType: string;
  description: string;
}) {
  const badgeColors: Record<string, string> = {
    "Full Time": "bg-green-100 text-green-700",
    Contract: "bg-blue-100 text-blue-700",
    Internship: "bg-yellow-100 text-yellow-700",
    Freelance: "bg-purple-100 text-purple-700",
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-4 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-200">
      
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-indigo-600 to-purple-600" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
            <i className={`${icon} text-base sm:text-lg`} />
          </div>

          <div>
            <p className="text-xs sm:text-sm font-medium text-indigo-600">{date}</p>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h3>
          </div>
        </div>

        <span
          className={`whitespace-nowrap rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold ${
            badgeColors[jobType] || "bg-gray-100 text-gray-700"
          }`}
        >
          {jobType}
        </span>
      </div>

      {/* Company */}
      <div className="mb-3 sm:mb-4">
        <p className="text-sm sm:base font-medium text-gray-700">{subtitle}</p>
      </div>

      {/* Description */}
      <p className="text-sm sm:base leading-relaxed text-gray-600">
        {description}
      </p>

      
    </div>
  );
}