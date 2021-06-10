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

	public Molecule(int nbC, int nbH, int nbO, int nbN, boolean alcene, int numC_alcene, boolean alcyne, int numC_alcyne, boolean alcool, int numC_alcool, boolean amine, int numC_amine, float masseMolaire) {
		super();
		this.nbC = nbC;
		this.nbH = nbH;
		this.nbO = nbO;
		this.nbN = nbN;
		this.alcene = alcene;
		this.numC_alcene = numC_alcene;
		this.alcyne = alcyne;
		this.numC_alcyne = numC_alcyne;
		this.alcool = alcool;
		this.numC_alcool = numC_alcool;
		this.amine = amine;
		this.numC_amine = numC_amine;
		this.masseMolaire = masseMolaire;
	}
	

	
	
	

}
