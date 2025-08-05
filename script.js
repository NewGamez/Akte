function switchTab(tabId) {
  const tabs = ['strafakte', 'schnellakte', 'kollektivakte'];
  tabs.forEach(tab => {
    const content = document.getElementById(`${tab}-content`);
    const button = document.getElementById(`${tab}-tab`);
    if (tabId === `${tab}-tab`) {
      content.classList.remove('hidden');
      button.classList.add('border-b-2', 'border-blue-500', 'text-blue-500');
    } else {
      content.classList.add('hidden');
      button.classList.remove('border-b-2', 'border-blue-500', 'text-blue-500');
    }
  });
}

function resetForm(formId) {
  const container = document.getElementById(formId);
  if (!container) return;

  container.querySelectorAll('textarea, input[type="date"]').forEach(el => el.value = '');
  container.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
  container.querySelectorAll('textarea[readonly]').forEach(el => el.value = '');
}

// Strafakte generieren
function generateStrafakte() {
  const rechtsbeistand = document.getElementById('checkboxRechtsbeistand_s').checked ? '✓' : '✗';
  const medizinisch = document.getElementById('checkboxMedizin_s').checked ? '✓' : '✗';
  const output = `

Strafakte - N.C.P.D. || Dienststelle II

Name / Dienstnummer: ${getValue('officer')}
Tatort: ${getValue('tatort')}
Tatzeit: ${getValue('zeitraum')}
Beschuldigte Person(en): ${getValue('beschuldigte')}
Geschädigte Person(en): ${getValue('geschaedigte')}
Sachverhalt:
${getValue('sachverhalt')}
Weitere Einheiten / Zeugen: ${getValue('einheiten')}
Abgenommene Gegenstände: ${getValue('gegenstaende')}
Abgenommen von: ${getValue('abgenommenVon')}
Rechte verlesen von: ${getValue('rechteVon')} im Beisein von: ${getValue('rechteBeisein')}

Rechte:
- Recht zu Schweigen: ${rechtsbeistand}
- Medizinische Versorgung: ${medizinisch}
- Recht auf Rechtsbeistand: ${rechtsbeistand}

Datum: ${getValue('bussgeld')}
Weitere Bemerkungen: ${getValue('bemerkung')}
Strafen: ${getValue('strafen')}

Gezeichnet: ${getValue('zeichner')} - ${getValue('zeichnerInfo')}
  `;
  document.getElementById('output').value = output;
}

// Schnellakte generieren
function generateSchnellakte() {
  const rechtsbeistand = document.getElementById('checkboxRechtsbeistand_sn').checked ? '✓' : '✗';
  const medizinisch = document.getElementById('checkboxMedizin_sn').checked ? '✓' : '✗';
  const output = `

Schnellakte - N.C.P.D. || Dienststelle II

Name / Dienstnummer: ${getValue('s_officer')}
Tatort: ${getValue('s_tatort')}
Tatzeit: ${getValue('s_zeitraum')}
Beschuldigte Person(en): ${getValue('s_beschuldigte')}
Geschädigte Person(en): ${getValue('s_geschaedigte')}
Einheiten / Zeugen: ${getValue('s_einheiten')}
Abgenommene Gegenstände: ${getValue('s_gegenstaende')}
Abgenommen von: ${getValue('s_abgenommenVon')}
Rechte verlesen von: ${getValue('s_rechteVon')} im Beisein von: ${getValue('s_rechteBeisein')}

Rechte:
- Recht zu Schweigen: ${rechtsbeistand}
- Medizinische Versorgung: ${medizinisch}
- Recht auf Rechtsbeistand: ${rechtsbeistand}

Datum: ${getValue('s_bussgeld')}
Weitere Bemerkungen: ${getValue('s_bemerkung')}

Gezeichnet: ${getValue('s_gezeichnet')} - ${getValue('s_gezeichnetOfficer')}
  `;
  document.getElementById('output-schnellakte').value = output;
}

// Kollektivakte generieren
function generateKollektivakte() {
  const rechtsbeistand = document.getElementById('checkboxRechtsbeistand_k').checked ? '✓' : '✗';
  const medizinisch = document.getElementById('checkboxMedizin_k').checked ? '✓' : '✗';
  const output = `

Kollektivakte - N.C.P.D. || Dienststelle II

Name / Dienstnummer: ${getValue('k_officer')}
Genehmigt von: ${getValue('k_genehmigtVon')} um ${getValue('k_uhrzeit')}
Tatort: ${getValue('k_tatort')}
Tatzeitraum: ${getValue('k_zeitraum')}
Beschuldigte Person(en): ${getValue('k_beschuldigte')}
Geschädigte Person(en): ${getValue('k_geschaedigte')}
Sachverhalt:
${getValue('k_sachverhalt')}
Einheiten / Zeugen: ${getValue('k_einheiten')}
Abgenommene Gegenstände: ${getValue('k_gegenstaende')}
Abgenommen von: ${getValue('k_abgenommenVon')}
Rechte verlesen von: ${getValue('k_rechteVon')} im Beisein von: ${getValue('k_rechteBeisein')}

Rechte:
- Recht zu Schweigen: ${rechtsbeistand}
- Medizinische Versorgung: ${medizinisch}
- Recht auf Rechtsbeistand: ${rechtsbeistand}

Datum: ${getValue('k_bussgeld')}
  `;
  document.getElementById('output-kollektivakte').value = output;
}

function getValue(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : '';
}
