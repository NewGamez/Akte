function switchTab(tabId) {
  const tabs = ["strafakte-tab", "schnellakte-tab", "kollektivakte-tab"];
  const contents = ["strafakte-content", "schnellakte-content", "kollektivakte-content"];

  tabs.forEach((id, index) => {
    const tab = document.getElementById(id);
    const content = document.getElementById(contents[index]);
    if (id === tabId) {
      tab.classList.add("border-blue-500", "text-blue-500");
      content.classList.remove("hidden");
    } else {
      tab.classList.remove("border-blue-500", "text-blue-500");
      content.classList.add("hidden");
    }
  });
}

// STRAFAKTE
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
  const rechteVon = document.getElementById("rechteVon").value || "PD-XX";
  const rechteBeisein = document.getElementById("rechteBeisein").value || "PD-XX";
  const bussgeld = document.getElementById("bussgeld").value;
  const bemerkung = document.getElementById("bemerkung").value;
  const strafen = document.getElementById("strafen").value;
  const zeichner = document.getElementById("zeichner").value;
  const zeichnerInfo = document.getElementById("zeichnerInfo").value;

  const rechtsbeistandChecked = document.getElementById("checkboxRechtsbeistand").checked;
  const medizinChecked = document.getElementById("checkboxMedizin").checked;

  let bussgeldDatumText = "";
  if (bussgeld) {
    const date = new Date(bussgeld);
    date.setDate(date.getDate() + 7);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    bussgeldDatumText = `${day}.${month}.${year}`;
  }

  const bemerkungstext = `
Die Rechte wurden dem Beschuldigten durch ${rechteVon} im Beisein von ${rechteBeisein} verlesen und verstanden.
Dieser ${rechtsbeistandChecked ? "bestand" : "verzichtete"} auf einen Rechtsbeistand.
Der TV ${medizinChecked ? "bestand" : "verzichtete"} auf medizinische Versorgung.
${bussgeld ? `Das Bußgeld ist bis zum ${bussgeldDatumText} [+7 Tage] zu bezahlen.` : ""}
Die dem Tatverdächtigen abgenommenen Gegenstände wurden in seinen persönlichen Spind gelegt.
${bemerkung}
`.trim();

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
${bemerkungstext}

| Gezeichnet von: |
${zeichner}
${zeichnerInfo}

${strafen}
  `.trim();

  document.getElementById("output").textContent = output;
}

function resetStrafakteForm() {
  const ids = [
    "officer", "tatort", "zeitraum", "beschuldigte", "geschaedigte",
    "sachverhalt", "einheiten", "gegenstaende", "abgenommenVon",
    "rechteVon", "rechteBeisein", "bussgeld", "bemerkung", "strafen",
    "zeichner", "zeichnerInfo"
  ];
  ids.forEach(id => document.getElementById(id).value = "");
  document.getElementById("checkboxRechtsbeistand").checked = false;
  document.getElementById("checkboxMedizin").checked = false;
  document.getElementById("output").textContent = "";
}
