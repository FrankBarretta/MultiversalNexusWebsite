var zoomContainer = document.getElementById("zoom-container");

panzoom(zoomContainer, {
  zoomSpeed: 0.1,
  bounds: true,
  maxZoom: 4,
  minZoom: 1,
});

// Funzione per generare stelle in modo Random sullo schermo
function createRandomStars() {
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  var numStars = 50; // Numero di stelle da generare automaticamente

  for (var i = 0; i < numStars; i++) {
    var x = Math.random() * screenWidth;
    var y = Math.random() * screenHeight;

    createStar(x, y, "popup" + (i + 1)); // Chiamata alla funzione createStar per creare la stella
  }
}

createRandomStars(); // Chiamata per creare le stelle automatiche in tutto lo schermo



// Funzione per generare le stelle scritte sotto di diverso colore e dimensione
function createStar(x, y, popupId, size, color) {
  var star = document.createElement("div");
  star.className = "star";

  // Imposta la dimensione personalizzata se è stata fornita
  if (size) {
    star.style.width = size + "px";
    star.style.height = size + "px";
  } else {
    star.style.width = Math.random() * 3 + "px"; // Dimensione casuale
    star.style.height = star.style.width;
  }

  // Imposta il colore personalizzato se è stato fornito
  if (color) {
    star.style.backgroundColor = color;
  }

  star.style.top = y + "px";
  star.style.left = x + "px";
  document.getElementById("stars").appendChild(star);

  star.addEventListener("click", function() {
    var popup = document.getElementById(popupId);
    popup.classList.add("active-popup");
  });
}

// Esempio di creazione di una stella con dimensione personalizzata e luce sfocata
//createStar(100, 200, "popup1", 15, "white"); // Dimensione personalizzata: 10px, Colore personalizzato: bianco
//createStar(300, 150, "popup2", null, "red"); // Dimensione casuale, Colore personalizzato: rosso


createStar(100, 200, "popup1", 5, "blue"); // Dimensione personalizzata: 15px, Colore personalizzato: Blu
createStar(300, 150, "popup2", 5, "blue"); // Dimensione personalizzata: 15px, Colore personalizzato: Blu
createStar(400, 250, "popup3", 5, "blue");
createStar(150, 300, "popup4", 5, "blue");
createStar(250, 100, "popup5", 5, "blue");



// Get all close buttons
var closeButtons = document.getElementsByClassName('close-popup');

// Add click event listener to each close button
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function() {
        // 'this' refers to the close button that was clicked
        // 'parentNode' refers to the enclosing popup
        this.parentNode.classList.remove('active-popup');
    });
}
