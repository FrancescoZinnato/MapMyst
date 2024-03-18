package start.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import start.dao.CreaturaDAO;
import start.model.Creatura;
import start.repository.CreaturaRepository;

@Service
public class CreaturaService implements CreaturaDAO{
	@Autowired
	CreaturaRepository rep;
	//Implementa metodi della classe DAO

	@Override
	public Creatura recuperaCreaturaToken(byte[] token) {
		Creatura creatura = rep.findCreaturaByToken(token);
		return creatura;
	}

	@Override
	public Creatura recuperaCreaturaConTokenNull() {
		Creatura creatura = rep.findCreaturaByTokenIsNull();
		return creatura;
	}

	@Override
	public void inserisciCreatura(Creatura creatura) {
		rep.save(creatura);
	}

	@Override
	public Creatura recuperaCreaturaId(int id) {
		Creatura creatura = rep.findById(id);
		return creatura;
	}

	@Override
	public void rimuoviCreaturaId(Integer id) {
		rep.deleteById(id);
	}

	@Override
	public void rimuoviCreatura(Creatura creatura) {
		rep.delete(creatura);
	}
	
}
