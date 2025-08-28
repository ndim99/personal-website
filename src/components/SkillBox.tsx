import BulletList from "./BulletList";
import CardWrapper from "./CardWrapper";

export default function SkillBox({ title, description, skills }: { title: string, description: string, skills: string[] }) {
  return (
    <CardWrapper>
      <div className="flex flex-col gap-1">
        <p className="text-base font-bold">{title}</p>
        <p className="text-sm font-medium">{description}</p>
      </div>
      <BulletList items={skills} />
    </CardWrapper>
  )
}