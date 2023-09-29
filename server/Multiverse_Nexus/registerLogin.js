// Recupera il bottone "Account" e il primo popup dalla pagina HTML
const accountBtn = document.getElementById("accountBtn");
const accountModal = document.getElementById("accountModal");

// Aggiungi un gestore di eventi per il clic sul bottone "Account"
accountBtn.addEventListener("click", function() {
    // Mostra il primo popup
    accountModal.style.display = "block";
});

// Recupera il pulsante di registrazione e il pulsante di login dal primo popup
const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");

// Aggiungi un gestore di eventi per il clic sul pulsante di registrazione
registerBtn.addEventListener("click", function() {
    // Nascondi il primo popup
    accountModal.style.display = "none";
    // Mostra il secondo popup per la registrazione
    registrationModal.style.display = "block";
});

// Aggiungi un gestore di eventi per il clic sul pulsante di login
loginBtn.addEventListener("click", function() {
    // Nascondi il primo popup
    accountModal.style.display = "none";
    // Mostra il secondo popup per il login
    loginModal.style.display = "block";
});

// Recupera i secondi popup per la registrazione e il login dalla pagina HTML
const registrationModal = document.getElementById("registrationModal");
const loginModal = document.getElementById("loginModal");

// Recupera il pulsante di chiusura per i secondi popup
const closeRegistrationBtn = document.getElementById("closeRegistration");
const closeLoginBtn = document.getElementById("closeLogin");

// Aggiungi un gestore di eventi per il clic sul pulsante di chiusura del popup di registrazione
closeRegistrationBtn.addEventListener("click", function() {
    // Nascondi il secondo popup di registrazione
    registrationModal.style.display = "none";
});

// Aggiungi un gestore di eventi per il clic sul pulsante di chiusura del popup di login
closeLoginBtn.addEventListener("click", function() {
    // Nascondi il secondo popup di login
    loginModal.style.display = "none";
});
