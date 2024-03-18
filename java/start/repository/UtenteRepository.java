package start.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import start.model.Utente;

@Repository
public interface UtenteRepository extends CrudRepository<Utente, Integer>{
	//Implementa metodi personalizzati
	Utente findUtenteByEmailAndPassword(String email, String password);
	Utente findUtenteByEmail(String email);
	Utente findUtenteByUsername(String username);
}
