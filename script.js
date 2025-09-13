let aktuelleAkte = null;

function openAktenwahl() {
  document.getElementById("aktenAuswahl").style.display = "block";
  document.getElementById("aktenFormular").style.display = "none";
}

function openAkte(typ) {
  aktuelleAkte = typ;
  document.getElementById("aktenAuswahl").style.display = "none";
  document.getElementById("aktenFormular").style.display = "block";

  let titel = "Akte";
  if (typ === "strafakte") titel = "Strafakte erstellen";
  if (typ === "schnellakte") titel = "Schnellakte erstellen";
  if (typ === "kollektivakte") titel = "Kollektivakte erstellen";

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

  const output = 
`Typ: ${aktuelleAkte.toUpperCase()}
Name: ${name}
Datum: ${datum}

${inhalt}`;

  document.getElementById("akteOutput").innerText = output;
  document.getElementById("akteModal").style.display = "block";
}

function closeModal() {
  document.getElementById("akteModal").style.display = "none";
}
