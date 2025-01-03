import Link from "next/link";

interface ExperienceBoxProps {
  company: string;
  description: string;
  freelance?: boolean;
  link?: string;
}
export default function ExperienceBox({
  company,
  description,
  freelance,
  link,
}: ExperienceBoxProps) {
  const linkClass =
    "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-purple-500 hover:via-pink-500 hover:to-red-500 transition duration-300";
  return (
    <div className="p-6 shadow-lg rounded-lg border border-[#333] bg-[#0f0f0f] flex flex-col gap-2">
      <Link
        href={link as string}
        target="_blank"
        className={`text-xl sm:text-2xl font-extrabold ${linkClass}`}
      >
        {company}
      </Link>
      <p className="text-lg sm:text-xl font-semibold  mt-1">
        {freelance
          ? "Position: Front-End Developer (Freelance)"
          : "Position: Front-End Engineer"}
      </p>
      <p className="text-gray-400 text-base sm:text-lg font-normal">
        {description}
      </p>
    </div>
  );
}
