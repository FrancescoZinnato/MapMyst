package start.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import start.dao.CreaturaDAO;
import start.model.Creatura;

@RestController
@RequestMapping("/gestioneMappa")
public class GestioneMappaController {
	@Autowired
	CreaturaDAO serviceCreatura;
	
	@GetMapping("/recuperaToken/{idToken}")
	public Creatura recuperaToken(@PathVariable int idToken) {
		Creatura creatura = serviceCreatura.recuperaCreaturaId(idToken);
		return creatura;
	}
}
