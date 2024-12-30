import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="sm:py-20 py-12 bg-secondary-bg">
      <div className="container mx-auto px-6 text-center flex flex-col gap-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-400">
          Contact
        </h2>
        <p className="text-gray-300 text-base font-normal">
          Feel free to reach out via Gmail, LinkedIn, or GitHub:
        </p>
        <div className="flex justify-center items-center gap-6">
          <Link
            href="mailto:nikola.dimovski666@gmail.com"
            target="_blank"
            className="text-blue-400 hover:text-blue-500 flex items-center text-lg font-semibold"
          >
            Gmail
          </Link>
          <Link
            href="https://www.linkedin.com/in/ndim19/"
            target="_blank"
            className="text-blue-400 hover:text-blue-500 flex items-center text-lg font-semibold"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/ndim19"
            target="_blank"
            className="text-blue-400 hover:text-blue-500 flex items-center text-lg font-semibold"
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
