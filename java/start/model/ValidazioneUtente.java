package start.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class ValidazioneUtente {
    @NotEmpty(message = "Devi indicare un username valido")
    @Size(min = 4, message = "L'username deve avere una lunghezza maggiore di 3 caratteri.")
    private String username;

    @NotEmpty(message = "La password non può essere vuota")
    @Size(min = 8, message = "La password deve avere una lunghezza maggiore di 3 caratteri.")
    @Pattern(regexp = ".*\\d.*", message = "La password deve contenere almeno un numero")
    @Pattern(regexp = ".*[!@#$%^&*(),.?\":{}|<>].*", message = "La password deve contenere almeno un carattere speciale")
    @Pattern(regexp = ".*[A-Z].*", message = "La password deve contenere almeno un carattere maiuscolo")
    private String password;

    @NotEmpty(message = "Devi indicare un indirizzo email")
    @Email(message = "L'indirizzo email che hai inserito non è valido")
    private String email;

	public ValidazioneUtente(
			@NotEmpty(message = "Devi indicare un username valido") @Size(min = 4, message = "L'username deve avere una lunghezza maggiore di 3 caratteri.") String username,
			@NotEmpty(message = "La password non può essere vuota") @Size(min = 4, message = "La password deve avere una lunghezza maggiore di 3 caratteri.") @Pattern(regexp = ".*\\d.*", message = "La password deve contenere almeno un numero") @Pattern(regexp = ".*[!@#$%^&*(),.?\":{}|<>].*", message = "La password deve contenere almeno un carattere speciale") @Pattern(regexp = ".*[A-Z].*", message = "La password deve contenere almeno un carattere maiuscolo") String password,
			@NotEmpty(message = "Devi indicare un indirizzo email") @Email(message = "L'indirizzo email che hai inserito non è valido") String email) {
		super();
		this.username = username;
		this.password = password;
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
    
    
    
}
