package projetChimie.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Molecule {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private int nbC;
	private int nbH;
	private int nbO;
	private int nbN;
	
	private boolean alcene;
	private int numC_alcene;
	private boolean alcyne;
	private int numC_alcyne;
	private boolean alcool;
	private int numC_alcool;
	private boolean amine;
	private int numC_amine;
	
	private float masseMolaire;
	
	public Molecule() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	

}
