package start.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import start.dao.UtenteDAO;
import start.model.Utente;
import start.repository.UtenteRepository;

@Service
public class UtenteService implements UtenteDAO{
	@Autowired
	UtenteRepository rep;
	//Implementa metodi della classe DAO

	@Override
	public Utente recuperaUtenteEmailPass(String email, String password) {
		Utente utente = rep.findUtenteByEmailAndPassword(email, password);
		return utente;
	}

	@Override
	public Utente recuperaUtenteEmail(String email) {
		Utente utente = rep.findUtenteByEmail(email);
		return utente;
	}

	@Override
	public Utente recuperaUtenteUsername(String username) {
		Utente utente = rep.findUtenteByUsername(username);
		return utente;
	}
	
	@Override
	public void inserisciUtente(Utente utente) {
		rep.save(utente);
	}
	
}
