package start.dao;

import start.model.Mappa;

public interface MappaDAO {
	void inserisciMappa(Mappa mappa);
	Mappa selezionaMappaId(int id);
	void rimuoviMappaId(Integer id);
}
