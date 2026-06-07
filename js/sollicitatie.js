const form = document.getElementById("sollicitatieForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const data = {
        naam: document.getElementById("naam")?.value?.trim() || "",
        leeftijd: document.getElementById("leeftijd")?.value?.trim() || "",
        functie: document.getElementById("functie")?.value?.trim() || "",
        ervaring: document.getElementById("ervaring")?.value?.trim() || "",
        pluspunten: document.getElementById("pluspunten")?.value?.trim() || "",
        minpunten: document.getElementById("minpunten")?.value?.trim() || "",
        motivatie: document.getElementById("motivatie")?.value?.trim() || ""
      };

      const response = await fetch("https://floral-forest-2ed5.sing4hope.workers.dev/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      // veilige JSON parse (voorkomt crashes)
      let result = {};
      try {
        result = await response.json();
      } catch (err) {
        console.log("Geen JSON terug van server:", err);
      }

      if (response.ok && result.success) {
        alert("Sollicitatie verzonden!");
        form.reset();
      } else {
        alert("Er ging iets mis. Check console (F12).");
        console.log("Response status:", response.status);
        console.log("Result:", result);
      }

    } catch (error) {
      console.error("Fetch error:", error);
      alert("Kan geen verbinding maken met server.");
    }
  });
}
