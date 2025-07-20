// Funktion zur Umschaltung zwischen den verschiedenen Akten-Bereichen
function showSection(id) {
  // Alle Abschnitte mit der Klasse "section" ausblenden
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('visible');
  });

  // Den gewünschten Abschnitt einblenden
  const selected = document.getElementById(id);
  if (selected) {
    selected.classList.add('visible');
  }
}
