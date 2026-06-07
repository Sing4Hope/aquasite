const form = document.getElementById("sollicitatieForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      naam: document.getElementById("naam").value.trim(),
      leeftijd: document.getElementById("leeftijd").value.trim(),
      functie: document.getElementById("functie").value.trim(),
      ervaring: document.getElementById("ervaring").value.trim(),
      pluspunten: document.getElementById("pluspunten").value.trim(),
      minpunten: document.getElementById("minpunten").value.trim(),
      motivatie: document.getElementById("motivatie").value.trim()
    };

    const response = await fetch("https://orange-rain-97cf.sing4hope.workers.dev/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Sollicitatie verzonden!");
      form.reset();
    } else {
      alert("Er ging iets mis.");
    }
  });
}
