import Icon, { type IconName } from "./Icon";

export default function Title({ title, icon }: { title: string, icon: string }) {
  return (
    <div className="flex items-center gap-2 text-white">
      <Icon name={icon as IconName} className="size-7" />
      <h1 className="text-2xl font-semibold">{title}</h1>
    </div>
  )
}