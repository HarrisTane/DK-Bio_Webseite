# 🌿 DK Bio – Responsive Multi-Language Website

Eine vollständig responsive, zweisprachige (FR/EN) Webseite für die Marke **DK Bio** – entwickelt mit **HTML, CSS, JavaScript und Bootstrap**.

🚀 **Live-Demo** (falls GitHub Pages genutzt wird):  
https://<username>.github.io/<repository-name>/

---

## 📝 Projektbeschreibung

Dieses Projekt ist eine professionelle Marken- und Produktwebseite für **DK Bio**, ein Unternehmen aus Kamerun, das nachhaltige und dehydrierte Lebensmittel herstellt.  
Die Seite basiert vollständig auf **Bootstrap** und beinhaltet:

- Dynamische Navigation  
- i18n-Sprachumschaltung (Französisch / Englisch)  
- Theme-Umschalter (Dark/Light)  
- Produkt- & Preistabellen  
- Galerie  
- Visuelle Platzhalter  
- Kontaktinformationen  
- Downloadbereich für Dokumente  

---

## ✨ Features

### 🌍 Mehrsprachigkeit (FR/EN)

Die gesamte Webseite kann per Klick zwischen **Französisch** und **Englisch** umgestellt werden.  
Alle Texte werden dynamisch über `data-i18n` geladen.

**Implementierung:**  
- Wörterbuch + dynamischer DOM-Austausch in `script.js`

---

### 🌓 Dark/Light Mode

Automatischer Theme-Wechsel basierend auf:

- Systempräferenz  
- Benutzerwahl (wird in `localStorage` gespeichert)

➡️ Nutzt das **Bootstrap-5.3 Theme System**.

---

### 📱 100% Responsive

Durch **Bootstrap 5.3.3** ist die gesamte Seite vollständig mobil optimiert.

---

### 🖼️ Bilder, Galerie & Platzhalter

Die Seite enthält mehrere Bild- und Galerie-Sektionen:

- Hero-Bild  
- Markenpräsentation  
- Produktbilder  
- Galerie  
- Teamfoto  
- Logo-Darstellung  

Platzhalter passen sich automatisch dem Theme an  
(über `.placeholder-photo` in `style.css`).

---

### 📊 Preislisten

Eine tabellarische Preisübersicht mit Bootstrap-Borders, optimiert für mobile Geräte.

---

### 📄 Downloads

Bereich mit Links zu:

- Brandbook PDF (FR/EN)
- Logo-Dateien
- Galerie-Bildern

---

## 🛠️ Verwendete Technologien

| Technologie           | Zweck                                              |
|----------------------|----------------------------------------------------|
| **HTML5**            | Struktur der Webseite                              |
| **CSS3 + Custom CSS**| Branding & Styling                                 |
| **Bootstrap 5.3**    | Layout, Grid, Komponenten                          |
| **Bootstrap Icons**  | Icons im gesamten Projekt                          |
| **JavaScript (Vanilla)** | i18n, Theme-Umschaltung, Interaktionen      |
| **localStorage**     | Speichert Dark/Light-Mode des Nutzers              |
| **Responsive Images**| Optimierte Bilddarstellung                         |

---

## 📂 Projektstruktur

