// TAB SWITCHING
document.addEventListener("DOMContentLoaded", () => {
  const strafakteBtn = document.getElementById("tab-strafakte");
  const schnellakteBtn = document.getElementById("tab-schnellakte");
  const strafakteForm = document.getElementById("form-strafakte");
  const schnellakteForm = document.getElementById("form-schnellakte");

  function setActiveTab(tab) {
    if (tab === "strafakte") {
      strafakteBtn.classList.add("bg-blue-600", "text-white");
      strafakteBtn.classList.remove("bg-gray-700", "text-gray-400");
      schnellakteBtn.classList.remove("bg-blue-600", "text-white");
      schnellakteBtn.classList.add("bg-gray-700", "text-gray-400");
      strafakteForm.classList.remove("hidden");
      schnellakteForm.classList.add("hidden");
    } else {
      schnellakteBtn.classList.add("bg-blue-600", "text-white");
      schnellakteBtn.classList.remove("bg-gray-700", "text-gray-400");
      strafakteBtn.classList.remove("bg-blue-600", "text-white");
      strafakteBtn.classList.add("bg-gray-700", "text-gray-400");
      schnellakteForm.classList.remove("hidden");
      strafakteForm.classList.add("hidden");
    }
  }

  strafakteBtn.addEventListener("click", () => setActiveTab("strafakte"));
  schnellakteBtn.addEventListener("click", () => setActiveTab("schnellakte"));

  // Start mit Strafakte aktiv
  setActiveTab("strafakte");
});

// Strafakte Generieren
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
${zeitraum}

| Beschuldigte Person(en): |
${beschuldigte}

| Geschädigte Person(en): |
${geschaedigte}

| Sachverhalt aus Sicht des NCPDs: |
${sachverhalt}

| Weitere beteiligte Einheiten/Zeugen: |
${einheiten}

| Abgenommene Gegenstände: | Abgenommen von: ${abgenommenVon}
${gegenstaende}

| Bemerkungen: |
Die Rechte wurden dem Beschuldigten durch ${rechteVon} im Beisein von ${rechteBeisein} verlesen und verstanden.
Dieser traf Auswahl auf einen Rechtsbeistand: ${rechtsbeistand}.
Der TV traf Auswahl auf medizinische Versorgung: ${medizin}.
${bussgeld ? `Das Bußgeld ist bis zum ${formatDateWithPlus7(bussgeld)} zu bezahlen.` : ""}
${bemerkung ? bemerkung : ""}
Die dem Tatverdächtigen abgenommenen Gegenstände wurden in seinen persönlichen Spind gelegt.

| Tatbestände: |
${strafen}

| Gezeichnet von: |
${zeichnung}
`.trim();

  document.getElementById("output-strafakte").textContent = output;
}

function formatDateWithPlus7(dateString) {
  const date = new Date(dateString);
  date.setDate(date.getDate() + 7);
  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const y = date.getFullYear();
  return `${dateString} [+7 Tage] (${d}.${m}.${y})`;
}

function resetStrafakteForm() {
  ["officer","tatort","zeitraum","beschuldigte","geschaedigte","sachverhalt","einheiten","gegenstaende","abgenommenVon","rechteVon","rechteBeisein","rechtsbeistand","medizin","bussgeld","bemerkung","strafen"]
    .forEach(id => {
      const el = document.getElementById(id);
      if(el) el.value = "";
    });
  document.getElementById("rechtsbeistand").value = "keinen";
  document.getElementById("medizin").value = "keine";
  document.getElementById("output-strafakte").textContent = "";
}

// Schnellakte Generieren
function generateSchnellakte() {
  const officer = document.getElementById("s_officer").value;
  const tatort = document.getElementById("s_tatort").value;
  const zeitraum = document.getElementById("s_zeitraum").value;
  const beschuldigte = document.getElementById("s_beschuldigte").value;
  const geschaedigte = document.getElementById("s_geschaedigte").value;
  const einheiten = document.getElementById("s_einheiten").value;
  const gegenstaende = document.getElementById("s_gegenstaende").value;
  const abgenommenVon = document.getElementById("s_abgenommenVon").value || "Unbekannt";
  const bemerkung = document.getElementById("s_bemerkung").value;
  const gezeichnet = document.getElementById("s_gezeichnet").value;
  const gezeichnetOfficer = document.getElementById("s_gezeichnetOfficer").value;
  const rechteVon = document.getElementById("s_rechteVon").value || "Unbekannt";
  const rechteBeisein = document.getElementById("s_rechteBeisein").value || "Unbekannt";
  const rechtsbeistand = document.getElementById("s_rechtsbeistand").value || "keinen";
  const medizin = document.getElementById("s_medizin").value || "keine";
  const bussgeld = document.getElementById("s_bussgeld").value;

  let bussgeldDatumText = "";
  if (bussgeld) {
    const date = new Date(bussgeld);
    date.setDate(date.getDate() + 7);
    const day = String(date.getDate()).padStart(2,"0");
    const month = String(date.getMonth()+1).padStart(2,"0");
    const year = date.getFullYear();
    bussgeldDatumText = `${bussgeld} [+7 Tage] (${day}.${month}.${year})`;
  }

  const output = `
| - Schnellakte - |

Narco City Police Department
${officer}

| Tatort und Zeitraum: |
${tatort}
${zeitraum}

| Beschuldigte Person(en): |
${beschuldigte}

| Geschädigte Person(en): |
${geschaedigte}

| Weitere beteiligte Einheiten/Zeugen: | 
${einheiten}

| Abgenommene Gegenstände: |  Abgenommen von: ${abgenommenVon}
${gegenstaende}

| Bemerkungen: |
Die Rechte wurden dem Beschuldigten durch ${rechteVon} im Beisein von ${rechteBeisein} verlesen und verstanden.
Dieser Treffen Auswahl auf einen Rechtsbeistand: ${rechtsbeistand}.
Der TV Treffen Auswahl auf medizinische Versorgung: ${medizin}.
${bussgeld ? `Das Bußgeld ist bis zum ${bussgeldDatumText} zu bezahlen.` : ""}
Die dem Tatverdächtigen abgenommenen Gegenstände wurden in seinen persönlichen Spind gelegt.

| Gezeichnet von: |
${gezeichnet}
${gezeichnetOfficer}
`.trim();

  document.getElementById("output-schnellakte").textContent = output;
}

function resetSchnellakteForm() {
  ["s_officer","s_tatort","s_zeitraum","s_beschuldigte","s_geschaedigte","s_einheiten","s_gegenstaende","s_abgenommenVon","s_rechteVon","s_rechteBeisein","s_rechtsbeistand","s_medizin","s_bussgeld","s_bemerkung","s_gezeichnet","s_gezeichnetOfficer"]
  .forEach(id => {
    const el = document.getElementById(id);
    if(el) {
      if(el.tagName === "SELECT") el.value = id.includes("rechtsbeistand") ? "keinen" : "keine";
      else el.value = "";
    }
  });
  document.getElementById("output-schnellakte").textContent = "";
}
