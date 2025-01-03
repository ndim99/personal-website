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
    "cursor-pointer text-xl lg:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-purple-500 hover:via-pink-500 hover:to-red-500 transition duration-300";
  return (
    <div className="2xl:p-6 lg:p-5 p-4 shadow-lg rounded-lg border border-[#333] bg-[#0f0f0f] flex flex-col gap-2">
      {freelance ? (
        <div>
          <span className={linkClass}>{company}</span>
        </div>
      ) : (
        <Link href={link as string} target="_blank">
          <span className={linkClass}>{company}</span>
        </Link>
      )}
      <p className="text-lg lg:text-xl font-semibold">
        {freelance
          ? "Position: Front-End Developer (Freelance)"
          : "Position: Front-End Engineer"}
      </p>
      <p className="text-gray-300 text-base lg:text-lg font-normal">
        {description}
      </p>
    </div>
  );
}
