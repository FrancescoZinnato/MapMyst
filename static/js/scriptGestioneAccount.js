var username = (document.getElementById("username").readOnly = true);

var password = (document.getElementById("password").readOnly = true);

var password = (document.getElementById("email").readOnly = true);

var username1 = (document.getElementById("username1").readOnly = true);

var password1 = (document.getElementById("password1").readOnly = true);

var email1 = (document.getElementById("email1").readOnly = true);

var confermaDatiButton = document.getElementById("confermaDati");

// Disabilita il pulsante
confermaDatiButton.disabled = true;

function cambiaDati() {
  var email1 = document.getElementById("email1").value;

  var password1 = document.getElementById("password1").value;

  if (document.getElementById(cambiaDati) === onclick) {
    email1 = document.getElementById("password1").readOnly = false;

    password1 = document.getElementById("email1").readOnly = false;
  }
}

function controllaForm(event) {
  event.preventDefault(); // Evita l'invio predefinito del modulo
  if (cambiaDati()) {
    document.getElementById("cambiaDati").submit(); // Invio del modulo
  }
}

$(document).ready(function () {
  $("#cambiaDati").on("click", controllaForm);
});

$(document).ready(function () {
  $("#email1, #password1").on("input", function () {
    confermaDati();
  });

  $("#confermaDati").on("click", controllaFormD); // Aggiornato l'ID del bottone qui
});

function confermaDati() {
  var email1 = document.getElementById("email1").value;
  var password1 = document.getElementById("password1").value;
  var bottone = document.getElementById("confermaDati");
  var confermaDatiButton = document.getElementById("confermaDati");

  // Rimuovi eventuali errori precedenti
  passwordError.textContent = "";
  passwordErrorE.textContent = "";

  // Controlla le condizioni sui dati
  if (password1.length < 4) {
    passwordError.textContent =
      "La password deve avere una lunghezza maggiore di 3 caratteri.";
    resetPulsante(bottone);
    return false;
  }

  if (!/\d/.test(password1)) {
    passwordError.textContent = "La password deve contenere almeno un numero";
    resetPulsante(bottone);
    return false;
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password1)) {
    passwordError.textContent =
      "La password deve contenere almeno un carattere speciale";
    resetPulsante(bottone);
    return false;
  }

  if (!/[A-Z]/.test(password1)) {
    passwordError.textContent =
      "La password deve contenere almeno un carattere maiuscolo";
    resetPulsante(bottone);
    return false;
  }

  if (email1.length < 1) {
    passwordErrorE.textContent = "Devi indicare un indirizzo email";
    resetPulsante(bottone);
    return false;
  }

  // verifico se è un indirizzo valido
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email1)) {
    passwordErrorE.textContent =
      "L'indirizzo email che hai inserito non è valido";
    resetPulsante(bottone);
    return false;
  }

  // Se tutti i dati sono corretti, abilita il pulsante
  bottone.disabled = false;
  bottone.style.backgroundColor = "rgb(145, 67, 12)";
  return true;
}

// Funzione per reimpostare lo stato del pulsante
function resetPulsante(button) {
  button.disabled = true;
  button.style.backgroundColor = "";
}

$(document).ready(function () {
    $("#formCambioDati").submit(function (event) {
        var isFormValid = controllaForm();
        if (!isFormValid) {
            event.preventDefault();
        }
    });
    
    $('#dropbuilder').on('click', function(e){
  if($('#sceltaBuilder').css("display") == "none"){
    $('#sceltaBuilder').css({
     'display': 'block',
     'left': e.pageX-5+'px',
     'top': e.pageY-5+'px',
     'z-index': '9999'
    })
  }else{
    $('#sceltaBuilder').css({
    'display': 'none',
    'z-index': '-9999'
  })
  }
});

$('#sceltaBuilder').on('mouseleave', function(){
  $('#sceltaBuilder').css({
    'display': 'none',
    'z-index': '-9999'
  })
});
});
