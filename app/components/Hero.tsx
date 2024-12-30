export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center text-center bg-gradient-to-r from-primary-bg via-secondary-bg to-primary-bg text-gray-100 relative overflow-hidden px-6 sm:px-12 lg:px-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/coding.png')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col sm:gap-8 gap-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-400">
          Hello, I{"'"}m Nikola
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          As a Front-End Engineer, I specialize in building high-performance,
          scalable, and highly functional web applications. I focus on
          delivering seamless user experiences through intuitive design,
          efficient code, and a strong emphasis on performance optimization. My
          work ensures robust functionality, making applications both reliable
          and easy to use. I thrive in collaborative environments where creative
          solutions, quality, and innovative approaches drive the success of
          every project.
        </p>
      </div>
    </section>
  );
}
