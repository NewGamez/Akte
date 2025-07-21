function switchTab(tabId) {
  const tabs = ["strafakte-tab", "schnellakte-tab"];
  const contents = ["strafakte-content", "schnellakte-content"];

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
  const rechteVon = document.getElementById("rechteVon").value;
  const rechteBeisein = document.getElementById("rechteBeisein").value;
  const rechtsbeistand = document.getElementById("rechtsbeistand").value;
  const medizin = document.getElementById("medizin").value;
  const bussgeld = document.getElementById("bussgeld").value;
  const bemerkung = document.getElementById("bemerkung").value;
  const strafen = document.getElementById("strafen").value;
  const zeichner = document.getElementById("zeichner").value;
  const zeichnerInfo = document.getElementById("zeichnerInfo").value;

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
  document.getElementById("rechtsbeistand").value = "keinen";
  document.getElementById("medizin").value = "keine";
  document.getElementById("output").textContent = "";
}

// SCHNELLAKTE
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
  const bussgeld = document.getElementById("s_bussgeld").value || "";

  // Bußgeld +7 Tage berechnen
  let bussgeldDatumText = "";
  if (bussgeld) {
    const date = new Date(bussgeld);
    date.setDate(date.getDate() + 7);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    bussgeldDatumText = `${bussgeld} [+7 Tage] (${day}.${month}.${year})`;
  }

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
Die Rechte wurden dem Beschuldigten durch ${rechteVon} im Beisein von ${rechteBeisein} verlesen und verstanden.
Der TV wünschte sich ${rechtsbeistand} Rechtsbeistand.
TV wünschte sich ${medizin} medizinische Unterstützung.
${bussgeld ? `Das Bußgeld ist bis zum ${bussgeldDatumText} zu bezahlen.` : ""}
Die dem Tatverdächtigen abgenommenen Gegenstände wurden in seinen persönlichen Spind gelegt.
${bemerkung}

| Gezeichnet von: |
${gezeichnet}
${gezeichnetOfficer}
  `.trim();

  document.getElementById("output-schnellakte").textContent = output;
}

function resetSchnellakteForm() {
  const ids = [
    "s_officer", "s_tatort", "s_zeitraum", "s_beschuldigte", "s_geschaedigte",
    "s_einheiten", "s_gegenstaende", "s_abgenommenVon", "s_bemerkung",
    "s_gezeichnet", "s_gezeichnetOfficer", "s_rechteVon", "s_rechteBeisein", "s_bussgeld"
  ];
  ids.forEach(id => document.getElementById(id).value = "");
  document.getElementById("s_rechtsbeistand").value = "keinen";
  document.getElementById("s_medizin").value = "keine";
  document.getElementById("output-schnellakte").textContent = "";
}
