import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung und Informationen zur Datenverarbeitung",
  robots: {
    index: false,
    follow: true,
  },
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold">Datenschutzerklärung</h1>

      <div className="prose prose-gray max-w-none dark:prose-invert">
        <h2>1. Datenschutz auf einen Blick</h2>

        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
          Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
          Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
          identifiziert werden können. Ausführliche Informationen zum Thema
          Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
        </p>

        <h3>Datenerfassung auf dieser Website</h3>
        <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser
          Website entnehmen.
        </p>

        <h4>Wie erfassen wir Ihre Daten?</h4>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben.
        </p>
        <p>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch
          der Website durch unsere IT-Systeme erfasst. Das sind vor allem
          technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
          Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald
          Sie diese Website betreten.
        </p>

        <h4>Wofür nutzen wir Ihre Daten?</h4>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
          Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
        </p>

        <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
          dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
          Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit
          für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
          bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </p>
        <p>
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
          jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
        </p>

        <h2>2. Hosting</h2>
        <p>
          Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
        </p>

        <h3>Vercel</h3>
        <p>
          Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
          USA (nachfolgend Vercel). Vercel ist ein Dienst zum Hosting von
          Webseiten. Wenn Sie unsere Website besuchen, werden über Vercel
          Nutzerdaten wie z.B. IP-Adressen, Browser-Typ und -Version,
          Betriebssystem etc. erfasst. Details entnehmen Sie der
          Datenschutzerklärung von Vercel:{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            https://vercel.com/legal/privacy-policy
          </a>
          .
        </p>
        <p>
          Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
          DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst
          zuverlässigen Darstellung unserer Website.
        </p>

        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

        <h3>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>
        <p>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
          Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
          persönlich identifiziert werden können. Die vorliegende
          Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
          sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
        </p>

        <h3>Hinweis zur verantwortlichen Stelle</h3>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website
          ist:
        </p>
        <p>
          {siteConfig.name}
          <br />
          {siteConfig.owner.name}
          <br />
          {siteConfig.contact.street}
          <br />
          {siteConfig.contact.postalCode} {siteConfig.contact.city}
        </p>
        <p>
          Telefon: {siteConfig.contact.phoneDisplay}
          <br />
          E-Mail: {siteConfig.contact.email}
        </p>
        <p>
          Verantwortliche Stelle ist die natürliche oder juristische Person, die
          allein oder gemeinsam mit anderen über die Zwecke und Mittel der
          Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen
          o. Ä.) entscheidet.
        </p>

        <h3>Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei
          uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
          berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
          Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir
          keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
          personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche
          Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach
          Fortfall dieser Gründe.
        </p>

        <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
          Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
          jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
          Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>

        <h2>4. Datenerfassung auf dieser Website</h2>

        <h3>Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
          Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
          Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
          Ihre Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
          zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
          unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
          gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
        </p>
        <p>
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns,
          bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
          widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach
          abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
          Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
        </p>

        <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
        <p>
          Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
          Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
          (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
          gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
          Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
          zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
          unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
          gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
        </p>

        <p className="mt-8 text-sm text-muted-foreground">
          <strong>Hinweis:</strong> Diese Datenschutzerklärung ist ein Muster und
          muss an Ihre tatsächlichen Gegebenheiten angepasst werden. Bitte
          konsultieren Sie einen Datenschutzbeauftragten oder Rechtsanwalt für
          eine rechtssichere Datenschutzerklärung.
        </p>
      </div>
    </div>
  );
}
