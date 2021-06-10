package projetChimie.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import projetChimie.model.Element;
import projetChimie.repository.ElementRepository;

@RestController
public class ElementController {
	
	@Autowired ElementRepository elementRepository;
	
	//RRRR all CRUD
	@GetMapping("/allElements") //Version Angular
	public List<Element> listeElement() {
		return elementRepository.findAll();
	}
	
	//RRRR one CRUD
	@GetMapping("/oneElement/{nombre_atomique}") //Version Angular
	public Element recupElement(@PathVariable(value="nombre_atomique") Long nombre_atomique) {
		return elementRepository.findById(nombre_atomique).get();
	}
	
	//CCCC CRUD
	@PostMapping("/ajoutConducteur/api")
	public Element ajouterElement(@Validated @RequestBody Element element) {
		elementRepository.save(element);
		return elementRepository.save(element);
	}

}
