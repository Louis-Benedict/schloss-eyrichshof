import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Datenschutz' }

const sections = [
  {
    heading: '1. Datenschutz auf einen Blick: Allgemeine Hinweise',
    content: [
      {
        body: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.',
      },
      {
        subheading: 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
        body: 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.',
      },
      {
        subheading: 'Wie erfassen wir Ihre Daten?',
        body: 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem, Uhrzeit Seitenaufruf). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.',
      },
      {
        subheading: 'Wofür nutzen wir Ihre Daten?',
        body: 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.',
      },
      {
        subheading: 'Welche Rechte haben Sie bezüglich Ihrer Daten?',
        body: 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
      },
      {
        body: 'Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Behörde zu. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.',
      },
      {
        subheading: 'Analyse-Tools und Tools von Drittanbietern',
        body: 'Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.',
      },
    ],
  },
  {
    heading: '2. Hosting und Content Delivery Networks (CDN) — Externes Hosting',
    content: [
      {
        body: 'Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln. Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.',
      },
    ],
  },
  {
    heading: '3. Allgemeine Hinweise und Pflichtinformationen zum Datenschutz',
    content: [
      {
        body: 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht. Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',
      },
      {
        subheading: 'Verantwortliche Stelle',
        body: null,
        address: [
          'Rotenhansche Guts- und Forstverwaltung',
          'Schlosshof 7',
          '96106 Ebern',
          'E-Mail: info@schlosseyrichshof.de',
        ],
      },
      {
        body: 'Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.',
      },
      {
        subheading: 'Gesetzlich vorgeschriebener Datenschutzbeauftragter',
        body: 'Wir haben für unser Unternehmen einen Datenschutzbeauftragten bestellt.',
        address: [
          'Hermann Freiherr von Rotenhan',
          'Schloss Eyrichshof',
          '96106 Ebern',
          'E-Mail: info@schlosseyrichshof.de',
        ],
      },
      {
        subheading: 'Widerruf Ihrer Einwilligung zur Datenverarbeitung',
        body: 'Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.',
      },
      {
        subheading: 'Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)',
        body: 'Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 Lit. E oder F DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO). Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).',
      },
      {
        subheading: 'Beschwerderecht bei der zuständigen Aufsichtsbehörde',
        body: 'Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.',
      },
      {
        subheading: 'Recht auf Datenübertragbarkeit',
        body: 'Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.',
      },
      {
        subheading: 'SSL- bzw. TLS-Verschlüsselung',
        body: 'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.',
      },
      {
        subheading: 'Verschlüsselter Zahlungsverkehr auf dieser Website',
        body: 'Besteht nach dem Abschluss eines kostenpflichtigen Vertrags eine Verpflichtung, uns Ihre Zahlungsdaten (z. B. Kontonummer bei Einzugsermächtigung) zu übermitteln, werden diese Daten zur Zahlungsabwicklung benötigt. Der Zahlungsverkehr über die gängigen Zahlungsmittel (Visa/MasterCard, Lastschriftverfahren) erfolgt ausschließlich über eine verschlüsselte SSL- bzw. TLS-Verbindung. Bei verschlüsselter Kommunikation können Ihre Zahlungsdaten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.',
      },
      {
        subheading: 'Auskunft, Löschung und Berichtigung',
        body: 'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.',
      },
      {
        subheading: 'Recht auf Einschränkung der Verarbeitung',
        body: 'Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen: Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen. Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.',
      },
    ],
  },
  {
    heading: '4. Datenerfassung auf dieser Website — Anfrage per E-Mail, Telefon oder Telefax',
    content: [
      {
        body: 'Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde. Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.',
      },
    ],
  },
  {
    heading: '5. Hinweis bei Kauf von Online-Tickets',
    content: [
      {
        body: null,
        highlight: 'Wenn Sie Ihr Ticket für das Gartenfest oder die Winterszeit über Eventbrite bestellen, gelten deren AGBs und Nutzungsbedingungen.',
        link: { label: 'Eventbrite Nutzungsbedingungen', href: 'https://www.eventbrite.de/l/legalterms/' },
      },
    ],
  },
  {
    heading: '6. Verwendung des Onlinebuchungstools der OBS OnlineBuchungService GmbH',
    content: [
      {
        body: 'Unsere Onlinepräsenz verwendet zur Ermöglichung der Onlinebuchungen von Unterkunftsleistungen und sonstigen Reiseleistungen sowie zur Abwicklung von Anfragen das Onlinebuchungstool (nachfolgend „OBT") der Firma OBS OnlineBuchungService GmbH, Im Gewerbepark D 33, 93059 Regensburg. Im Rahmen des OBT verarbeitet die OBS die Daten als Verantwortlicher. Die Hinweise und Bestimmungen zum Datenschutz finden Sie in der Datenschutzerklärung der OBS zum OBT, welche Sie jederzeit aus dem OBT heraus aufrufen können.',
        link: { label: 'Datenschutzerklärung OBS', href: 'https://online-buchung-service.de/datenschutzerklaerung-buchung/' },
      },
    ],
  },
]

type Block = {
  subheading?: string
  body?: string | null
  highlight?: string
  address?: string[]
  link?: { label: string; href: string }
}

export default function DatenschutzPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Schloss Eyrichshof</p>
        <h1 className="font-heading text-4xl font-normal text-brand">Datenschutzbestimmungen</h1>
      </div>

      <div className="space-y-12">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-heading text-xl font-normal text-brand mb-5 pb-3 border-b border-warm-200">
              {section.heading}
            </h2>
            <div className="space-y-4">
              {section.content.map((block: Block, i) => (
                <div key={i}>
                  {block.subheading && (
                    <p className="text-sm font-semibold text-brand mb-2">{block.subheading}</p>
                  )}
                  {block.highlight && (
                    <p className="text-sm text-warm-700 leading-relaxed border-l-2 border-accent pl-4 py-1">
                      {block.highlight}
                    </p>
                  )}
                  {block.body && (
                    <p className="text-sm text-warm-600 leading-relaxed">{block.body}</p>
                  )}
                  {block.address && (
                    <address className="not-italic text-sm text-warm-600 leading-relaxed mt-2">
                      {block.address.map((line, j) => (
                        <span key={j}>
                          {line.startsWith('E-Mail:') ? (
                            <>E-Mail: <a href={`mailto:${line.replace('E-Mail: ', '')}`} className="text-accent hover:text-accent-hover transition-colors">{line.replace('E-Mail: ', '')}</a></>
                          ) : line}
                          {j < block.address!.length - 1 && <br />}
                        </span>
                      ))}
                    </address>
                  )}
                  {block.link && (
                    <a href={block.link.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-xs text-accent hover:text-accent-hover transition-colors uppercase tracking-widest font-semibold">
                      {block.link.label} →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
