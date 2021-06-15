package projetChimie.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import projetChimie.model.Element;
import projetChimie.repository.ElementRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ElementController {
	
	@Autowired ElementRepository elementRepository;
	
	//RRRR all CRUD
	@GetMapping("/allElements") //Version Angular
	public List<Element> listeElements() {
		return elementRepository.findAll();
	}
	
	//RRRR one CRUD
	@GetMapping("/oneElement/{nombre_atomique}") //Version Angular
	public Element recupElement(@PathVariable(value="nombre_atomique") Long nombre_atomique) {
		return elementRepository.findById(nombre_atomique).get();
	}
	
	//CCCC CRUD
	@PostMapping("/ajoutElement")
	public Element ajouterElement(@Validated @RequestBody Element element) {
		System.out.println(element);
		elementRepository.save(element);
		return elementRepository.save(element);
	}
	//DDDD CRUD
	@DeleteMapping("/deleteElement/{id}")
	public void deleteElement(@PathVariable(value="id") Long id) {
		System.out.println("test");
		elementRepository.deleteById(id);
	}

}
