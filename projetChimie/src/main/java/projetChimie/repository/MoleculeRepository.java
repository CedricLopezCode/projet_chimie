package projetChimie.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import projetChimie.model.Molecule;

public interface MoleculeRepository extends JpaRepository<Molecule, Long>{

}
