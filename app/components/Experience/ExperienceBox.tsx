import Link from "next/link";

interface ExperienceBoxProps {
  company: string;
  description: string;
  freelance?: boolean;
  link?: string;
  duration: string;
}

export default function ExperienceBox({
  company,
  description,
  freelance,
  link,
  duration,
}: ExperienceBoxProps) {
  const linkClass =
    "text-xl lg:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-purple-500 hover:via-pink-500 hover:to-red-500 transition duration-300";

  const boxClass =
    "2xl:p-6 lg:p-5 p-4 shadow-lg rounded-lg border border-[#333] bg-[#0f0f0f] flex flex-col gap-2";

  if (freelance) {
    return (
      <div className={`${boxClass} cursor-not-allowed`}>
        <div>
          <span className={linkClass}>{company}</span>
        </div>

        <p className="text-lg lg:text-xl font-semibold">
          Position: Front-End Developer (Freelance)
        </p>
        <p className="text-lg lg:text-xl font-semibold">Duration: {duration}</p>
        <p className="text-gray-200 text-base lg:text-lg font-normal">
          {description}
        </p>
      </div>
    );
  }

  return (
    <Link href={link as string} target="_blank" className={boxClass}>
      <div>
        <span className={linkClass}>{company}</span>
      </div>

      <p className="text-lg lg:text-xl font-semibold">
        Position: Front-End Engineer
      </p>
      <p className="text-lg lg:text-xl font-semibold">Duration: {duration}</p>
      <p className="text-gray-200 text-base lg:text-lg font-normal">
        {description}
      </p>
    </Link>
  );
}
