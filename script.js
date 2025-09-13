let aktuelleAkte = null;

function openAkte(typ) {
  aktuelleAkte = typ;
  document.getElementById("aktenFormular").style.display = "block";

  let titel = "Formular";
  if (typ === "aktenwahl") titel = "Akte erstellen";
  if (typ === "weisungen") titel = "Weisung verfassen";
  if (typ === "dokumente") titel = "Dokument erstellen";

  document.getElementById("aktenTitel").innerText = titel;
}

function closeAkte() {
  document.getElementById("aktenFormular").style.display = "none";
  document.getElementById("akteForm").reset();
  aktuelleAkte = null;
}

function saveAkte() {
  const name = document.getElementById("akteName").value.trim();
  const datum = document.getElementById("akteDatum").value;
  const inhalt = document.getElementById("akteInhalt").value.trim();

  if (!name || !datum || !inhalt) {
    alert("Bitte alle Felder ausfüllen!");
    return;
  }

  console.log("Gespeicherter Eintrag:", {
    typ: aktuelleAkte,
    name,
    datum,
    inhalt
  });

  alert(`${aktuelleAkte} erfolgreich gespeichert!`);
  closeAkte();
}
