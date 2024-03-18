package start.model;

import java.util.Objects;

import jakarta.persistence.*;

@Entity
@Table (name = "partita")
public class Partita {
	@Id
	@Column (name = "id")
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private int id;
	@Column (name = "griglia", nullable = false)
	private String griglia;
	@Column (name = "mappa", nullable = false)
	private String mappa;
	@Column (name = "nome", nullable = false)
	private String nome;
	@ManyToOne
	@JoinColumn (name = "utente", nullable = false)
	private Utente utente;
	
	public Partita(int id, String griglia, String mappa, String nome, Utente utente) {
		super();
		this.id = id;
		this.griglia = griglia;
		this.mappa = mappa;
		this.nome = nome;
		this.utente = utente;
	}
	
	public Partita(String griglia, String mappa, String nome, Utente utente) {
		super();
		this.id = 0;
		this.griglia = griglia;
		this.mappa = mappa;
		this.nome = nome;
		this.utente = utente;
	}

	public Partita() {
		super();
		this.id = 0;
		this.griglia = "";
		this.mappa = "";
		this.nome = "";
		this.utente = null;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getGriglia() {
		return griglia;
	}

	public void setGriglia(String griglia) {
		this.griglia = griglia;
	}

	public String getMappa() {
		return mappa;
	}

	public void setMappa(String mappa) {
		this.mappa = mappa;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Utente getUtente() {
		return utente;
	}

	public void setUtente(Utente utente) {
		this.utente = utente;
	}

	@Override
	public int hashCode() {
		return Objects.hash(griglia, id, mappa, nome, utente);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Partita other = (Partita) obj;
		return Objects.equals(griglia, other.griglia) && id == other.id && Objects.equals(mappa, other.mappa)
				&& Objects.equals(nome, other.nome) && Objects.equals(utente, other.utente);
	}

	@Override
	public String toString() {
		return "Partita [id=" + id + ", griglia=" + griglia + ", mappa=" + mappa + ", nome=" + nome + ", utente="
				+ utente + "]";
	}
	
}
