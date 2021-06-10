package projetChimie.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import projetChimie.model.Element;

public interface ElementRepository extends JpaRepository<Element, Long>{

}
