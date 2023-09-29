var scale = 1;
var originX = 0;
var originY = 0;
var translateX = 0;
var translateY = 0;
var minScale = 0.8; // Scala minima consentita
var maxScale = 2; // Scala massima consentita
var isDragging = false;
var dragStartX = 0;
var dragStartY = 0;

function zoom(event) {
  var rect = document.body.getBoundingClientRect();

  // Imposta l'origine della trasformazione in base alle coordinate del mouse
  // rispetto alle dimensioni del documento
  var offsetX = event.clientX - rect.left;
  var offsetY = event.clientY - rect.top;

  // Calcola le dimensioni del documento invece delle dimensioni visibili nel viewport
  var docWidth = document.documentElement.scrollWidth;
  var docHeight = document.documentElement.scrollHeight;

  // Considera le dimensioni del documento quando imposti l'origine della trasformazione
  originX = (offsetX - translateX) / (docWidth * scale) * 100;
  originY = (offsetY - translateY) / (docHeight * scale) * 100;

  document.body.style.transformOrigin = originX + "% " + originY + "%";
  document.getElementById("stars").style.transformOrigin = originX + "% " + originY + "%";

  // Calcola i limiti di traslazione per evitare lo spostamento oltre i bordi del documento
  var currentWidth = docWidth * scale;
  var currentHeight = docHeight * scale;
  var translateMaxX = (currentWidth - rect.width) / 2;
  var translateMaxY = (currentHeight - rect.height) / 2;
  translateX = Math.min(Math.max(translateX, -translateMaxX), translateMaxX);
  translateY = Math.min(Math.max(translateY, -translateMaxY), translateMaxY);

  // Applica la trasformazione al body e agli elementi stellari
  document.body.style.transform = "scale(" + scale + ") translate(" + translateX + "px, " + translateY + "px)";
  document.getElementById("stars").style.transform = "scale(" + scale + ")";
}

function createStar(x, y, popupId) {
  var star = document.createElement("div");
  star.className = "star";
  star.style.width = Math.random() * 3 + "px";
  star.style.height = star.style.width;
  star.style.top = y + "px";
  star.style.left = x + "px";
  document.getElementById("stars").appendChild(star);

  star.addEventListener("click", function() {
    var popup = document.getElementById(popupId);
    popup.classList.add("active-popup");
  });
}

createStar(100, 200, "popup1");
createStar(300, 150, "popup2");
createStar(400, 250, "popup3");
createStar(150, 300, "popup4");
createStar(250, 100, "popup5");
createStar(50, 350, "popup6");
createStar(200, 200, "popup7");
createStar(350, 400, "popup8");
createStar(100, 450, "popup9");
createStar(300, 50, "popup10");
createStar(450, 300, "popup11");
createStar(50, 100, "popup12");
createStar(800, 500, "popup13");
createStar(400, 600, "popup14");
createStar(600, 300, "popup15");
createStar(200, 700, "popup16");
createStar(400, 400, "popup17");
createStar(700, 800, "popup18");
createStar(300, 900, "popup19");
createStar(600, 200, "popup20");
createStar(900, 600, "popup21");
createStar(100, 200, "popup22");
createStar(500, 300, "popup23");
createStar(800, 400, "popup24");
createStar(200, 800, "popup25");
createStar(500, 700, "popup26");
createStar(900, 300, "popup27");
createStar(100, 600, "popup28");
createStar(1200, 800, "popup29");
createStar(600, 1000, "popup30");
createStar(900, 500, "popup31");
createStar(300, 1200, "popup32");
createStar(600, 700, "popup33");
createStar(1100, 1300, "popup34");
createStar(400, 1500, "popup35");
createStar(800, 300, "popup36");
createStar(1300, 900, "popup37");
createStar(200, 400, "popup38");
createStar(700, 500, "popup39");
createStar(1200, 600, "popup40");
createStar(300, 1100, "popup41");
createStar(700, 1000, "popup42");
createStar(1300, 400, "popup43");
createStar(200, 900, "popup44");
createStar(600, 1400, "popup45");
createStar(1100, 200, "popup46");
createStar(400, 300, "popup47");
createStar(900, 400, "popup48");
createStar(1400, 600, "popup49");
createStar(300, 1300, "popup50");
createStar(800, 1200, "popup51");
createStar(1300, 100, "popup52");
createStar(200, 600, "popup53");
createStar(600, 900, "popup54");
createStar(1200, 400, "popup55");
createStar(300, 1100, "popup56");
createStar(700, 1400, "popup57");
createStar(1300, 200, "popup58");
createStar(200, 500, "popup59");
createStar(600, 600, "popup60");


// Add the zoom functionality
window.addEventListener('wheel', function(event) {
  // Calcola le coordinate del mouse rispetto all'elemento body
  var offsetX = event.clientX - document.body.getBoundingClientRect().left;
  var offsetY = event.clientY - document.body.getBoundingClientRect().top;

  // Calcola le coordinate del mouse rispetto alle dimensioni attuali del documento
  var x = (offsetX - translateX) / scale;
  var y = (offsetY - translateY) / scale;

  // Zoom in or out based on the direction of the wheel event
  if (event.deltaY < 0)
    scale *= 1.1;
  else
    scale /= 1.1;

  // Clamp the scale value between minScale and maxScale
  scale = Math.max(minScale, Math.min(maxScale, scale));

  // Calcola la nuova traslazione per mantenere il mouse sullo stesso punto del documento
  translateX = offsetX - x * scale;
  translateY = offsetY - y * scale;

  zoom(event);
});


// Add the drag functionality
window.addEventListener('mousedown', function(event) {
  isDragging = true;
  dragStartX = event.clientX;
  dragStartY = event.clientY;
});

window.addEventListener('mousemove', function(event) {
  if (isDragging) {
    translateX += event.clientX - dragStartX;
    translateY += event.clientY - dragStartY;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    zoom(event);  // to update the transformation
  }
});

window.addEventListener('mouseup', function(event) {
  isDragging = false;
});