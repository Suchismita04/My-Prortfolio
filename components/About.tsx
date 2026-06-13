import aboutData from "@/data/about.json";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-50 py-24 px-[clamp(1.5rem,8%,8rem)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold uppercase tracking-wider">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
            Building Modern Web Experiences
          </h2>

          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Full Stack Developer
              </h3>

              <a
                href="/Suchismita Chatterjee_CV.pdf"
                download
                className="inline-flex items-center justify-center px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg
    shadow-[0_4px_14px_rgba(79,70,229,0.3)]
    hover:shadow-[0_6px_20px_rgba(79,70,229,0.4)]
    hover:-translate-y-0.5 transition-all duration-300"
              >
                Download CV
              </a>
            </div>

            <p className="text-slate-600 leading-8 mb-5">
              {aboutData.description1}
            </p>

            <p className="text-slate-600 leading-8">{aboutData.description2}</p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-5 mt-10">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h4 className="text-3xl font-bold text-indigo-600">6+</h4>
                <p className="text-slate-600 mt-1">Months Experience</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                <h4 className="text-3xl font-bold text-indigo-600">7+</h4>
                <p className="text-slate-600 mt-1">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Right Side - Skills */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Technical Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {aboutData.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    px-4 py-2
                    bg-indigo-50
                    text-indigo-700
                    border border-indigo-100
                    rounded-full
                    text-sm
                    font-medium
                    hover:bg-indigo-600
                    hover:text-white
                    transition-all duration-300
                    cursor-default
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* <div className="mt-8 pt-6 border-t border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3">
                Current Focus
              </h4>

              <p className="text-slate-600 leading-7">
                Developing scalable web applications using React.js, Next.js,
                Node.js, PostgreSQL, and modern frontend technologies while
                expanding expertise in cybersecurity and cloud-based solutions.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
