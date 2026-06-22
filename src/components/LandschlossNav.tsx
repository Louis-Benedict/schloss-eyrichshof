import Link from 'next/link'
import Image from 'next/image'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import { landschlossPages } from '@/data/landschloss'

export default function LandschlossNav({ currentHref }: { currentHref: string }) {
  const others = landschlossPages.filter((p) => p.href !== currentHref)

  return (
    <section className="border-t border-warm-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.22em] text-accent mb-8">Mehr über das Landschloss</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {others.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group relative overflow-hidden min-h-[220px] flex flex-col justify-end"
            >
              <Image
                src={page.image}
                alt={page.label}
                fill
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/40 to-brand/5" />
              <div className="relative z-10 p-6">
                <h3 className="font-heading text-2xl font-normal text-white mb-2 leading-tight">
                  {page.label}
                </h3>
                <span className="text-xs uppercase tracking-widest font-semibold text-accent group-hover:text-accent-hover transition-colors">
                  Mehr erfahren →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
