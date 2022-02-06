
package br.com.agencia.newcity.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Promocoes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String destinos;
    private String valores;
    private String pacotes;
    

    public Promocoes() {
    }


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getDestinos() {
		return destinos;
	}


	public void setDestinos(String destinos) {
		this.destinos = destinos;
	}


	public String getValores() {
		return valores;
	}


	public void setValores(String valores) {
		this.valores = valores;
	}


	public String getPacotes() {
		return pacotes;
	}


	public void setPacotes(String pacotes) {
		this.pacotes = pacotes;
	}

	
    
    
}
    
