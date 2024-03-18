package start.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import start.dao.MappaDAO;
import start.model.Mappa;
import start.repository.MappaRepository;

@Service
public class MappaService implements MappaDAO {
	@Autowired
	MappaRepository rep;

	@Override
	public void inserisciMappa(Mappa mappa) {
		rep.save(mappa);
	}

	@Override
	public Mappa selezionaMappaId(int id) {
		Mappa mappa = rep.findById(id);
		return mappa;
	}

	@Override
	public void rimuoviMappaId(Integer id) {
		rep.deleteById(id);
	}
	
}
