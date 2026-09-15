import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { BLUR_PLACEHOLDER } from '@/lib/image'
import SchlossNav from '@/components/SchlossNav'

export const metadata: Metadata = { title: 'Geschichte' }

const CHRONIK: Array<{ jahr: string; text: string }> = [
  {
    jahr: 'um 1200',
    text: 'In Iringerstorff steht ein Gehöft, das zur nahen Burg Rotenhan auf dem Hügel gehört, der Ursprung des heutigen Schlosses.',
  },
  {
    jahr: '1190',
    text: 'Erste Erwähnung der Stammburg Rotenhan. Ihre Ruine befindet sich, ebenso wie die Ruine Raueneck, bis heute im Besitz der Familie.',
  },
  {
    jahr: '1330',
    text: 'Erste urkundliche Erwähnung des Sitzes Eyrichshof.',
  },
  {
    jahr: '1686',
    text: 'Bau der Schlosskirche Sankt Bartholomäus, die den Schlosshof nach Osten abschließt.',
  },
  {
    jahr: '1690',
    text: 'Die Orangerie entsteht, ein barockes Haus zum Feiern.',
  },
  {
    jahr: '1735',
    text: 'Der imposante Nordflügel wird errichtet, das Ensemble erhält seine heutige Gestalt.',
  },
  {
    jahr: '19. Jh.',
    text: 'Der Park wird im englischen Stil angelegt.',
  },
  {
    jahr: 'ab 1970',
    text: 'Immer wieder Dreharbeiten für Spielfilme, zuletzt die Netflix-Produktion „The Empress“ (2021).',
  },
  {
    jahr: '2001',
    text: 'Hermann Freiherr von Rotenhan übernimmt die Verantwortung für das Gut.',
  },
  {
    jahr: 'seit 2004',
    text: 'Großveranstaltungen wie Gartenfest, Winterszeit und Rösler Open Air sowie Hochzeitsfeiern.',
  },
  {
    jahr: 'Heute',
    text: 'Feste, Konzerte, Hochzeiten und Ferienwohnungen, zugleich ein aktiver Gutsbetrieb.',
  },
]

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
          <span className="inline-block text-[11px] uppercase tracking-[0.16em] bg-accent text-white px-2.5 py-1 font-medium mb-4">
            Schloss Eyrichshof
          </span>
          <h1 className="font-heading text-5xl lg:text-6xl font-normal text-white leading-tight">
            Geschichte
          </h1>
          <p className="mt-3 text-lg text-warm-100 font-normal leading-snug">
            „Unseren Gästen inspirierende Momente bieten. Seit 1330 gute Tradition.“
          </p>
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
            <div className="pt-4">
              <Link
                href="/schloss"
                className="text-xs uppercase tracking-widest font-semibold text-accent hover:text-accent-hover transition-colors"
              >
                ← Zurück zum Schloss
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
            <p className="text-[11px] uppercase tracking-[0.18em] text-warm-500 mt-4 text-center">
              Wappen derer von Rotenhan
            </p>
          </div>

        </div>
      </section>

      {/* Chronik */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] tracking-[0.3em] uppercase text-accent">Sieben Jahrhunderte</p>
          <h2 className="mt-6 max-w-3xl font-heading text-4xl sm:text-5xl italic font-normal text-brand leading-tight">
            Ein Haus mit viel Geschichte
          </h2>

          <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.1fr] items-start">
            <div className="flex flex-col items-center lg:items-start lg:sticky lg:top-32">
              <div className="relative w-full h-[420px] lg:h-[480px]">
                <Image
                  src="/images/hero-schloss.jpg"
                  alt="Schloss Eyrichshof, historische Ansicht"
                  fill
                  className="object-cover contrast-[0.95] saturate-[0.6] sepia-[0.25]"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>

            <ol className="space-y-0">
              {CHRONIK.map((eintrag) => (
                <li key={eintrag.jahr} className="list-none">
                  <div className="h-px bg-warm-200" />
                  <div className="grid grid-cols-[5.5rem_1fr] gap-6 py-6">
                    <span className="font-heading text-2xl text-accent">{eintrag.jahr}</span>
                    <p className="text-sm leading-relaxed text-warm-600">{eintrag.text}</p>
                  </div>
                </li>
              ))}
              <div className="h-px bg-warm-200" />
            </ol>
          </div>
        </div>
      </section>

      {/* Buch: Steinernes Erbe */}
      <section className="border-t border-warm-200 py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-20 items-center">

            {/* Book cover */}
            <div className="relative mx-auto lg:mx-0 w-48 lg:w-full" style={{ aspectRatio: '3/4' }}>
              <Image
                src="/images/buch-steinernes-erbe.png"
                alt="Steinernes Erbe — von Hermann von Rotenhan"
                fill
                className="object-contain drop-shadow-xl"
                sizes="(max-width: 1024px) 192px, 240px"
              />
            </div>

            {/* Text */}
            <div className="space-y-5 text-warm-600 leading-relaxed text-base">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Das Buch zum Schloss</p>
              <h2 className="font-heading text-3xl font-normal text-brand">Steinernes Erbe</h2>
              <p>
                Den ganzen Großteil seines Lebens hat Hermann Freiherr von Rotenhan auf Schloss
                Eyrichshof verbracht — und in diesem Sachbuch festgehalten, was es bedeutet, ein
                solches Erbe zu tragen. Auf sehr persönliche Weise beschreibt er seine Beziehung zu
                dem Schloss, das seit Jahrhunderten im Besitz seiner Familie ist: die schönen Seiten
                ebenso wie die nicht immer leichten Momente.
              </p>
              <p>
                Das Buch gibt Einblicke in die Lebensstationen eines fränkischen Adeligen und in das
                heutige Landleben — in Zeiten von Waldsterben und Klimawandel, von gesellschaftlichem
                Wandel und der Frage, wie ein lebendiges Erbe in die Zukunft geführt werden kann.
              </p>
              <p>
                Mehr zur Baugeschichte des Ensembles und der Familienhistorie finden Sie ebenfalls
                in diesem Buch.
              </p>
            </div>

          </div>
        </div>
      </section>

      <SchlossNav currentHref="/schloss/geschichte" />
    </>
  )
}
