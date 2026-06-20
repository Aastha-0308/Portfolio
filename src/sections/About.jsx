import { GraduationCap, Brain, Code, MapPin, Coffee } from "lucide-react";

function About() {
  return (
    <section id="about" className="py-8 px-8 bg-cyan-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 font-comfortaa">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="rounded-3xl p-6">
              <ul className="space-y-6 text-lg font-semibold font-quicksand">
                <li className="flex items-center gap-3 text-pink-400">
                  <GraduationCap className="w-5 h-5" />
                  Student
                </li>
                <li className="flex items-center gap-3 text-pink-400">
                  <Brain className="w-5 h-5" />
                  AI/ML
                </li>
                <li className="flex items-center gap-3 text-pink-400">
                  <Code className="w-5 h-5" />
                  Developer
                </li>
                <li className="flex items-center gap-3 text-pink-400">
                  <MapPin className="w-5 h-5" />
                  India
                </li>
                <li className="flex items-center gap-3 text-pink-400">
                  <Coffee className="w-5 h-5" />
                  Last-Minute Motivation
                </li>
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 max-w-lg">
            <p className="my-4 text-base md:text-md text-zinc-600 font-comfortaa">
              I'm a B.Tech CSE (AI/ML) student passionate about Artificial
              Intelligence, Machine Learning, and Full Stack Development.
            </p>
            <p className="my-4 text-base md:text-md text-zinc-600 font-comfortaa">
              I enjoy building projects, learning through hands-on experience,
              and exploring new technologies while continuously improving my
              skills as a developer.
            </p>
            <p className="my-4 text-base md:text-md text-zinc-600 font-comfortaa">
              Currently, I'm focused on strengthening my AI/ML foundations while
              continuing to develop modern, user-friendly web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
