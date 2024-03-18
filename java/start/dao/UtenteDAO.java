package start.dao;

import start.model.Utente;

public interface UtenteDAO {
	//Definisci i query methods
	Utente recuperaUtenteEmailPass(String email, String password);
	Utente recuperaUtenteEmail(String email);
	Utente recuperaUtenteUsername(String username);
	void inserisciUtente(Utente utente);
}
