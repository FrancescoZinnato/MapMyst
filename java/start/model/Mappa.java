package start.model;

import java.util.Arrays;
import java.util.Base64;
import java.util.Objects;

import jakarta.persistence.*;

@Entity
@Table (name = "mappa")
public class Mappa {
	@Id
	@Column (name = "id")
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private int id;
	@Column (name = "mappa", nullable = false)
	private byte[] mappa;
	@ManyToOne
	@JoinColumn (name = "utente", nullable = false)
	private Utente utente;
	@Column (name = "nome", nullable = false)
	private String nome;
	
	public Mappa() {
		this.id = 0;
		this.mappa = new byte[500000];
		this.utente = null;
		this.nome = "";
	}
	
	public Mappa(int id, byte[] mappa, Utente utente, String nome) {
		this.id = id;
		this.mappa = mappa;
		this.utente = utente;
		this.nome = nome;
	}

	public Mappa(int id, byte[] mappa, Utente utente) {
		this.id = id;
		this.mappa = mappa;
		this.utente = utente;
	}
	
	public Mappa(byte[] mappa, Utente utente, String nome) {
		this.mappa = mappa;
		this.utente = utente;
		this.nome = nome;
	}

	public Mappa(byte[] mappa, Utente utente) {
		this.mappa = mappa;
		this.utente = utente;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public byte[] getMappa() {
		return mappa;
	}
	
	public String getMappaString() {
		String mappaString = Base64.getEncoder().encodeToString(this.mappa);
		return mappaString;
	}

	public void setMappa(byte[] mappa) {
		this.mappa = mappa;
	}

	public Utente getUtente() {
		return utente;
	}

	public void setUtente(Utente utente) {
		this.utente = utente;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + Arrays.hashCode(mappa);
		result = prime * result + Objects.hash(id, nome, utente);
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Mappa other = (Mappa) obj;
		return id == other.id && Arrays.equals(mappa, other.mappa) && Objects.equals(nome, other.nome)
				&& Objects.equals(utente, other.utente);
	}

	@Override
	public String toString() {
		return "Mappa [id=" + id + ", mappa=" + Arrays.toString(mappa) + ", utente=" + utente + ", nome=" + nome + "]";
	}

}
