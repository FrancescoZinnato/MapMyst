package start.controller;

import java.io.IOException;
import java.io.File;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import jakarta.servlet.http.HttpSession;
import start.dao.CreaturaDAO;
import start.dao.MappaDAO;
import start.dao.UtenteDAO;
import start.model.Creatura;
import start.model.Mappa;
import start.model.Utente;

@Controller
@RequestMapping("/upload")
public class UploadFileController {
	@Autowired
	MappaDAO serviceMappa;
	@Autowired
	CreaturaDAO serviceCreatura;
	@Autowired
	UtenteDAO serviceUtente;
	
	//private static final List<String> estensioniValide = Arrays.asList("png", "jpg", "jpeg");
	
	@PostMapping("/mappaUpload")
	public String mappaUpload(@RequestParam ("file") MultipartFile file, @RequestParam String nome, HttpSession session, RedirectAttributes attributo) {
		Utente utente = (Utente) session.getAttribute("utente");
		//String nomeFile = file.getOriginalFilename();
		//String estensione = nomeFile.substring(nome.lastIndexOf(".") + 1).toLowerCase();
		//if(!estensioniValide.contains(estensione)) {
			//attributo.addFlashAttribute("messaggio", "Formato file non supportato.");
			//return "redirect:/archivio";
		//}
		if(utente == null) {
			return "redirect:/login";
		}
		try {
			byte[] valore = file.getBytes();
			Mappa mappa = new Mappa(valore, utente, nome);
			serviceMappa.inserisciMappa(mappa);
			utente.getListaMappe().add(mappa);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		attributo.addFlashAttribute("messaggio", "Mappa caricata con successo.");
		return "redirect:/archivio";
	}
	
}
