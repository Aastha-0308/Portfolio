import c from "../assets/skills/c.svg";
import cpp from "../assets/skills/cplusplus.svg";
import java from "../assets/skills/java.svg";
import python from "../assets/skills/python.svg";
import javascript from "../assets/skills/javascript.svg";

import html from "../assets/skills/html5.svg";
import css from "../assets/skills/css3.svg";
import react from "../assets/skills/react.svg";
import tailwind from "../assets/skills/tailwindcss.svg";

import node from "../assets/skills/nodejs.svg";
import express from "../assets/skills/express.svg";
import mongodb from "../assets/skills/mongodb.svg";

import git from "../assets/skills/git.svg";
import github from "../assets/skills/github.svg";

const skills = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node.js",
    icon: node,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
];

function Skills() {
  return (
    <section id="skills" className="py-8 px-8 bg-cyan-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center font-comfortaa">
          Skills
        </h2>

        <p className="text-center text-zinc-500 mt-1">
          The tools I use to build things.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              title={skill.name}
              className="w-28 h-28 rounded-3xl flex items-center justify-center cursor-pointer hover:-translate-y-1 hover:scale-105 hover:drop-shadow-lg hover:rotate-3 transition-all duration-300"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
