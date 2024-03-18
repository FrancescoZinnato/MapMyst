package start.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import start.dao.PartitaDAO;
import start.model.Partita;
import start.model.Utente;
import start.repository.PartitaRepository;

@Service
public class PartitaService implements PartitaDAO{
	@Autowired
	PartitaRepository rep;

	@Override
	public void inserisciPartita(Partita partita) {
		rep.save(partita);
	}

	@Override
	public Partita recuperaPartitaNomeUtente(String nome, Utente utente) {
		Partita partita = rep.findPartitaByNomeAndUtente(nome, utente);
		return partita;
	}
	
}
