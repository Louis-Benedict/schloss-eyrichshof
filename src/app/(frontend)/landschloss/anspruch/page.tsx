import Image from 'next/image'
import type { Metadata } from 'next'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import LandschlossNav from '@/components/LandschlossNav'

export const metadata: Metadata = { title: 'Anspruch' }

export default function AnspruchPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[480px] lg:h-[560px] -mt-[116px]">
        <Image
          src="/images/hero-anspruch.jpg"
          alt="Schloss Eyrichshof"
          fill
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
          className="object-cover object-center"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/25 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <span className="inline-block text-[10px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-4">
            Schloss Eyrichshof
          </span>
          <h1 className="font-heading text-5xl lg:text-6xl font-normal text-white leading-tight">
            Anspruch
          </h1>
        </div>
      </div>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-5 text-warm-600 leading-relaxed">
        <p>
          Schloss Eyrichshof ist seit dem 12. Jahrhundert ein privates Haus der Familie von Rotenhan,
          gleichzeitig immer der Sitz eines produzierenden Gutsbetriebes mit land- und
          forstwirtschaftlicher Prägung.
        </p>
        <p>
          Diese Tradition wird fortgeführt, wobei Hausherr Hermann Freiherr von Rotenhan vor vielen
          Jahren sein Haus für Gäste öffnete.
        </p>
        <p>
          Nicht nur für Großveranstaltungen kommen die Menschen oft von weit her um diesen
          traditionsreichen Ort kennenzulernen: sie feiern hier, machen Urlaub in unseren modernen
          Ferienwohnungen und erfreuen sich an der schönen Natur und der Umgebung.
        </p>
        <p>
          Wir sind überzeugt, dass inspirierende Momente — die kleinen und großen, an die sich
          unsere Gäste gerne erinnern — mit jedem Mal etwas Freude und Zuversicht in die Welt
          bringen — das ist unser Anspruch.
        </p>
      </section>

      <LandschlossNav currentHref="/landschloss/anspruch" />
    </>
  )
}
