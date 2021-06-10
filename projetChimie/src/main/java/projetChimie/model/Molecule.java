package projetChimie.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


public class Molecule {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private int nb_C;
	private int nb_H;
	private int nb_O;
	private int nb_N;
	
	private boolean alcene;
	private int numC_alcene;
	private boolean alcyne;
	private int numC_alcyne;
	private boolean alcool;
	private int numC_alcool;
	private boolean aldehide;
	private int numC_aldehide;
	private boolean cetone;
	private int numC_cetone;
	private boolean acide;
	private int numC_acide;
	private boolean amine;
	private int numC_amine;
	
	private float masseMolaire;
	
	public Molecule() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public int getNb_C() {
		return nb_C;
	}
	public void setNb_C(int nb_C) {
		this.nb_C = nb_C;
	}
	public int getNb_H() {
		return nb_H;
	}
	public void setNb_H(int nb_H) {
		this.nb_H = nb_H;
	}
	public int getNb_O() {
		return nb_O;
	}
	public void setNb_O(int nb_O) {
		this.nb_O = nb_O;
	}
	public int getNb_N() {
		return nb_N;
	}
	public void setNb_N(int nb_N) {
		this.nb_N = nb_N;
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
	public boolean isAldehide() {
		return aldehide;
	}
	public void setAldehide(boolean aldehide) {
		this.aldehide = aldehide;
	}
	public int getNumC_aldehide() {
		return numC_aldehide;
	}
	public void setNumC_aldehide(int numC_aldehide) {
		this.numC_aldehide = numC_aldehide;
	}
	public boolean isCetone() {
		return cetone;
	}
	public void setCetone(boolean cetone) {
		this.cetone = cetone;
	}
	public int getNumC_cetone() {
		return numC_cetone;
	}
	public void setNumC_cetone(int numC_cetone) {
		this.numC_cetone = numC_cetone;
	}
	public boolean isAcide() {
		return acide;
	}
	public void setAcide(boolean acide) {
		this.acide = acide;
	}
	public int getNumC_acide() {
		return numC_acide;
	}
	public void setNumC_acide(int numC_acide) {
		this.numC_acide = numC_acide;
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
		return "Molecule [id=" + id + ", nb_C=" + nb_C + ", nb_H=" + nb_H + ", nb_O=" + nb_O + ", nb_N=" + nb_N
				+ ", alcene=" + alcene + ", numC_alcene=" + numC_alcene + ", alcyne=" + alcyne + ", numC_alcyne="
				+ numC_alcyne + ", alcool=" + alcool + ", numC_alcool=" + numC_alcool + ", aldehide=" + aldehide
				+ ", numC_aldehide=" + numC_aldehide + ", cetone=" + cetone + ", numC_cetone=" + numC_cetone
				+ ", acide=" + acide + ", numC_acide=" + numC_acide + ", amine=" + amine + ", numC_amine=" + numC_amine
				+ ", masseMolaire=" + masseMolaire + "]";
	}
	

	
	
	

}
