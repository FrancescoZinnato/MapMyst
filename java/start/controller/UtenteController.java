package start.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import start.dao.UtenteDAO;
import start.model.Utente;
import start.model.ValidazioneUtente;

@Controller
@RequestMapping("/")
public class UtenteController {
	@Autowired
	UtenteDAO service;
	
	@GetMapping("/login")
	public String login(HttpSession session) {
		if(session.getAttribute("utente") != null) {
			return "redirect:/home";
		}else {
			return "login";
		}
	}
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "logout";
	}
	
	@GetMapping("/registrati")
	public String registrati() {
		return "registrati";
	}
	
	@PostMapping("/controlloLogin")
	public String controlloLogin(@RequestParam String email, @RequestParam String password, HttpSession session, HttpServletRequest request) {
		Utente utente = service.recuperaUtenteEmailPass(email, password);
		if(utente != null) {
			session = request.getSession();
			session.setMaxInactiveInterval(0);
			session.setAttribute("utente", utente);
			return "redirect:/home";
		}else {
			return "redirect:/erroreLogin";
		}
	}
	
	@PostMapping("/controlloRegistrati")
	public String controlloRegistrati(@Validated ValidazioneUtente u, BindingResult result, HttpSession session, HttpServletRequest request) {
		if(result.hasErrors()) {
			//Qua andrebbero gestiti gli errori di validazione utente
			return "redirect:/erroreLogin";
		}
		Utente utente = new Utente(u.getUsername(), u.getEmail(), u.getPassword());
		Utente uEmail = service.recuperaUtenteEmail(u.getEmail());
		Utente uNome = service.recuperaUtenteUsername(u.getUsername());
		if(uEmail != null && utente.getEmail().equalsIgnoreCase(uEmail.getEmail())) {
			//Andrebbe gestita email già in uso
			return "redirect:/erroreLogin";
		}
		if(uNome != null && utente.getUsername().equalsIgnoreCase(uNome.getUsername())) {
			//Andrebbe gestito username già in uso
			return "redirect:/erroreLogin";
		}
		session = request.getSession();
		session.setMaxInactiveInterval(0);
		service.inserisciUtente(utente);
		session.setAttribute("utente", utente);
		return "redirect:/home";
	}
	
	@GetMapping("/home")
	public String home(HttpSession session) {
		if(session.getAttribute("utente") == null) {
			return "redirect:/login";
		}
		return "home";
	}
	
	@GetMapping("/builder")
	public String builder(HttpSession session) {
		if(session.getAttribute("utente") == null) {
			return "redirect:/login";
		}
		return "builderMostro";
	}
	
	@GetMapping("/builderAvventuriero")
	public String builderAvventuriero(HttpSession session) {
		if(session.getAttribute("utente") == null) {
			return "redirect:/login";
		}
		return "builderAvventuriero";
	}
	
	@GetMapping("/archivio")
	public String archivio(HttpSession session) {
		if(session.getAttribute("utente") == null) {
			return "redirect:/login";
		}
		return "archivio";
	}
	
	@GetMapping("/gioca")
	public String gioca(HttpSession session) {
		if(session.getAttribute("utente") == null) {
			return "redirect:/login";
		}
		return "gioco";
	}
	
	@GetMapping("/chiSiamo")
	public String chiSiamo(HttpSession session) {
		if(session.getAttribute("utente") == null) {
			return "redirect:/login";
		}
		return "chiSiamo";
	}
	
	@GetMapping("/erroreLogin")
	public String erroreLogin() {
		return "erroreLogin";
	}
	
	@GetMapping("/gestioneAccount")
	public String gestioneAccount(HttpSession session) {
		if(session.getAttribute("utente") == null) {
			return "redirect:/login";
		}
		return "gestioneAccount";
	}
	
	@GetMapping("/cambioDatiUtente")
	public String cambioDatiUtente(@Validated ValidazioneUtente u, BindingResult result, HttpSession session) {
		Utente utente = (Utente) session.getAttribute("utente");
		if(utente == null) {
			return "redirect:/login";
		}
		if(result.hasErrors()) {
			//Qua andrebbero gestiti gli errori di validazione utente
			return "redirect:/erroreLogin";
		}
		Utente utenteEmail = service.recuperaUtenteEmail(u.getEmail());
		if(utenteEmail == null) {
			utente.setEmail(u.getEmail());
			utente.setPassword(u.getPassword());
			session.setAttribute("utente", utente);
			service.inserisciUtente(utente);
			return "redirect:/home";
		}
		else {
			return "redirect:/gestioneAccount";
		}
	}

}
