package start.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;
import start.dao.CreaturaDAO;
import start.dao.PartitaDAO;
import start.model.Creatura;
import start.model.Partita;
import start.model.Utente;

@Controller
@RequestMapping("/gestione")
public class GestioneController {
	@Autowired
	CreaturaDAO serviceCreatura;
	@Autowired
	PartitaDAO servicePartita;
	
	//Restituisce il percorso della scheda relativa al token selezionato a partire da un attributo ricevuto da funzione JS
	//@GetMapping("/recuperoScheda/{immagine}")
	//public ResponseEntity<byte[]> recuperoScheda(@PathVariable String immagine, HttpSession session) {
	//    Creatura creatura = serviceCreatura.recuperaCreaturaToken(immagine);
	//    byte[] scheda = creatura.getScheda();
	//    return ResponseEntity
	//            .ok()
	//            .contentType(MediaType.IMAGE_PNG) //il MediaType deve corrispondere al tipo dell'immagine
	//            .body(scheda);
	//}
	
	@PostMapping("/salvaPartita")
	public String salvaPartita(@RequestParam String nome, @RequestParam String griglia, @RequestParam String mappa, @RequestParam int idMappa, HttpSession session) {
		Utente utente = (Utente) session.getAttribute("utente");
		if(utente == null) {
			return "redirect:/login";
		}
		Partita partita = new Partita(griglia, mappa, nome, utente);
		utente.getListaPartite().add(partita);
		servicePartita.inserisciPartita(partita);
		session.setAttribute("partita", partita);
		return "redirect:/home";
	}
	
}
