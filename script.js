function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(div => div.classList.add('hidden'));
  const tabs = ['strafakte-tab', 'schnellakte-tab', 'kollektivakte-tab', 'dokumente-tab', 'weisungen-tab'];
  tabs.forEach(id => {
    const btn = document.getElementById(id);
    if (tabId === id.replace('-tab', '')) {
      btn.classList.add('border-blue-500', 'text-blue-500', 'border-b-2');
    } else {
      btn.classList.remove('border-blue-500', 'text-blue-500', 'border-b-2');
    }
  });
  document.getElementById(tabId).classList.remove('hidden');
}

function formatDatum(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('de-DE');
}

function openModal(content) {
  document.getElementById('akteContent').textContent = content;
  document.getElementById('akteModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('akteModal').classList.add('hidden');
}

// STRAFAKTE
function generateStrafakte() {
  const name = document.getElementById('st_nameDienst').value;
  const tatort = document.getElementById('st_tatortTatzeit').value;
  const beschuldigte = document.getElementById('st_beschuldigte').value;
  const geschaedigte = document.getElementById('st_geschaedigte').value;
  const sachverhalt = document.getElementById('st_sachverhalt').value;
  const gegenstaende = document.getElementById('st_gegenstaende').value;
  const abgenommenVon = document.getElementById('st_abgenommenVon').value;
  const identitaet = document.getElementById('st_identitaet').value;
  const weitere = document.getElementById('st_weitereEinheiten').value;
  const eil = document.getElementById('st_eilverfahren').value;
  const bussgeld = document.getElementById('st_bussgeld').value;

  const verlesen = document.getElementById('st_verlesen').value;
  const beisein = document.getElementById('st_beisein').value;
  const rechtsbeistand = document.getElementById('st_rechtsbeistand').value;
  const medizin = document.getElementById('st_medizin').value;

  let bemerkungen = `Die Rechte wurden dem Beschuldigten durch ${verlesen} im Beisein von ${beisein} verlesen und verstanden.\n`;
  bemerkungen += `Dieser ${rechtsbeistand} auf einen Rechtsbeistand.\n`;
  bemerkungen += `Der TV ${medizin} auf medizinische Versorgung.\n`;
  bemerkungen += `Das Bußgeld ist bis zum ${formatDatum(bussgeld)} zu bezahlen.\n`;
  bemerkungen += `Die dem Tatverdächtigen abgenommenen Gegenstände wurden in seinen persönlichen Spind gelegt.\n`;
  if(eil) bemerkungen += `Das Eilverfahren wurde durch ${eil} abgelehnt.\n`;

  const gezeichnetVon = document.getElementById('st_gezeichnetVon').value;

const output = `
| - Strafakte - |

Narco City Police Department
${name}

| Tatort und Zeitraum: |
${tatort}

| Beschuldigte Person(en): |
${beschuldigte}

| Geschädigte Person(en): |
${geschaedigte}

| Sachverhalt aus Sicht des NCPDs: |
${sachverhalt}

Die Identität wurde mittels ${identitaet} festgestellt.

| Weitere beteiligte Einheiten/Zeugen: |
${weitere}

| Abgenommene Gegenstände: | Abgenommen von: ${abgenommenVon}
${gegenstaende}

| Bemerkungen: |
${bemerkungen}

| Gezeichnet von: |
${gezeichnetVon}
`.trim();

  openModal(output);
}

// SCHNELLAKTE
function generateSchnellakte() {
  const name = document.getElementById('sn_nameDienst').value;
  const tatort = document.getElementById('sn_tatortTatzeit').value;
  const beschuldigte = document.getElementById('sn_beschuldigte').value;
  const geschaedigte = document.getElementById('sn_geschaedigte').value;
  const sachverhalt = document.getElementById('sn_sachverhalt') ? document.getElementById('sn_sachverhalt').value : '';
  const gegenstaende = document.getElementById('sn_gegenstaende').value;
  const abgenommenVon = document.getElementById('sn_abgenommenVon').value;
  const identitaet = document.getElementById('sn_identitaet').value;
  const weitere = document.getElementById('sn_weitereEinheiten').value;
  const bussgeld = document.getElementById('sn_bussgeld').value;

  const verlesen = document.getElementById('sn_verlesen').value;
  const beisein = document.getElementById('sn_beisein').value;
  const rechtsbeistand = document.getElementById('sn_rechtsbeistand').value;
  const medizin = document.getElementById('sn_medizin').value;

  let bemerkungen = `Die Rechte wurden dem Beschuldigten durch ${verlesen} im Beisein von ${beisein} verlesen und verstanden.\n`;
  bemerkungen += `Dieser ${rechtsbeistand} auf einen Rechtsbeistand.\n`;
  bemerkungen += `Der TV ${medizin} auf medizinische Versorgung.\n`;
  bemerkungen += `Das Bußgeld ist bis zum ${formatDatum(bussgeld)} zu bezahlen.\n`;
  bemerkungen += `Die dem Tatverdächtigen abgenommenen Gegenstände wurden in seinen persönlichen Spind gelegt.\n`;

  const gezeichnetVon = document.getElementById('sn_gezeichnetVon').value;

  const output = `
| - Schnellakte - |

Narco City Police Department
${name}

| Tatort und Zeitraum: |
${tatort}

| Beschuldigte Person(en): |
${beschuldigte}

| Geschädigte Person(en): |
${geschaedigte}

Die Identität wurde mittels ${identitaet} festgestellt.

| Weitere beteiligte Einheiten/Zeugen: |
${weitere}

| Abgenommene Gegenstände: | Abgenommen von: ${abgenommenVon}
${gegenstaende}

| Bemerkungen: |
${bemerkungen}

| Gezeichnet von: |
${gezeichnetVon}
`.trim();

  openModal(output);
}

// KOLLEKTIVAKTE
function generateKollektivakte() {
  const name = document.getElementById('k_nameDienst').value;
  const tatort = document.getElementById('k_tatortTatzeit').value;
  const beschuldigte = document.getElementById('k_beschuldigte').value;
  const geschaedigte = document.getElementById('k_geschaedigte').value;
  const sachverhalt = document.getElementById('k_sachverhalt').value;
  const gegenstaende = document.getElementById('k_gegenstaende').value;
  const abgenommenVon = document.getElementById('k_abgenommenVon').value;
  const identitaet = document.getElementById('k_identitaet').value;
  const weitere = document.getElementById('k_weitereEinheiten').value;
  const bestaetigtVon = document.getElementById('k_bestaetigtVon').value;
  const bestaetigtUm = document.getElementById('k_bestaetigtUm').value;
  const bussgeld = document.getElementById('k_bussgeld').value;

  const verlesen = document.getElementById('k_verlesen').value;
  const beisein = document.getElementById('k_beisein').value;
  const rechtsbeistand = document.getElementById('k_rechtsbeistand').value;
  const medizin = document.getElementById('k_medizin').value;

  let bemerkungen = `Die Rechte wurden den Beschuldigten durch ${verlesen} im Beisein von ${beisein} verlesen und verstanden.\n`;
  bemerkungen += `Diese ${rechtsbeistand} auf einen Rechtsbeistand.\n`;
  bemerkungen += `Die TV's ${medizin} auf medizinische Versorgung.\n`;
  bemerkungen += `Das Bußgeld ist bis zum ${formatDatum(bussgeld)} zu bezahlen.\n`;
  bemerkungen += `Die dem Tatverdächtigen abgenommenen Gegenstände wurden in seinen persönlichen Spind gelegt.\n`;

  const gezeichnetVon = document.getElementById('k_gezeichnetVon').value;

  const output = `
| - Kollektivakte - |

Narco City Police Department
${name}

| Tatort und Zeitraum: |
${tatort}

| Beschuldigte Person(en): |
${beschuldigte}

| Geschädigte Person(en): |
${geschaedigte}

| Sachverhalt: |
${sachverhalt}

Die Identität wurde mittels ${identitaet} festgestellt.

| Weitere beteiligte Einheiten/Zeugen: |
${weitere}

| Abgenommene Gegenstände: | Abgenommen von: ${abgenommenVon}
${gegenstaende}

| Bemerkungen: |
${bemerkungen}

Kollektivakte wurde von ${bestaetigtVon} um ${bestaetigtUm} genehmigt.

| Gezeichnet von: |
${gezeichnetVon}
`.trim();

  openModal(output);
}
