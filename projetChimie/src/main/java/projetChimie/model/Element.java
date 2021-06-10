package projetChimie.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Element {
	
	@Id 
	private Long nombre_atomique;
	private String nom;
	private String symbole;
	private float masse_atomique;
	
	
	public Element() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Element(Long nombre_atomique, String nom, String symbole, float masse_atomique) {
		super();
		this.nombre_atomique = nombre_atomique;
		this.nom = nom;
		this.symbole = symbole;
		this.masse_atomique = masse_atomique;
	}
	
	
	public Long getNombre_atomique() {
		return nombre_atomique;
	}
	public void setNombre_atomique(Long nombre_atomique) {
		this.nombre_atomique = nombre_atomique;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getSymbole() {
		return symbole;
	}
	public void setSymbole(String symbole) {
		this.symbole = symbole;
	}
	public float getMasse_atomique() {
		return masse_atomique;
	}
	public void setMasse_atomique(float masse_atomique) {
		this.masse_atomique = masse_atomique;
	}
	
	
	@Override
	public String toString() {
		return "Element [nombre_atomique=" + nombre_atomique + ", nom=" + nom + ", symbole=" + symbole
				+ ", masse_atomique=" + masse_atomique + "]";
	}
	
	
	

}
