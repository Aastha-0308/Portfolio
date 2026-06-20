function ProjectCard({ title, description, tech, image, github, demo }) {
  return (
    <div className="bg-blue-50 rounded-3xl overflow-hidden shadow-lg border border-pink-100">
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      <div className="p-5">
        <h3 className="text-xl font-bold font-comfortaa">{title}</h3>

        <p className="mt-3 text-zinc-600 font-quicksand">{description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((item) => (
            <span
              key={item}
              className="bg-pink-100 text-pink-500 px-3 py-1 rounded-full text-xs"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-5 justify-between">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-pink-100 text-pink-500 text-xs"
          >
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-pink-400 text-white text-xs"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
