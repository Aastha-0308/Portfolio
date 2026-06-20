import hero from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="flex pt-24 bg-blue-100 pb-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="left flex-1 max-w-xl px-10 py-4 mx-2">
          <p className="uppercase tracking-[0.3em] text-sm text-pink-400">
            Hello, I'm
          </p>
          <h1 className="font-monsieur text-[5rem] leading-none -mt-2">Aastha</h1>

          <p className="mt-1 text-base md:text-xl font-comfortaa text-red-400">
            AI/ML Student & Developer
          </p>

          <p className="mt-2 text-base md:text-xl font-comfortaa text-red-400">
            Building projects and exploring AI, ML and Full Stack Development.
          </p>
        </div>

        <div className="right flex-1 flex justify-center">
          <img
            src={hero}
            alt="Hero"
            className="w-64 h-64 md:w-[350px] md:h-[350px] object-cover rounded-full border-4 border-pink-200"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
