package start.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import jakarta.servlet.http.HttpSession;
import jakarta.transaction.Transactional;
import start.dao.MappaDAO;
import start.model.Mappa;
import start.model.Utente;

@Controller
@RequestMapping("/")
public class MappaController {
	
	@PersistenceContext
	EntityManager em;
	@Autowired
	MappaDAO service;
	
	@Transactional
	@GetMapping("/eliminaMappa/{id}")
	public String eliminaMappa(@PathVariable Integer id, HttpSession session) {
		Utente utente = (Utente) session.getAttribute("utente");
		if(utente == null) {
			return "redirect:/login";
		}
		Mappa mappa = service.selezionaMappaId(id);
		for(Mappa m : utente.getListaMappe()) {
			if(m.getId() == mappa.getId()) {
				utente.getListaMappe().remove(m);
				//service.rimuoviMappaId(m.getId());
		        Query query = em.createNativeQuery("DELETE FROM mappa WHERE id ="+m.getId());
		        query.executeUpdate();
		        break;
			}
		}
		return "redirect:/archivio";
	}
	
}
