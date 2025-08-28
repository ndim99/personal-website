import { cn } from "../lib/utils";

export default function CardWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn('backdrop-blur-lg shadow-card border border-primary bg-linear-(--card-gradient) rounded-xl p-4 flex flex-col gap-3 text-white', className)}>{children}</div>
  )
}
