interface ExperienceBoxProps {
  company: string;
  description: string;
}
export default function ExperienceBox({
  company,
  description,
}: ExperienceBoxProps) {
  return (
    <div className="bg-primary-bg p-6 shadow-lg rounded-lg">
      <h3 className="text-xl sm:text-2xl font-extrabold text-blue-300 mb-3">
        {company}
      </h3>
      <p className="text-gray-300 text-lg sm:text-xl font-semibold mb-2">
        Position: Front-End Engineer
      </p>
      <p className="text-gray-400 text-base sm:text-lg font-normal">
        {description}
      </p>
    </div>
  );
}
