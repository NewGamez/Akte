function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(div => div.classList.add('hidden'));

  // Tabs hervorheben
  const tabs = ['strafakte-tab', 'schnellakte-tab', 'kollektivakte-tab'];
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

// Hilfsfunktion Datum formatieren
function formatDatum(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('de-DE');
}

// ---------------- STRAFAKTE ----------------
function generateStrafakte() {
  const name = document.getElementById('st_nameDienst').value;
  const tatort = document.getElementById('st_tatortTatzeit').value;
  const beschuldigte = document.getElementById('st_beschuldigte').value;
  const geschaedigte = document.getElementById('st_geschaedigte').value;
  const sachverhalt = document.getElementById('st_sachverhalt').value;
  const identitaet = document.getElementById('st_identitaet').value;
  const weitere = document.getElementById('st_weitereEinheiten').value;
  const eil = document.getElementById('st_eilverfahren').value;
  const bussgeld = document.getElementById('st_bussgeld').value;

  let bemerkungen = `Das Bußgeld ist bis zum ${formatDatum(bussgeld)} [+7 Tage] zu bezahlen.\n`;
  bemerkungen += `Die dem Tatverdächtigen abgenommenen Gegenstände wurden in seinen persönlichen Spind gelegt.\n`;
  if(eil) bemerkungen += `Das Eilverfahren wurde durch ${eil} abgelehnt.\n`;

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

| Bemerkungen: |
${bemerkungen}
`.trim();

  document.getElementById('st_output').textContent = output;
}

// ---------------- SCHNELLAKTE ----------------
function generateSchnellakte() {
  const name = document.getElementById('sn_nameDienst').value;
  const tatort = document.getElementById('sn_tatortTatzeit').value;
  const beschuldigte = document.getElementById('sn_beschuldigte').value;
  const geschaedigte = document.getElementById('sn_geschaedigte').value;
  const identitaet = document.getElementById('sn_identitaet').value;
  const weitere = document.getElementById('sn_weitereEinheiten').value;
  const eil = document.getElementById('sn_eilverfahren').value;
  const bussgeld = document.getElementById('sn_bussgeld').value;

  let bemerkungen = `Das Bußgeld ist bis zum ${formatDatum(bussgeld)} [+7 Tage] zu bezahlen.\n`;
  bemerkungen += `Die dem Tatverdächtigen abgenommenen Gegenstände wurden in seinen persönlichen Spind gelegt.\n`;
  if(eil) bemerkungen += `Das Eilverfahren wurde durch ${eil} abgelehnt.\n`;

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

| Bemerkungen: |
${bemerkungen}
`.trim();

  document.getElementById('sn_output').textContent = output;
}

// ---------------- KOLLEKTIVAKTE ----------------
function generateKollektivakte() {
  const name = document.getElementById('k_nameDienst').value;
  const tatort = document.getElementById('k_tatortTatzeit').value;
  const beschuldigte = document.getElementById('k_beschuldigte').value;
  const geschaedigte = document.getElementById('k_geschaedigte').value;
  const sachverhalt = document.getElementById('k_sachverhalt').value; // korrigiert
  const identitaet = document.getElementById('k_identitaet').value;
  const weitere = document.getElementById('k_weitereEinheiten').value;
  const bestaetigtVon = document.getElementById('k_bestaetigtVon').value;
  const bestaetigtUm = document.getElementById('k_bestaetigtUm').value;

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

Kollektivakte wurde von ${bestaetigtVon} um ${bestaetigtUm} genehmigt.
`.trim();

  document.getElementById('k_output').textContent = output;
}
