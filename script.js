function switchTab(tab) {
  const tabs = ['strafakte', 'schnellakte', 'kollektivakte'];
  tabs.forEach(t => {
    document.getElementById(t).classList.toggle('hidden', t !== tab);
    document.getElementById(`${t}-tab`).classList.toggle('border-blue-500', t === tab);
    document.getElementById(`${t}-tab`).classList.toggle('border-transparent', t !== tab);
  });
}

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

function generateSchnellakte() {
  const officer = document.getElementById("s_officer").value;
  const tatort = document.getElementById("s_tatort").value;
  const zeitraum = document.getElementById("s_zeitraum").value;
  const beschuldigte = document.getElementById("s_beschuldigte").value;
  const geschaedigte = document.getElementById("s_geschaedigte").value;
  const einheiten = document.getElementById("s_einheiten").value;
  const gegenstaende = document.getElementById("s_gegenstaende").value;
  const abgenommenVon = document.getElementById("s_abgenommenVon").value || "Unbekannt";
  const rechtsbeistand = document.getElementById("s_rechtsbeistand").value;
  const medizin = document.getElementById("s_medizin").value;
  const bussgeld = document.getElementById("s_bussgeld").value;
  const bemerkung = document.getElementById("s_bemerkung").value;

  const officerParts = officer.split("|").map(s => s.trim());
  const zeichnung = officerParts[0] || "";

  const output = `
| - Schnellakte - |

Narco City Police Department
${officer}

| Tatort und Zeitraum: |
${tatort}
Am ${zeitraum}

| Beschuldigte Person(en): |
${beschuldigte}

| Geschädigte Person(en): |
${geschaedigte}

| Weitere beteiligte Einheiten/Zeugen: | 
${einheiten}

| Abgenommene Gegenstände: |  Abgenommen von: ${abgenommenVon}
${gegenstaende}

| Bemerkungen: |
Die Rechte wurden dem Beschuldigten durch ${abgenommenVon} im Beisein von ${einheiten} verlesen und verstanden. 
Dieser Treffe Auswahl.. auf einen Rechtsbeistand.
Der TV Treffe Auswahl.. auf medizinische Versorgung.
Das Bußgeld ist bis zum ${bussgeld} [+7 Tage] zu bezahlen.
Die dem Tatverdächtigen abgenommenen Gegenstände wurden in seinen persönlichen Spind gelegt.

| Gezeichnet von: |
${zeichnung}
${officer}
  `.trim();

  document.getElementById("output-schnellakte").textContent = output;
}

function resetSchnellakteForm() {
  const ids = [
    "s_officer", "s_tatort", "s_zeitraum", "s_beschuldigte", "s_geschaedigte",
    "s_einheiten", "s_gegenstaende", "s_abgenommenVon", "s_bussgeld", "s_bemerkung"
  ];
  ids.forEach(id => document.getElementById(id).value = "");
  document.getElementById("s_rechtsbeistand").value = "keinen";
  document.getElementById("s_medizin").value = "keine";
  document.getElementById("output-schnellakte").textContent = "";
}

function generateKollektivakte() {
  const officer = document.getElementById("k_officer").value;
  const dojo = document.getElementById("k_dojo").value;
  const time = document.getElementById("k_time").value;
  const tatort = document.getElementById("k_tatort").value;
  const zeitraum = document.getElementById("k_zeitraum").value;
  const beschuldigte = document.getElementById("k_beschuldigte").value;
  const geschaedigte = document.getElementById("k_geschaedigte").value;
  const sachverhalt = document.getElementById("k_sachverhalt").value;
  const einheiten = document.getElementById("k_einheiten").value;
  const gegenstaende = document.getElementById("k_gegenstaende").value;
  const abgenommenVon = document.getElementById("k_abgenommenVon").value || "Unbekannt";
  const bemerkung = document.getElementById("k_bemerkung").value;
  const gezeichnet = document.getElementById("k_gezeichnet").value;
  const gezeichnetInfo = document.getElementById("k_gezeichnetInfo").value;

  const output = `
| - Kollektivakte - |
Narco City Police Department
${officer}
Kollektivakte wurde von ${dojo} um ${time} genehmigt

| Tatort und Zeitraum: |
${tatort}
Am ${zeitraum}

| Beschuldigte Personen: |
${beschuldigte}

| Geschädigte Person(en): |
${geschaedigte}

| Sachverhalt aus Sicht des NCPDs: |
${sachverhalt}

Die Identität wurde mittels Treffe Auswahl... festgestellt.

| Weitere beteiligte Einheiten/Zeugen: | 
${einheiten}

| Abgenommene Gegenstände: |  Abgenommen von: ${abgenommenVon}
${gegenstaende}

| Bemerkungen: |
Die Rechte wurden dem Beschuldigten durch ${abgenommenVon} im Beisein von ${einheiten} verlesen und verstanden. 
Diese Treffe Auswahl.. auf einen Rechtsbeistand.
Die TV´s Treffe Auswahl.. auf medizinische Versorgung.
Das Bußgeld ist bis zum ${bemerkung} [+7 Tage] zu bezahlen.

| Gezeichnet von: |                   
${gezeichnet}
${gezeichnetInfo}
  `.trim();

  document.getElementById("output-kollektivakte").textContent = output;
}

function resetKollektivakteForm() {
  const ids = [
    "k_officer", "k_dojo", "k_time", "k_tatort", "k_zeitraum", "k_beschuldigte",
    "k_geschaedigte", "k_sachverhalt", "k_einheiten", "k_gegenstaende", "k_abgenommenVon",
    "k_bemerkung", "k_gezeichnet", "k_gezeichnetInfo"
  ];
  ids.forEach(id => document.getElementById(id).value = "");
  document.getElementById("output-kollektivakte").textContent = "";
}

// Initial Tab
document.addEventListener('DOMContentLoaded', () => {
  switchTab('strafakte');
});
