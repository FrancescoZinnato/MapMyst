package start.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import start.model.Mappa;

@Repository
public interface MappaRepository extends CrudRepository<Mappa, Integer> {
	Mappa findById(int id);
}
