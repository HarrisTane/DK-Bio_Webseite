# DK Bio

Statischer Produktkatalog auf Deutsch, Englisch und Französisch. Die deutsche
Startseite ist `index.html`. Die anderen Sprachversionen liegen unter
`en.html` und `fr.html`.

## Lokal öffnen

Im entpackten Projektordner `python3 -m http.server 8000` starten.
Dann http://localhost:8000 im Browser öffnen. Der Webserver dient der
lokalen Vorschau.

## Veröffentlichen

Die Website benötigt statisches Hosting mit HTTPS und einer Weiterleitung
von HTTP auf HTTPS. `_headers` konfiguriert die zusätzlichen Sicherheitsheader
auf kompatiblen Hosts. Bei anderen Hosts die Regeln aus dieser Datei als
HTTP-Antwortheader konfigurieren. Die Content Security Policy steht zusätzlich
in den HTML-Seiten. Framing-Schutz greift über die HTTP-Antwortheader.
Die 404-Seite erwartet eine Veröffentlichung im Stammverzeichnis der Domain.
Bei einer Projekt-URL in einem Unterpfad die absoluten Pfade in `404.html`
anpassen und den Host auf diese Fehlerseite konfigurieren.

Vor der Veröffentlichung die endgültige Domain für absolute Sprachalternativen,
Canonical-URLs und Social-Media-Vorschaubilder eintragen. Datenschutzhinweise
an das tatsächliche Hosting, die Serverprotokollierung und die Betreiberangaben
anpassen. Betreiber- und Kontaktangaben anhand der Unternehmensdaten prüfen.

## Inhalte pflegen

Texte parallel in den drei Sprachversionen aktualisieren.
Bei Preisänderungen die Werte in allen drei Tabellen pflegen. Der Preisfilter läuft
im Browser. Sprachwechsel, Katalog und Kontaktlinks funktionieren auch bei
deaktiviertem JavaScript. Die Farbauswahl ist die einzige Einstellung, die
die Website im lokalen Browserspeicher ablegt.

Die Website lädt Bootstrap-CSS lokal. Für Bilder nutzt sie WebP-Varianten
unter `Image/web/`. Originalbilder und PDF-Dokumente liegen weiterhin im Projekt.
