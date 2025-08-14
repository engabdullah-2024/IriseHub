import { cn } from "@/lib/utils"

export function Section({
  title,
  subtitle,
  className,
  children,
}: {
  title: string
  subtitle?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section className={cn("py-14 md:py-20", className)}>
      <div className="container">
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
          {subtitle && (
            <p className="mt-3 text-muted-foreground leading-relaxed">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
