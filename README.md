# Familienaufgabenplaner

Der Familienaufgabenplaner ist eine Terminalanwendung, die in JavaScript geschrieben wurde. Sie hilft dabei, wöchentliche Haushaltsaufgaben unter den Familienmitgliedern zu organisieren und zuzuweisen. Der Planer unterstützt das Hinzufügen neuer Familienmitglieder und Aufgaben und stellt sicher, dass die Aufgaben gleichmäßig verteilt werden und sich die Zuweisungen jede Woche ändern.

## Funktionen

- **Monatlichen Plan anzeigen**: Zeigt einen einmonatigen Zeitplan der wöchentlichen Aufgaben, die zufällig an die Familienmitglieder zugewiesen werden.
- **Neue Aufgabe hinzufügen**: Ermöglicht das Hinzufügen neuer Aufgaben, die in den Plan aufgenommen werden.
- **Neues Familienmitglied hinzufügen**: Ermöglicht das Hinzufügen neuer Familienmitglieder zur Aufgabenrotation mit anpassbaren Farben für die Aufgabenverteilung.

## Verwendung

1. **Abhängigkeiten installieren**: Stelle sicher, dass [Node.js](https://nodejs.org/) installiert ist. Installiere dann das benötigte Paket:
    ```sh
    npm install colors
    ```

2. **Anwendung starten**:
    ```sh
    node planner.js
    ```

3. **Menüoptionen**:
    - **1. Monatlichen Plan anzeigen**: Zeigt den aktuellen Monatsplan der Aufgaben.
    - **2. Neue Aufgabe hinzufügen**: Fragt nach einer neuen Aufgabe und fügt sie der Liste hinzu.
    - **3. Neues Familienmitglied hinzufügen**: Fragt nach dem Namen und der Farbe eines neuen Familienmitglieds und fügt es hinzu.
    - **4. Beenden**: Beendet die Anwendung.

## Größte Herausforderung

Meine größte Herausforderung bei diesem Projekt war es, die Tabelle ordentlich und sauber zu formatieren, sodass die Aufgaben direkt unter den jeweiligen Personen angezeigt werden.

![Herausforderung bei der Tabellenformatierung](./img/Bildschirmfoto%20vom%202024-07-11%2012-52-24.png)

Dies erforderte die Implementierung einer Funktion zur Formatierung des Textes mit festen Spaltenbreiten, um ein gleichmäßiges Aussehen der Tabelle hinzubekommen.

## Was ich gelernt habe

Während dieses Projekts habe ich gelernt:
- Wie man das `colors`-Modul verwendet, um farbigen Text in der Konsole anzuzeigen.
- Wie wichtig es ist, Daten sauber zu formatieren, um eine lesbare und benutzerfreundliche Ausgabe zu gewährleisten.
- Wie man zufällige Aufgabenverteilungen implementiert, sie sind nur noch nicht wirklich gleichmäßig und gerecht verteilt.

## Was ich noch machen möchte

- Aufgaben besser verteilen lassen. 

	
