function generateStrafakte() {
  const officer = document.getElementById("officer").value;
  const tatort = document.getElementById("tatort").value;
  const zeitraum = document.getElementById("zeitraum").value;
  const beschuldigte = document.getElementById("beschuldigte").value;
  const geschaedigte = document.getElementById("geschaedigte").value;
  const sachverhalt = document.getElementById("sachverhalt").value;
  const einheiten = document.getElementById("einheiten").value;
  const gegenstaende = document.getElementById("gegenstaende").value;
  const bemerkung = document.getElementById("bemerkung").value;
  const strafen = document.getElementById("strafen").value;

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

| Abgenommene Gegenstände: |  Abgenommen von: ${officer.split("|")[1]?.trim() || "Unbekannt"}
${gegenstaende}

| Bemerkungen: |
${bemerkung}

| Gezeichnet von: | 
${officer.split("|")[0]?.trim()}
${officer}

${strafen}
  `.trim();

  document.getElementById("output").textContent = output;
}
