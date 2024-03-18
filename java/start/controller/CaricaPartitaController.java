package start.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpSession;
import start.dao.CreaturaDAO;
import start.dao.MappaDAO;
import start.dao.PartitaDAO;
import start.model.Creatura;
import start.model.Mappa;
import start.model.Partita;
import start.model.PartitaDaCaricare;
import start.model.Utente;

@RestController
@RequestMapping("/carica")
public class CaricaPartitaController {
	@Autowired
	PartitaDAO servicePartita;
	@Autowired
	MappaDAO serviceMappa;
	@Autowired
	CreaturaDAO serviceCreatura;
	
	@GetMapping("/caricaPartita/{nomePartita}")
	public PartitaDaCaricare caricaPartita(@PathVariable String nomePartita, HttpSession session) {
		Utente utente = (Utente) session.getAttribute("utente");
		Partita p = servicePartita.recuperaPartitaNomeUtente(nomePartita, utente);
		PartitaDaCaricare partita = new PartitaDaCaricare(p.getMappa(), p.getGriglia());
		return partita;
	}
	
	@GetMapping("/recuperaMappa/{id}")
	public byte[] recuperaMappa(@PathVariable int id) {
		Mappa mappa = serviceMappa.selezionaMappaId(id);
		byte[] valore = mappa.getMappa();
		return valore;
	}
	
	@GetMapping("/recuperaToken/{id}")
	public byte[] recuperaToken(@PathVariable int id) {
		Creatura creatura = serviceCreatura.recuperaCreaturaId(id);
		byte[] token = creatura.getToken();
		return token;
	}
	
	@GetMapping("/recuperaCreatura/{id}")
	public Creatura recuperaCreatura(@PathVariable int id) {
		Creatura creatura = serviceCreatura.recuperaCreaturaId(id);
		return creatura;
	}
	
	@GetMapping("/recuperaScheda/{id}")
	public byte[] recuperaScheda(@PathVariable int id) {
		Creatura creatura = serviceCreatura.recuperaCreaturaId(id);
		byte[] token = creatura.getScheda();
		return token;
	}
	
}
