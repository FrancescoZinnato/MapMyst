package start.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import jakarta.servlet.http.HttpSession;
import jakarta.transaction.Transactional;
import start.dao.CreaturaDAO;
import start.dao.UtenteDAO;
import start.model.Creatura;
import start.model.Utente;



@Controller
@RequestMapping("/")
public class CreaturaController {
	@PersistenceContext
	EntityManager em;
	@Autowired
	CreaturaDAO service;
	@Autowired
	UtenteDAO utenteService;
	
	@Transactional
	@GetMapping("/eliminaCreatura/{id}")
	public String eliminaCreatura(@PathVariable Integer id, HttpSession session) {
		Utente utente = (Utente) session.getAttribute("utente");
		if(utente == null) {
			return "redirect:/login";
		}
		Creatura creatura = service.recuperaCreaturaId(id);
		for(Creatura c : utente.getListaSchede()) {
			if(c.getId() == creatura.getId()) {
				utente.getListaSchede().remove(c);
				//service.rimuoviCreaturaId(c.getId());
		        Query query = em.createNativeQuery("DELETE FROM creatura WHERE id ="+c.getId());
		        query.executeUpdate();
				break;
			}
		}
		return "redirect:/archivio";
	}

	@PostMapping("/salvaCreatura")
	public String salvaCreatura(@RequestParam String nome, @RequestParam String ruolo, @RequestParam String gruppo,
			@RequestParam String taglia, @RequestParam String pe, @RequestParam String livello,
			@RequestParam("scheda") MultipartFile scheda, @RequestParam("token") MultipartFile token, HttpSession session) throws IOException {
		Utente utente = (Utente) session.getAttribute("utente");
		if(utente == null) {
			return "redirect:/login";
		}
		if(scheda.isEmpty()) {
			return "redirect:/home";
		}
		if(token.isEmpty()) {
			return "redirect:/chiSiamo";
		}
		byte[] schedaVera = scheda.getBytes();
		byte[] tokenVero = token.getBytes();
		int peVeri = Integer.parseInt(pe);
		int livelloVero = Integer.parseInt(livello);
		Creatura creatura = new Creatura(nome, livelloVero, ruolo, gruppo, taglia, peVeri, utente, schedaVera, tokenVero);
		if(creatura.getPe() == 0) {
			creatura.setAvventuriero(true);
		}
		service.inserisciCreatura(creatura);
		utente.getListaSchede().add(creatura);
		return "redirect:/archivio";
	}
	
}
