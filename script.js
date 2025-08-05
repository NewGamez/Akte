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

function formatBussgeldDatum(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  date.setDate(date.getDate() + 7);
  return `${String(date.getDate()).padStart(2, "0")}.${String(date.getMonth() + 1).padStart(2, "0")}.${date.getFullYear()}`;
}

function generateStrafakte() {
  const get = id => document.getElementById(id).value;
  const checked = id => document.getElementById(id).checked;

  const output = `
| - Strafakte - |

Narco City Police Department
${get("officer")}

| Tatort: | ${get("tatort")}
| Zeitraum: | ${get("zeitraum")}

| Beschuldigte: | ${get("beschuldigte")}
| Geschädigte: | ${get("geschaedigte")}

| Sachverhalt: |
${get("sachverhalt")}

| Einheiten/Zeugen: | ${get("einheiten")}

| Gegenstände: |
${get("gegenstaende")}
|Abgenommen von: | ${get("abgenommenVon")}

| Bemerkungen: |
Die Rechte wurden dem Beschuldigten durch ${get("rechteVon")} im Beisein von ${get("rechteBeisein")} verlesen und verstanden.
Dieser ${checked("checkboxRechtsbeistand_s") ? "bestand" : "verzichtete"} auf einen Rechtsbeistand.
Der TV ${checked("checkboxMedizin_s") ? "bestand" : "verzichtete"} auf medizinische Versorgung.
${get("bussgeld") ? `Das Bußgeld ist bis zum ${formatBussgeldDatum(get("bussgeld"))} [+7 Tage] zu bezahlen.` : ""}
${get("bemerkung")}

| Gezeichnet von: |
${get("zeichner")} (${get("zeichnerInfo")})

${get("strafen")}
`.trim();

  document.getElementById("output").textContent = output;
}

function generateSchnellakte() {
  const get = id => document.getElementById(id).value;
  const checked = id => document.getElementById(id).checked;

  const output = `
| - Schnellakte - |

Narco City Police Department
${get("s_officer")}

| Tatort: | ${get("s_tatort")}
| Tatzeit: | ${get("s_zeitraum")}

| Beschuldigte: | ${get("s_beschuldigte")}
| Geschädigte: | ${get("s_geschaedigte")}

| Einheiten/Zeugen: | ${get("s_einheiten")}

| Gegenstände: |
${get("s_gegenstaende")}
|Abgenommen von: ${get("s_abgenommenVon")}

| Bemerkungen: |
Die Rechte wurden dem Beschuldigten durch ${get("s_rechteVon")} im Beisein von ${get("s_rechteBeisein")} verlesen und verstanden.
Dieser ${checked("checkboxRechtsbeistand_sn") ? "bestand" : "verzichtete"} auf einen Rechtsbeistand.
Der TV ${checked("checkboxMedizin_sn") ? "bestand" : "verzichtete"} auf medizinische Versorgung.
${get("s_bussgeld") ? `Das Bußgeld ist bis zum ${formatBussgeldDatum(get("s_bussgeld"))} [+7 Tage] zu bezahlen.` : ""}
${get("s_bemerkung")}

| Gezeichnet von: |
${get("s_gezeichnet")} (${get("s_gezeichnetOfficer")})
`.trim();

  document.getElementById("output-schnellakte").textContent = output;
}

function generateKollektivakte() {
  const get = id => document.getElementById(id).value;
  const checked = id => document.getElementById(id).checked;

  const output = `
| - Kollektivakte - |

Narco City Police Department
${get("k_officer")}

| Genehmigt von: | ${get("k_genehmigtVon")} um ${get("k_uhrzeit")}
| Tatort: | ${get("k_tatort")}
| Tatzeitraum: | ${get("k_zeitraum")}

| Beschuldigte: | ${get("k_beschuldigte")}
| Geschädigte: | ${get("k_geschaedigte")}

| Sachverhalt:
${get("k_sachverhalt")}

| Einheiten/Zeugen: ${get("k_einheiten")}

| Gegenstände: |
${get("k_gegenstaende")}
| Abgenommen von: | ${get("k_abgenommenVon")}

| Bemerkungen: |
Die Rechte wurden dem Beschuldigten durch ${get("k_rechteVon")} im Beisein von ${get("k_rechteBeisein")} verlesen und verstanden.
Dieser ${checked("checkboxRechtsbeistand_k") ? "bestand" : "verzichtete"} auf einen Rechtsbeistand.
Der TV ${checked("checkboxMedizin_k") ? "bestand" : "verzichtete"} auf medizinische Versorgung.
${get("k_bussgeld") ? `Das Bußgeld ist bis zum ${formatBussgeldDatum(get("k_bussgeld"))} [+7 Tage] zu bezahlen.` : ""}
`.trim();

  document.getElementById("output-kollektivakte").textContent = output;

function formatBussgeldDatum(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('de-DE');  // Gibt z.B. "05.08.2025" zurück
}
