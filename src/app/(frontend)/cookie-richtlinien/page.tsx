import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = { title: 'Cookie-Richtlinien' }

const browserLinks = [
  { label: 'Cookie-Einstellungen in Firefox', href: 'https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen' },
  { label: 'Cookie-Einstellungen im Internet Explorer', href: 'https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies' },
  { label: 'Cookie-Einstellungen in Google Chrome', href: 'https://support.google.com/chrome/answer/95647' },
  { label: 'Cookie-Einstellungen in Safari (OS X)', href: 'https://support.apple.com/de-de/guide/safari/sfri11471/mac' },
  { label: 'Cookie-Einstellungen in Safari (iOS)', href: 'https://support.apple.com/de-de/HT201265' },
  { label: 'Cookie-Einstellungen in Android', href: 'https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DAndroid' },
]

export default function CookieRichtlinienPage() {
  return (
    <>
      <PageHeader eyebrow="Schloss Eyrichshof" title="Cookie-Richtlinien" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">

          <div>
            <h2 className="font-heading text-xl font-normal text-brand mb-5 pb-3 border-b border-warm-200">
              1. Was ist ein Cookie?
            </h2>
            <p className="text-sm text-warm-600 leading-relaxed">
              Ein Cookie ist eine kleine Datei aus Buchstaben und Zahlen, die auf den Computer heruntergeladen wird, wenn Nutzer auf bestimmte Websites zugreifen. In der Regel ermöglichen es Cookies einer Website, den Computer eines Nutzers zu erkennen. Das Wichtigste, was man über die von uns platzierten Cookies wissen muss, ist, dass sie unsere Website etwas nutzerfreundlicher machen, z. B. durch die Speicherung von Website-Präferenzen und Spracheinstellungen.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-normal text-brand mb-5 pb-3 border-b border-warm-200">
              2. Warum verwenden wir Cookies?
            </h2>
            <p className="text-sm text-warm-600 leading-relaxed">
              Wir können Cookies und ähnliche Technologien für unterschiedliche Zwecke verwenden, beispielsweise:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-warm-600 leading-relaxed list-none">
              {[
                'aus Sicherheitsgründen und zum Schutz vor Betrug sowie um Cyber-Angriffe zu erkennen und zu verhindern;',
                'um ausgewählte Dienste zur Verfügung stellen zu können;',
                'um die Performance, den Betrieb und die Wirksamkeit unserer Dienste zu überwachen und zu analysieren;',
                'um das Nutzererlebnis zu verbessern.',
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-accent shrink-0">{['i)', 'ii)', 'iii)', 'iv)'][i]}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-normal text-brand mb-5 pb-3 border-b border-warm-200">
              3. Cookie-Übersicht
            </h2>
            <p className="text-sm text-warm-600 leading-relaxed mb-8">
              Die folgende Übersicht zeigt, welche Cookies und lokalen Speichereinträge auf dieser Website gesetzt werden.
            </p>

            {/* Category A */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">
                Technisch notwendig
              </p>
              <p className="text-sm text-warm-600 leading-relaxed mb-4">
                Diese Einträge sind für den Betrieb der Website erforderlich. Sie können in Ihrem Browser deaktiviert werden, allerdings kann dies die Funktionalität der Website beeinträchtigen.
              </p>

              {/* Table header */}
              <div className="hidden sm:grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-4 border-b border-warm-200 pb-2 mb-1">
                {['Name', 'Anbieter', 'Zweck', 'Speicherdauer'].map(h => (
                  <span key={h} className="text-[11px] uppercase tracking-widest text-warm-400 font-medium">{h}</span>
                ))}
              </div>

              {/* Row */}
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_1fr] gap-x-4 gap-y-1 py-3 border-b border-warm-100">
                <div>
                  <span className="sm:hidden text-[11px] uppercase tracking-widest text-warm-400 block mb-0.5">Name</span>
                  <code className="text-xs bg-warm-100 px-1.5 py-0.5 text-brand font-mono">cookie-consent</code>
                  <span className="block text-[10px] text-warm-400 mt-1">Lokaler Speicher</span>
                </div>
                <div>
                  <span className="sm:hidden text-[11px] uppercase tracking-widest text-warm-400 block mb-0.5">Anbieter</span>
                  <span className="text-sm text-warm-600">schlosseyrichshof.de</span>
                </div>
                <div>
                  <span className="sm:hidden text-[11px] uppercase tracking-widest text-warm-400 block mb-0.5">Zweck</span>
                  <span className="text-sm text-warm-600">Speichert, ob der Nutzer der Cookie-Verwendung zugestimmt oder sie abgelehnt hat.</span>
                </div>
                <div>
                  <span className="sm:hidden text-[11px] uppercase tracking-widest text-warm-400 block mb-0.5">Speicherdauer</span>
                  <span className="text-sm text-warm-600">Dauerhaft (bis Browser-Daten geleert werden)</span>
                </div>
              </div>
            </div>

            {/* Category B */}
            <div>
              <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">
                Drittanbieter-Dienste
              </p>
              <p className="text-sm text-warm-600 leading-relaxed mb-4">
                Auf der Anfahrtsseite wird eine interaktive Karte eingebunden. Dabei werden Kartenkacheln von OpenStreetMap-Servern geladen. Diese Anfragen übermitteln technisch bedingt Ihre IP-Adresse an die Server der OpenStreetMap Foundation, setzen jedoch selbst keine Cookies.
              </p>

              {/* Table header */}
              <div className="hidden sm:grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-4 border-b border-warm-200 pb-2 mb-1">
                {['Dienst', 'Anbieter', 'Zweck', 'Datenschutz'].map(h => (
                  <span key={h} className="text-[11px] uppercase tracking-widest text-warm-400 font-medium">{h}</span>
                ))}
              </div>

              {/* Row */}
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_1fr] gap-x-4 gap-y-1 py-3 border-b border-warm-100">
                <div>
                  <span className="sm:hidden text-[11px] uppercase tracking-widest text-warm-400 block mb-0.5">Dienst</span>
                  <span className="text-sm text-warm-600">OpenStreetMap (Leaflet)</span>
                </div>
                <div>
                  <span className="sm:hidden text-[11px] uppercase tracking-widest text-warm-400 block mb-0.5">Anbieter</span>
                  <span className="text-sm text-warm-600">OpenStreetMap Foundation, 132 Maney Hill Road, Sutton Coldfield, B72 1JU, UK</span>
                </div>
                <div>
                  <span className="sm:hidden text-[11px] uppercase tracking-widest text-warm-400 block mb-0.5">Zweck</span>
                  <span className="text-sm text-warm-600">Interaktive Karte auf der Anfahrtsseite — zeigt den Standort des Schlosses.</span>
                </div>
                <div>
                  <span className="sm:hidden text-[11px] uppercase tracking-widest text-warm-400 block mb-0.5">Datenschutz</span>
                  <a
                    href="https://wiki.osmfoundation.org/wiki/Privacy_Policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:text-accent-hover transition-colors"
                  >
                    OSM Datenschutzerklärung →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl font-normal text-brand mb-5 pb-3 border-b border-warm-200">
              4. Optionen
            </h2>
            <div className="space-y-4">
              <p className="text-sm text-warm-600 leading-relaxed">
                Um mehr über Cookies zu erfahren, u. a. wie man erkennt, welche Cookies gesetzt wurden und wie man sie verwaltet, löscht und blockiert, empfehlen wir einen Besuch auf{' '}
                <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover transition-colors">www.aboutcookies.org</a>
                {' '}oder{' '}
                <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover transition-colors">www.allaboutcookies.org</a>.
              </p>
              <p className="text-sm text-warm-600 leading-relaxed">
                Alternativ ist es auch möglich, dass der Browser Cookies grundsätzlich blockiert. Dazu müssen Nutzer die Cookie-Einstellungen im Browser entsprechend ändern. Diese Einstellungen befinden sich normalerweise im Menü des Browsers unter „Optionen" oder „Präferenzen". Das Löschen unserer Cookies oder die Deaktivierung zukünftiger Cookies oder Tracking-Technologien kann zur Folge haben, dass bestimmte Bereiche oder Funktionen unserer Dienste nicht mehr zur Verfügung stehen oder das Nutzererlebnis anderweitig beeinträchtigt wird.
              </p>
              <p className="text-sm font-semibold text-brand mt-4 mb-2">Die folgenden Links können nützlich sein:</p>
              <ul className="space-y-2">
                {browserLinks.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:text-accent-hover transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-warm-600 leading-relaxed mt-4">
                Wir können diese Cookie-Richtlinie aktualisieren. Wir bitten Nutzer, diese Seite regelmäßig aufzurufen, um sich über den aktuellen Stand in Bezug auf die Verwendung von Cookies auf dem Laufenden zu halten.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
