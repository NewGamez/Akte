// Reiter-Steuerung
function switchTab(tabId) {
  const tabs = ["strafakte", "schnellakte", "kollektivakte"];
  tabs.forEach((tab) => {
    document.getElementById(`${tab}-tab`).classList.remove("text-blue-500", "border-blue-500");
    document.getElementById(`${tab}-tab`).classList.add("text-gray-400");
    document.getElementById(`${tab}-content`).classList.add("hidden");
  });
  document.getElementById(tabId).classList.add("text-blue-500", "border-blue-500");
  document.getElementById(tabId).classList.remove("text-gray-400");
  document.getElementById(`${tabId.replace("-tab", "")}-content`).classList.remove("hidden");
}

// Text kopieren
function copyToClipboard(elementId) {
  const el = document.getElementById(elementId);
  el.select();
  el.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(el.value);
  alert("Kopiert!");
}

// Formular zurücksetzen
function resetStrafakteForm() {
  const fields = [
    "officer", "tatort", "zeitraum", "beschuldigte", "geschaedigte", "sachverhalt",
    "einheiten", "gegenstaende", "abgenommenVon", "rechteVon", "rechteBeisein",
    "bussgeld", "bemerkung", "strafen", "zeichner", "zeichnerInfo"
  ];
  fields.forEach((id) => document.getElementById(id).value = "");
  document.getElementById("checkboxRechtsbeistand").checked = false;
  document.getElementById("checkboxMedizin").checked = false;
  document.getElementById("output").textContent = "";
}

// STRAFAKTE GENERIEREN
function generateStrafakte() {
  const officer = document.getElementById("officer").value;
  const tatort = document.getElementById("tatort").value;
  const zeitraum = document.getElementById("zeitraum").value;
  const beschuldigte = document.getElementById("beschuldigte").value;
  const geschaedigte = document.getElementById("geschaedigte").value;
  const sachverhalt = document.getElementById("sachverhalt").value;
  const einheiten = document.getElementById("einheiten").value;
  const gegenstaende = document.getElementById("gegenstaende").value;
  const abgenommenVon = document.getElementById("abgenommenVon").value;
  const rechteVon = document.getElementById("rechteVon").value;
  const rechteBeisein = document.getElementById("rechteBeisein").value;
  const checkboxRechtsbeistand = document.getElementById("checkboxRechtsbeistand").checked;
  const checkboxMedizin = document.getElementById("checkboxMedizin").checked;
  const bussgeld = document.getElementById("bussgeld").value;
  const bemerkung = document.getElementById("bemerkung").value;
  const strafen = document.getElementById("strafen").value;
  const zeichner = document.getElementById("zeichner").value;
  const zeichnerInfo = document.getElementById("zeichnerInfo").value;

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
Die Rechte wurden dem Beschuldigten durch ${rechteVon || "PD-XX"} im Beisein von ${rechteBeisein || "PD-XX"} verlesen und verstanden.
Dieser ${checkboxRechtsbeistand ? "bestand" : "verzichtete"} auf einen Rechtsbeistand.
Der TV ${checkboxMedizin ? "bestand" : "verzichtete"} auf medizinische Versorgung.
${bussgeld ? `Das Bußgeld ist bis zum ${bussgeldDatumText} [+7 Tage] zu bezahlen.` : ""}
Die dem Tatverdächtigen abgenommenen Gegenstände wurden in seinen persönlichen Spind gelegt.
${bemerkung}
  `.trim();

  const output = `
| Officer: ${officer}
| Tatort: ${tatort}
| Tatzeitraum: ${zeitraum}
| Beschuldigte(r): ${beschuldigte}
| Geschädigte(r): ${geschaedigte}
| Sachverhalt: ${sachverhalt}
| Beteiligte Einheiten/Zeugen: ${einheiten}
| Abgenommene Gegenstände: ${gegenstaende}
| Abgenommen von: ${abgenommenVon}
| Strafen/Vergehen: ${strafen}
| Bemerkungen:
${bemerkungstext}
| Gezeichnet: ${zeichner} (${zeichnerInfo})
  `;

  document.getElementById("output").textContent = output;
}
