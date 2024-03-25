package start.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpSession;
import start.dao.PartitaDAO;
import start.model.Partita;
import start.model.Utente;

@Controller
@RequestMapping("/")
public class PartitaController {
	@Autowired
	PartitaDAO service;
	
	@GetMapping("/caricaDaHome/{nomePartita}")
	public String caricaDaHome(@PathVariable String nomePartita, HttpSession session) {
		Utente utente = (Utente) session.getAttribute("utente");
		if(utente == null) {
			return "redirect:/login";
		}
		Partita partita = service.recuperaPartitaNomeUtente(nomePartita, utente);
		session.setAttribute("partita", partita);
		return "redirect:/gioca";
	}
}
