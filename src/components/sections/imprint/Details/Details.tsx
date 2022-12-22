import { ReactElement } from 'react';
import { BaseHeadline } from 'src/components/uis/BaseHeadline';
import { BaseParagraph as P } from 'src/components/uis/BaseParagraph';
import { BaseSection as Section } from 'src/components/uis/BaseSection';

const SubHead = ({ children }: { children: string }) => {
  return <h2 className='text-2xl mt-6 mb-3 lg:text-3xl lg:mt-10 lg:mb-5'>{children}</h2>;
};

const Ul = ({ children }: { children: ReactElement[] | ReactElement }) => {
  return <ul className='my-3'>{children}</ul>;
};

const Li = ({ children }: { children: string | ReactElement }) => {
  return <li className='list-inside list-disc text-lg lg:text-[21px] lg:leading-9 '>{children}</li>;
};

export const Details = () => {
  return (
    <Section>
      <>
        <BaseHeadline label='Datenschutzerklärung' />
        <P className='border-b border-text-black w-fit !text-sm -mt-4 mb-5'>Stand 14. Juli 2020</P>
        <P>Wir freuen uns über Ihren Besuch auf unserer Website. Unsere Homepage ist als Visitenkarte des Budde Kaffee konzipiert. Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Bitte lesen Sie dazu die folgenden Informationen:</P>
        <SubHead>1. Information über die Erhebung personenbezogener Daten</SubHead>
        <P>(1) Im Folgenden informieren wir über die Erhebung personenbezogener Daten bei Nutzung unserer Website. Personenbezogene Daten sind alle Daten, die auf Sie persönlich beziehbar sind, z. B. Name, Adresse, E-Mail-Adressen, Nutzerverhalten.Verantwortlicher gemäß Art. 4 Nr. 7 DSGVO</P>
        <Ul>
          <Li>BUDDE KAFFEE</Li>
          <Li>Inhaberin: Svenja Fox</Li>
          <Li>Adresse: Buddestraße 31f 13507 Berlin</Li>
          <Li>Telefon: +49 173 202 75 75</Li>
          <Li>E-Mail: kontakt@buddekaffee.de</Li>
          <Li>UstID: DE258716403</Li>
        </Ul>
        <P>(2) Unsere Website stellt Ihnen unsere Kontaktdaten zur Verfügung. Bei Ihrer Kontaktaufnahme mit uns, z.B. per E-Mail, werden die von Ihnen mitgeteilten Kontaktdaten von uns gespeichert, um Ihre Fragen oder Ihr Anliegen bearbeiten und beantworten zu können. Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder schränken die Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen.</P>
        <SubHead>2. Ihre Rechte</SubHead>
        <P>(1) Sie haben uns gegenüber folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</P>
        <Ul>
          <Li>Recht auf Auskunft,</Li>
          <Li>Recht auf Berichtigung oder Löschung,</Li>
          <Li>Recht auf Einschränkung der Verarbeitung,</Li>
          <Li>Recht auf Widerspruch gegen die Verarbeitung,</Li>
          <Li>Recht auf Datenübertragbarkeit.</Li>
        </Ul>
        <P>(2) Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.</P>
        <SubHead>3. Erhebung personenbezogener Daten bei Besuch unserer Website</SubHead>
        <P>(1) Bei der bloß informatorischen Nutzung der Website erheben wir nur die personenbezogenen Daten, die Ihr Browser an unseren Server übermittelt. Wenn Sie unsere Website betrachten möchten, erheben wir die folgenden Daten, die für uns technisch erforderlich sind, um Ihnen unsere Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten (Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DSGVO):</P>
        <Ul>
          <Li>IP-Adresse</Li>
          <Li>Datum und Uhrzeit der Anfrage</Li>
          <Li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</Li>
          <Li>Inhalt der Anforderung (konkrete Seite)</Li>
          <Li>Zugriffsstatus/HTTP-Statuscode</Li>
          <Li>jeweils übertragene Datenmenge</Li>
          <Li>Website, von der die Anforderung kommt</Li>
          <Li>Browser</Li>
          <Li>Betriebssystem und dessen Oberfläche</Li>
          <Li>Sprache und Version der Browsersoftware.</Li>
        </Ul>
        <P>(2) Zusätzlich zu den zuvor genannten Daten werden bei Ihrer Nutzung unserer Website Cookies auf Ihrem Rechner gespeichert. Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrer Festplatte dem von Ihnen verwendeten Browser zugeordnet gespeichert werden und durch welche der Stelle, die den Cookie setzt, bestimmte Informationen zufließen. Cookies können keine Programme ausführen oder Viren auf Ihren Computer übertragen. Cookies dienen dazu, das Internetangebot insgesamt nutzerfreundlicher und effektiver zu machen.</P>
        <P>(3) Die von uns verwendeten Sessions Cookies speichern eine sogenannte Session-ID, mit welcher sich verschiedene Anfragen Ihres Browsers der gemeinsamen Sitzung zuordnen lassen. Dadurch kann Ihr Rechner wiedererkannt werden, wenn Sie auf unsere Website zurückkehren. Die Session-Cookies werden automatisiert gelöscht, wenn Sie den Browser schließen.</P>
        <P>(4) Natürlich können Sie unsere Website auch ohne Cookies betrachten. Internet-Browser sind regelmäßig so eingestellt, dass sie Cookies akzeptieren. Im Allgemeinen können Sie die Verwendung von Cookies jederzeit über die Einstellungen Ihres Browsers deaktivieren. Bitte verwenden Sie die Hilfefunktionen Ihres Internetbrowsers, um zu erfahren, wie Sie diese Einstellungen ändern können. Bitte beachten Sie, dass einzelne Funktionen unserer Website möglicherweise nicht funktionieren, wenn Sie die Verwendung von Cookies deaktiviert haben.</P>
        <SubHead>4. Google Maps</SubHead>
        <P>(1) Auf unserer Webseite nutzen wir das Angebot von Google Maps. Dadurch können wir Ihnen interaktive Karten direkt in der Website anzeigen und ermöglichen Ihnen die komfortable Nutzung der Karten-Funktion.</P>
        <P>(2) Betreiber von Google Maps ist Google LLC, ansässig in den USA, 1600 Amphitheatre Parkway, Mountain View, CA 94043; Tel: +1 650 253 0000, Fax: +1 650 253 0001</P>
        <P>
          (3) Durch den Besuch auf der Website erhält Google die Information, dass Sie die entsprechende Unterseite unserer Website aufgerufen haben. Zudem werden die unter Ziff. 3 dieser Erklärung genannten Daten übermittelt. Dies erfolgt unabhängig davon, ob Google ein Nutzerkonto bereitstellt, über das Sie eingeloggt sind, oder ob kein Nutzerkonto besteht. Wenn Sie bei Google eingeloggt sind, werden Ihre Daten direkt Ihrem Konto zugeordnet. Wenn Sie die Zuordnung mit Ihrem Profil bei Google nicht wünschen, müssen Sie sich vor Aktivierung des Buttons ausloggen. Google
          speichert Ihre Daten als Nutzungsprofile und nutzt sie für Zwecke der Werbung, Marktforschung und/oder bedarfsgerechten Gestaltung seiner Website. Eine solche Auswertung erfolgt insbesondere (selbst für nicht eingeloggte Nutzer) zur Erbringung von bedarfsgerechter Werbung und um andere Nutzer des sozialen Netzwerks über Ihre Aktivitäten auf unserer Website zu informieren. Ihnen steht ein Widerspruchsrecht zu gegen die Bildung dieser Nutzerprofile, wobei Sie sich zur Ausübung dessen an Google wenden müssen.
        </P>
        <P>(4) Weitere Informationen zu Zweck und Umfang der Datenerhebung und ihrer Verarbeitung durch den Plug-in-Anbieter erhalten Sie in den Datenschutzerklärungen des Anbieters. Dort erhalten Sie auch weitere Informationen zu Ihren diesbezüglichen Rechten und Einstellungsmöglichkeiten zum Schutze Ihrer Privatsphäre: https://www.google.de/intl/de/policies/privacyGoogle verarbeitet Ihre personenbezogenen Daten auch in den USA und hat sich dem EU-US Privacy Shield unterworfen, https://www.privacyshield.gov/EU-US-Framework</P>
        <P>(5) Wenn Sie Javascript in Ihrem Browser deaktivieren, verhindern Sie die Ausführung von Google Maps. Sie können dann aber auch keine Kartenanzeige auf unserer Webseite nutzen.</P>
        <SubHead>5. Sicherheit</SubHead>
        <P>
          Personenbezogene Daten, die zwischen Ihnen und uns ausgetauscht werden, werden über verschlüsselte Verbindungen übertragen, die dem aktuellen Stand der Technik entsprechen. Durch SSL (Secure Socket Layer) wird die Datenübertragung im zugriffsgeschützten Bereich vor illegalem Datenzugriff Dritter geschützt (256-Bit SSL). Dieses Verschlüsselungsverfahren erkennen Sie daran, dass das Schlüsselsymbol in der unteren Menüleiste Ihres Browserfensters erscheint und die Adresse mit „https://“ beginnt. Zudem treffen wir technische und organisatorische
          Sicherheitsvorkehrungen, um Ihre durch uns verwalteten personenbezogenen Daten gegen zufällige oder vorsätzliche Manipulation, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen. Gegen unautorisierte Zugriffe setzten wir ein Firewall-System ein.
        </P>
        <SubHead>6. Änderungen der Datenschutzerklärung</SubHead>
        <P>
          Von Zeit zu Zeit kann es erforderlich sein, den Inhalt der vorliegenden Datenschutzerklärung anzupassen bzw. zu aktualisieren. Wir behalten uns daher das Recht vor, diese Datenschutzerklärung aufgrund einer Weiterentwicklung unserer Website, einer Nutzeranpassung, einer Anpassung an den technischen Fortschritt oder aufgrund geänderter gesetzlicher oder behördlicher Bestimmungen jederzeit zu ändern. Etwaige Änderungen werden durch Veröffentlichung der geänderten Datenschutzerklärung auf unserer Website bekannt gemacht. Soweit nicht anderweitig bestimmt, werden
          solche Änderungen sofort wirksam. Bitte prüfen Sie daher diese Datenschutzerklärung regelmäßig, um die jeweils aktuellste Version einzusehen.
        </P>
        <small>Erstellt: 14. Juli 2020</small>
      </>
    </Section>
  );
};
