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

import projetChimie.model.Molecule;
import projetChimie.repository.MoleculeRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MoleculeController {
	
	@Autowired MoleculeRepository moleculeRepository;
	
	//RRRR all CRUD
	@GetMapping("/allMolecules") //Version Angular
	public List<Molecule> listeMolecules() {
		return moleculeRepository.findAll();
	}
	
	//RRRR one CRUD
	@GetMapping("/oneMolecule/{id}") //Version Angular
	public Molecule recupMolecule(@PathVariable(value="id") Long id) {
		return moleculeRepository.findById(id).get();
	}
	
	//CCCC CRUD
	@PostMapping("/ajoutMolecule")
	public Molecule ajouterMolecule(@Validated @RequestBody Molecule molecule) {
		System.out.println(molecule);
		moleculeRepository.save(molecule);
		return moleculeRepository.save(molecule);
	}
	//DDDD CRUD
	@DeleteMapping("/deleteMolecule/{id}")
	public void deleteMolecule(@PathVariable(value="id") Long id) {
		System.out.println("test");
		moleculeRepository.deleteById(id);
	}

}
