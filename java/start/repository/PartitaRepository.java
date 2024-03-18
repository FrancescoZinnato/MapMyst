package start.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import start.model.Partita;
import start.model.Utente;

@Repository
public interface PartitaRepository extends CrudRepository<Partita, Integer>{
	Partita findPartitaByNomeAndUtente(String nome, Utente utente);
}
