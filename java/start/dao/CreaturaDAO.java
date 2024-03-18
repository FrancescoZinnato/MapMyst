package start.dao;

import start.model.Creatura;

public interface CreaturaDAO {
	//Definisci i query methods
	Creatura recuperaCreaturaToken(byte[] token);
	Creatura recuperaCreaturaConTokenNull();
	Creatura recuperaCreaturaId(int id);
	void inserisciCreatura(Creatura creatura);
	void rimuoviCreaturaId(Integer id);
	void rimuoviCreatura(Creatura creatura);
}
