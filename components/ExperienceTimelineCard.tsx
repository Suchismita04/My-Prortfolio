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
    <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-200">
      
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-indigo-600 to-purple-600" />

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
            <i className={`${icon} text-lg`} />
          </div>

          <div>
            <p className="text-sm font-medium text-indigo-600">{date}</p>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          </div>
        </div>

        <span
          className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${
            badgeColors[jobType] || "bg-gray-100 text-gray-700"
          }`}
        >
          {jobType}
        </span>
      </div>

      {/* Company */}
      <div className="mb-4">
        <p className="font-medium text-gray-700">{subtitle}</p>
      </div>

      {/* Description */}
      <p className="leading-relaxed text-gray-600">
        {description}
      </p>

      
    </div>
  );
}