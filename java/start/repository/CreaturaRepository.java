package start.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import start.model.Creatura;

@Repository
public interface CreaturaRepository extends CrudRepository<Creatura, Integer>{
	//Implementa i metodi personalizzati
	Creatura findCreaturaByToken(byte[] token);
	Creatura findCreaturaByTokenIsNull();
	Creatura findById(int id);
}
