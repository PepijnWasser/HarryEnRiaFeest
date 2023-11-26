document.querySelector("button").onclick = function() {
  window.location.href = 'website.html';
  document.querySelector("#loading").style.display = "none"
}

var button2Element = document.getElementById("button2");

// Controleer of het element is gevonden
if (button2Element) {
    // Voeg een onclick-eventhandler toe
    button2Element.onclick = function() {
        alert("Button 2 is geklikt!");
        // Voeg hier de gewenste functionaliteit toe
          window.location.href = 'website.html';
          document.querySelector("#loading").style.display = "none"
    };
} else {
    console.log("Button 2 niet gevonden");
}
