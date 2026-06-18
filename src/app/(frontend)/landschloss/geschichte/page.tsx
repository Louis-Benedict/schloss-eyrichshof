import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { BLUR_PLACEHOLDER } from '@/lib/image'

export const metadata: Metadata = { title: 'Geschichte' }

export default function GeschichtePage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[480px] lg:h-[560px] -mt-[116px]">
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
        <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/25 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <span className="inline-block text-[10px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-4">
            Landschloss Eyrichshof
          </span>
          <h1 className="font-heading text-5xl lg:text-6xl font-normal text-white leading-tight">
            Geschichte
          </h1>
        </div>
      </div>

      {/* Content + coat of arms */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12 lg:gap-20 items-start">

          {/* Text */}
          <div className="space-y-6 text-warm-600 leading-relaxed text-base">
            <p>
              Die Schlossgeschichte begann um 1200 in Iringerstorff. Hier stand ein Gehöft, das zu
              der auf einem nahen Hügel gelegenen Burg Rotenhan gehörte. Diese Burg, die Stammburg
              der Familie, wurde 1190 erstmals erwähnt. Die Ruine befindet sich auch heute noch,
              ebenso wie die Ruine Raueneck, im Besitz der Familie.
            </p>
            <p>
              Das Anwesen wurde im Laufe der Jahrhunderte immer wieder modernisiert und erweitert.
              So wurde beispielsweise 1686 die Schlosskirche Sankt Bartholomäus erbaut, 1690 folgte
              die Orangerie, ein barockes Schmuckstück, und 1735 der imposante Nordflügel. Der
              Schlosshof wird nach Osten durch die Schlosskirche und nach Süden durch die Orangerie
              umschlossen.
            </p>
            <p>
              Großzügig wirken die Dimensionen des Hauses und seiner Nebengebäude noch heute, weshalb
              das Schloss seit 1970 immer wieder als Filmkulisse dient. Zuletzt war Eyrichshof
              Drehort der großen Netflix-Produktion{' '}
              <em>The Empress</em> (2021).
            </p>
            <p>
              Hermann Freiherr von Rotenhan übernahm 2001 die Verantwortung für das Gut. Seit 2004
              weht mit ihm als Gastgeber von Hochzeitsfeiern sowie Veranstalter des Gartenfests, der
              Winterszeit und des Rösler Open Air frischer Wind durch das steinerne Erbe.
            </p>
            <p>
              Mehr zur Baugeschichte des Ensembles und der Familienhistorie finden Sie auch im
              Sachbuch{' '}
              <em>Steinernes Erbe</em> von Hermann von Rotenhan.
            </p>

            <div className="pt-4">
              <Link
                href="/landschloss"
                className="text-xs uppercase tracking-widest font-semibold text-accent hover:text-accent-hover transition-colors"
              >
                ← Zurück zum Landschloss
              </Link>
            </div>
          </div>

          {/* Coat of arms — sticky on desktop */}
          <div className="flex flex-col items-center lg:sticky lg:top-32">
            <div className="relative w-44 lg:w-full" style={{ aspectRatio: '3/4' }}>
              <Image
                src="/images/wappen.png"
                alt="Wappen derer von Rotenhan"
                fill
                className="object-contain drop-shadow-sm"
                sizes="(max-width: 1024px) 176px, 240px"
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-warm-500 mt-4 text-center">
              Wappen derer von Rotenhan
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
