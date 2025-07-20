// script.js

function switchTab(tabId) {
  document.querySelectorAll('#strafakte, #schnellakte, #kollektivakte').forEach(tab => tab.classList.add('hidden'));
  document.getElementById(tabId).classList.remove('hidden');

  document.querySelectorAll('button[id$="-tab"]').forEach(btn => btn.classList.remove('text-blue-500', 'font-bold', 'border-blue-500'));
  document.getElementById(`${tabId}-tab`).classList.add('text-blue-500', 'font-bold', 'border-blue-500');
}

function generateKollektivakte() {
  const officer = document.getElementById("k_officer").value;
  const dojo = document.getElementById("k_dojo").value;
  const zeit = document.getElementById("k_time").value;
  const tatort = document.getElementById("k_tatort").value;
  const zeitraum = document.getElementById("k_zeitraum").value;
  const beschuldigte = document.getElementById("k_beschuldigte").value;
  const geschaedigte = document.getElementById("k_geschaedigte").value;
  const sachverhalt = document.getElementById("k_sachverhalt").value;
  const einheiten = document.getElementById("k_einheiten").value;
  const gegenstaende = document.getElementById("k_gegenstaende").value;
  const abgenommenVon = document.getElementById("k_abgenommenVon").value;
  const bemerkung = document.getElementById("k_bemerkung").value;
  const gezeichnet = document.getElementById("k_gezeichnet").value;
  const gezeichnetInfo = document.getElementById("k_gezeichnetInfo").value;

  const output = `
| - Kollektivakte - |
Narco City Police Department
${officer}
Kollektivakte wurde von ${dojo} um ${zeit} genehmigt

| Tatort und Zeitraum: |
${tatort}
${zeitraum}

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
${bemerkung}

| Gezeichnet von: |                   
${gezeichnet}
${gezeichnetInfo}
`.trim();

  document.getElementById("output-kollektivakte").textContent = output;
}

function resetKollektivakteForm() {
  ["k_officer", "k_dojo", "k_time", "k_tatort", "k_zeitraum", "k_beschuldigte", "k_geschaedigte", "k_sachverhalt", "k_einheiten", "k_gegenstaende", "k_abgenommenVon", "k_bemerkung", "k_gezeichnet", "k_gezeichnetInfo"].forEach(id => {
    document.getElementById(id).value = "";
  });
  document.getElementById("output-kollektivakte").textContent = "";
}
