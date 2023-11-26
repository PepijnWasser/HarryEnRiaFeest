document.querySelector("button").onclick = function() {
  window.location.href = 'website.html';
  document.querySelector("#loading").style.display = "none"
}

// Zoek het knopelement met id "button2"
var button2Element = document.getElementById("button2");
console.log
// Controleer of het element is gevonden
if (button2Element) {
    // Voeg een gebeurtenisluisteraar toe voor het klikken van de knop
    button2Element.addEventListener("click", function() {
        // Verander de locatie naar de gewenste pagina
        window.location.href = "PlainVideo.html";
    });
} else {
    // Melding als het element niet is gevonden
    console.log("Element met id 'button2' niet gevonden.");
}
