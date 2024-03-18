package start.dao;

import start.model.Partita;
import start.model.Utente;

public interface PartitaDAO {
	void inserisciPartita(Partita partita);
	Partita recuperaPartitaNomeUtente(String nome, Utente utente);
}
