import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const projects = [
  { emoji: "🎨", title: "Crispy Canvas", delay: 0.05, link: "/project/crispy" },
  { emoji: "🐾", title: "Pet Partner Portal", delay: 0.15, link: "/project/pet" },
  { emoji: "🌌", title: "Project Atlas", delay: 0.25, link: "/project/atlas" },
  { emoji: "⚡", title: "AI Website Builder", delay: 0.35, link: "/project/ai" },
];

const ProjectShowcase = () => {
  return (
    <div className="mt-20 px-6 md:px-12">
      <h2 className="text-3xl font-bold mb-8">Your Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <Link to={p.link} key={i}>
            <ProjectCard emoji={p.emoji} title={p.title} delay={p.delay} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
