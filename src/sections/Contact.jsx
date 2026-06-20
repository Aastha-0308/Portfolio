import github from "../assets/skills/github.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";

function Contact() {
  return (
    <section id="contact"className="py-8 px-8 bg-blue-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold font-comfortaa">
          Contact Me
        </h2>

        <p className="mt-1 text-zinc-500">
          Have a project, opportunity, or just want to say hello?
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          

          <a
            href="https://github.com/Aastha-0308"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-pink-300 text-white font-medium hover:scale-105 hover:bg-pink-400 transition-all duration-300"
          >
            <img src={github} alt="GitHub" className="w-5 h-5" />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/aastha-dubey-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-pink-300 text-white font-medium hover:scale-105 hover:bg-pink-400 transition-all duration-300"
          >
            <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="mailto:dubey.astha03@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-pink-300 text-white font-medium hover:scale-105 hover:bg-pink-400 transition-all duration-300"
          >
            <img src={mail} alt="Email" className="w-5 h-5" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
export default Contact;