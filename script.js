function generateStrafakte() {
  const officer = document.getElementById("officer").value;
  const tatort = document.getElementById("tatort").value;
  const zeitraum = document.getElementById("zeitraum").value;
  const beschuldigte = document.getElementById("beschuldigte").value;
  const geschaedigte = document.getElementById("geschaedigte").value;
  const sachverhalt = document.getElementById("sachverhalt").value;
  const einheiten = document.getElementById("einheiten").value;
  const gegenstaende = document.getElementById("gegenstaende").value;
  const abgenommenVon = document.getElementById("abgenommenVon").value || "Unbekannt";
  const rechteVon = document.getElementById("rechteVon").value;
  const rechteBeisein = document.getElementById("rechteBeisein").value;
  const rechtsbeistand = document.getElementById("rechtsbeistand").value;
  const medizin = document.getElementById("medizin").value;
  const bussgeld = document.getElementById("bussgeld").value;
  const bemerkung = document.getElementById("bemerkung").value;
  const strafen = document.getElementById("strafen").value;

  const officerParts = officer.split("|").map(s => s.trim());
  const zeichnung = officerParts[0] || "";

  const output = `
| - Strafakte - |

Narco City Police Department
${officer}

| Tatort und Zeitraum: |
${tatort}
Am ${zeitraum}

| Beschuldigte Person(en): |
${beschuldigte}

| Geschädigte Person(en): |
${geschaedigte}

| Sachverhalt aus Sicht des NCPDs: |
${sachverhalt}

| Weitere beteiligte Einheiten/Zeugen: | 
${einheiten}

| Abgenommene Gegenstände: |  Abgenommen von: ${abgenommenVon}
${gegenstaende}

| Bemerkungen: |
Die Rechte wurden von der ${rechteVon} dem TV vorgelesen,
im Beisein von ${rechteBeisein} zum frühestmöglichen Zeitpunkt nach Festsetzung und von dem TV verstanden.
Der TV wünschte sich ${rechtsbeistand} Rechtsbeistand.
Das Bußgeld ist bis zum ${bussgeld} zu bezahlen.
TV wünschte sich ${medizin} medizinische Unterstützung.
${bemerkung}

| Gezeichnet von: | 
${zeichnung}
${officer}

${strafen}
  `.trim();

  document.getElementById("output").textContent = output;
}

function resetForm() {
  const ids = [
    "officer", "tatort", "zeitraum", "beschuldigte", "geschaedigte",
    "sachverhalt", "einheiten", "gegenstaende", "abgenommenVon",
    "rechteVon", "rechteBeisein", "bussgeld", "bemerkung", "strafen"
  ];
  ids.forEach(id => document.getElementById(id).value = "");
  document.getElementById("rechtsbeistand").value = "keinen";
  document.getElementById("medizin").value = "keine";
  document.getElementById("output").textContent = "";
}
