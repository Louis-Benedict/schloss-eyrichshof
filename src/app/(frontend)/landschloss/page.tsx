import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import { landschlossPages } from '@/data/landschloss'

export const metadata: Metadata = { title: 'Das Landschloss' }

export default function LandschlossPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[520px] lg:h-[600px] -mt-[116px]">
        <Image
          src="/images/schloss-exterior.jpg"
          alt="Schloss Eyrichshof"
          fill
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          className="object-cover object-center"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/85 via-brand/30 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <span className="inline-block text-[11px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-4">
            Familiensitz seit dem 14. Jahrhundert
          </span>
          <h1 className="font-heading text-5xl lg:text-6xl font-normal text-white leading-tight">
            Das Landschloss
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="border-b border-warm-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-20 items-start">
            <div className="flex flex-col items-center gap-3 lg:pt-1">
              <Image
                src="/images/wappen.png"
                alt="Wappen derer von Rotenhan"
                width={48}
                height={62}
                className="opacity-70"
              />
              <p className="text-[11px] uppercase tracking-[0.18em] text-warm-400 text-center leading-relaxed">
                von<br />Rotenhan
              </p>
            </div>
            <div className="space-y-4 text-warm-600 leading-relaxed text-base max-w-2xl">
              <p>
                Eyrichshof ist ein Landschloss in Familienbesitz im Herzen von Franken. Schon seit
                mehr als 700 Jahren empfängt man hier gerne Gäste — heute führt Hermann Freiherr von
                Rotenhan diese Tradition mit seinem Team zeitgemäß fort.
              </p>
              <p>
                Das Schloss verbindet Jahrhunderte alter Geschichte mit der Lebendigkeit
                zeitgenössischer Kultur: als Veranstaltungsort, als Ort der Begegnung und als
                stiller Rückzugsort inmitten der fränkischen Hügellandschaft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subpage grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {landschlossPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group relative overflow-hidden min-h-[340px] lg:min-h-[400px] flex flex-col justify-end"
            >
              <Image
                src={page.image}
                alt={page.label}
                fill
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/40 to-brand/5 transition-opacity duration-300 group-hover:from-brand/95" />
              <div className="relative z-10 p-8 lg:p-10">
                <h2 className="font-heading text-3xl lg:text-4xl font-normal text-white mb-3 leading-tight">
                  {page.label}
                </h2>
                <p className="text-warm-100 text-sm leading-relaxed mb-5 max-w-sm">
                  {page.description}
                </p>
                <span className="text-xs uppercase tracking-widest font-semibold text-accent group-hover:text-accent-hover transition-colors">
                  Mehr erfahren →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
