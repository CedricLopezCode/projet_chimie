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

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getNbC() {
		return nbC;
	}

	public void setNbC(int nbC) {
		this.nbC = nbC;
	}

	public int getNbH() {
		return nbH;
	}

	public void setNbH(int nbH) {
		this.nbH = nbH;
	}

	public int getNbO() {
		return nbO;
	}

	public void setNbO(int nbO) {
		this.nbO = nbO;
	}

	public int getNbN() {
		return nbN;
	}

	public void setNbN(int nbN) {
		this.nbN = nbN;
	}

	public boolean isAlcene() {
		return alcene;
	}

	public void setAlcene(boolean alcene) {
		this.alcene = alcene;
	}

	public int getNumC_alcene() {
		return numC_alcene;
	}

	public void setNumC_alcene(int numC_alcene) {
		this.numC_alcene = numC_alcene;
	}

	public boolean isAlcyne() {
		return alcyne;
	}

	public void setAlcyne(boolean alcyne) {
		this.alcyne = alcyne;
	}

	public int getNumC_alcyne() {
		return numC_alcyne;
	}

	public void setNumC_alcyne(int numC_alcyne) {
		this.numC_alcyne = numC_alcyne;
	}

	public boolean isAlcool() {
		return alcool;
	}

	public void setAlcool(boolean alcool) {
		this.alcool = alcool;
	}

	public int getNumC_alcool() {
		return numC_alcool;
	}

	public void setNumC_alcool(int numC_alcool) {
		this.numC_alcool = numC_alcool;
	}

	public boolean isAmine() {
		return amine;
	}

	public void setAmine(boolean amine) {
		this.amine = amine;
	}

	public int getNumC_amine() {
		return numC_amine;
	}

	public void setNumC_amine(int numC_amine) {
		this.numC_amine = numC_amine;
	}

	public float getMasseMolaire() {
		return masseMolaire;
	}

	public void setMasseMolaire(float masseMolaire) {
		this.masseMolaire = masseMolaire;
	}

	@Override
	public String toString() {
		return "Molecule [id=" + id + ", nbC=" + nbC + ", nbH=" + nbH + ", nbO=" + nbO + ", nbN=" + nbN + ", alcene="
				+ alcene + ", numC_alcene=" + numC_alcene + ", alcyne=" + alcyne + ", numC_alcyne=" + numC_alcyne
				+ ", alcool=" + alcool + ", numC_alcool=" + numC_alcool + ", amine=" + amine + ", numC_amine="
				+ numC_amine + ", masseMolaire=" + masseMolaire + "]";
	}
	

	
	
	

}
