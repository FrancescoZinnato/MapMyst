package start.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import start.dao.PartitaDAO;

@Controller
@RequestMapping("/")
public class PartitaController {
	@Autowired
	PartitaDAO service;
	
	//
}
