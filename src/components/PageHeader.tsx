interface PageHeaderProps {
  eyebrow?: string
  title: string
  description?: string
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="-mt-[116px] bg-brand pt-[116px] pb-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {eyebrow && (
          <p className="text-[10px] uppercase tracking-[0.16em] text-accent mb-4">{eyebrow}</p>
        )}
        <h1 className="font-heading text-5xl font-normal text-white leading-tight">{title}</h1>
        {description && (
          <p className="text-warm-300 mt-4 max-w-xl text-base leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  )
}
