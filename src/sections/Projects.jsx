import ProjectCard from "../components/ProjectCard";
import { featuredProjects, aiProjects } from "../data/projects";

function Projects() {
  return (
    <section className="py-8 px-8 bg-pink-50">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center font-comfortaa">
          Projects
        </h2>

        <p className="text-center text-zinc-500 mt-1">
          Things I've built while learning and experimenting.
        </p>

        <h3 className="mt-16 mb-8 text-2xl font-bold">
          Featured Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}

        </div>

        <h3 className="mt-16 mb-8 text-2xl font-bold">
          AI Experiments
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {aiProjects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;