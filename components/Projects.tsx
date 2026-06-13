import projectsData from "@/data/projects.json";

interface Project {
  icon: string;
  iconColor: string;
  bgFrom: string;
  bgTo: string;
  tags: string[];
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = projectsData;

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden flex flex-col
        hover:-translate-y-1.5 hover:shadow-xl hover:border-indigo-600 transition-all duration-300"
    >
      {/* Coloured icon header */}
      <div
        className="w-full h-[170px] flex items-center justify-center text-5xl"
        style={{
          background: `linear-gradient(135deg, ${project.bgFrom}, ${project.bgTo})`,
        }}
      >
        <i className={project.icon} style={{ color: project.iconColor }} />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-indigo-100 text-indigo-600 rounded-full text-[0.75rem] font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-bold text-[1.05rem] mb-2">{project.title}</h3>
        <p className="text-gray-500 text-[0.9rem] leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          <a
            href={project.githubUrl}
            className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-indigo-600
              hover:gap-2.5 transition-all duration-200"
          >
            <i className="fa-brands fa-github text-[0.85rem]" />
            Source
          </a>
          {/* <a
            href={project.liveUrl}
            className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-indigo-600
              hover:gap-2.5 transition-all duration-200"
          >
            <i className="fa-solid fa-arrow-up-right-from-square text-[0.85rem]" />
            Live Demo
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white px-[clamp(1.25rem,8%,7.5rem)] py-[90px]"
    >
      <h2 className="text-center text-[clamp(1.8rem,4vw,2.5rem)] font-bold mb-12 relative after:content-[''] after:block after:w-[50px] after:h-[4px] after:bg-indigo-600 after:mx-auto after:mt-2.5 after:rounded">
       Personal Project Showcase
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
