interface SkillBoxProps {
  title: string;
  description: string;
}
export default function SkillBox({ title, description }: SkillBoxProps) {
  return (
    <div className="bg-primary-bg p-4 rounded-lg shadow flex flex-col gap-2">
      <h3 className="text-lg font-semibold text-blue-300">{title}</h3>
      <p className="text-base text-gray-300">{description}</p>
    </div>
  );
}
