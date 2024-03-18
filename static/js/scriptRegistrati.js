function controllaUsername() {
    let Username = document.getElementById("Username").value;
    if (Username.length < 4) {
      passwordErroru.textContent = "Devi indicare un username valido";
      return false;
    } else {
      passwordErroru.textContent = "";
    }
  
    return true;
  }
  
  function controllaPassword() {
    let password = document.getElementById("password").value;
    if (password.length < 8) {
      passwordError.textContent =
        "La password deve avere una lunghezza minima di 8 caratteri.";
      return false;
    } else {
      passwordError.textContent = "";
    }
    if (!/\d/.test(password)) {
      passwordError.textContent = "La password deve contenere almeno un numero";
      return false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      passwordError.textContent =
        "La password deve contenere almeno un carattere speciale";
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      passwordError.textContent =
        "La password deve contenere almeno un carattere maiuscolo";
      return false;
    }
    return true;
  }
  
  function validazioneEmail() {
    // recupero il valore della email indicata nel form
    var email = document.getElementById("email").value;
    // se non ho inserito nulla nel campo
    if (email < 5) {
      passwordErrore.textContent = "Devi indicare un indirizzo email";
      return false;
    } else {
      passwordErrore.textContent = "";
    }
    // verifico se Ã¨ un indirizzo valido
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    } else {
      passwordErrore.textContent =
        "L'indirizzo email che hai inserito non e' valido";
        return false;
    }
    return true;
  }
  
  function controllaForm() {
    if (controllaUsername() && controllaPassword() && validazioneEmail()) {
      return true;
    }
    else{
		return false;
	}
  }

$(document).ready(function () {
    $("#formRegistrati").submit(function (event) {
        var isFormValid = controllaForm();
        if (!isFormValid) {
            event.preventDefault();
        }
    });
});