import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Kontakt' }

const team = [
  {
    name: 'Hermann von Rotenhan',
    role: 'Eigentümer und Veranstalter',
    email: 'h.vonrotenhan@schlosseyrichshof.de',
    src: 'https://static.wixstatic.com/media/fa0fbb_f815b27dd05e4b099caa776767875346~mv2.jpg/v1/crop/x_209,y_0,w_1983,h_1600/fill/w_600,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/NK_23_2260.jpg',
  },
  {
    name: 'Waltraud Boseckert',
    role: 'Hochzeiten und Feiern',
    src: 'https://static.wixstatic.com/media/690192_d5861569ada94c42bbba54db1833bdb8~mv2.jpg/v1/crop/x_472,y_0,w_4529,h_3648/fill/w_600,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ey_Team_22-321.jpg',
  },
  {
    name: 'Aino Bender',
    role: 'Winterszeit',
    src: 'https://static.wixstatic.com/media/fa0fbb_affbf58b5ab9441ba71b4a6ccacd1f31~mv2.jpg/v1/crop/x_11,y_0,w_829,h_669/fill/w_600,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/231216_A_Bender_Portr%C3%A4t_Schlossmauer.jpg',
  },
  {
    name: 'Angela von Willich',
    role: 'Gartenfest',
    src: 'https://static.wixstatic.com/media/fa0fbb_1f2ca07a50284ca0b43db19773a02f58~mv2.jpg/v1/crop/x_55,y_0,w_1479,h_1193/fill/w_600,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Angela%20von%20Willich_HP.jpg',
  },
  {
    name: 'Nadja Ortlauf',
    role: 'Marketing',
    src: 'https://static.wixstatic.com/media/690192_886c855f093c45c28f99242f3861f06f~mv2.jpg/v1/crop/x_118,y_0,w_1132,h_912/fill/w_600,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20220502-WA0012.jpg',
  },
  {
    name: 'Christiane Gründel',
    role: 'Ferienwohnungen',
    src: 'https://static.wixstatic.com/media/690192_5adf4810f5074fba9166f92627c2f2d7~mv2.jpg/v1/crop/x_603,y_180,w_4090,h_3309/fill/w_600,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Team_ctd-501.jpg',
  },
]

export default function KontaktPage() {
  return (
    <>
      {/* Header */}
      <section
        className="-mt-[116px] pt-[116px] pb-14 px-4 text-center"
        style={{ backgroundColor: '#4C4440' }}
      >
        <div className="pt-10">
          <p className="text-[10px] uppercase tracking-[0.16em] mb-4" style={{ color: '#EF5A2A' }}>
            Schloss Eyrichshof
          </p>
          <h1 className="font-heading text-5xl font-normal text-warm-50 mb-4">
            Ihr Team
          </h1>
          <p className="text-warm-300 text-base max-w-lg mx-auto leading-relaxed">
            Sechs Menschen, ein Schloss — leidenschaftlich, persönlich und immer für Sie da.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {team.map((person) => (
            <div key={person.name} className="group">
              {/* Photo */}
              <div className="relative overflow-hidden mb-5" style={{ aspectRatio: '5/4' }}>
                <Image
                  src={person.src}
                  alt={person.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Subtle bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="border-l-2 border-accent pl-4">
                <p className="font-heading text-xl text-brand leading-snug">
                  {person.name}
                </p>
                <p className="text-xs uppercase tracking-widest text-warm-500 mt-1">
                  {person.role}
                </p>
                {person.email && (
                  <a
                    href={`mailto:${person.email}`}
                    className="inline-block mt-2 text-xs text-accent hover:text-accent-hover transition-colors"
                  >
                    {person.email}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-warm-100 py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-warm-500 mb-2">Adresse</p>
            <p className="font-heading text-lg text-brand mb-1">Schloss Eyrichshof</p>
            <p className="text-warm-600 text-sm leading-relaxed">
              96126 Eyrichshof<br />Unterfranken, Bayern
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-warm-500 mb-2">Schreiben Sie uns</p>
            <Link
              href="/kontakt/formular"
              className="inline-block mt-1 px-6 py-2 border border-brand text-sm uppercase tracking-widest text-brand hover:bg-brand hover:text-warm-50 transition-colors"
            >
              Kontaktformular
            </Link>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-warm-500 mb-2">Anfahrt</p>
            <Link
              href="/kontakt/anfahrt"
              className="inline-block mt-1 px-6 py-2 border border-brand text-sm uppercase tracking-widest text-brand hover:bg-brand hover:text-warm-50 transition-colors"
            >
              Wegbeschreibung
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
