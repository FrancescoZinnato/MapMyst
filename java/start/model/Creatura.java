package start.model;

import java.util.Arrays;
import java.util.Base64;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
@Table (name = "creatura")
public class Creatura {
	@Id
	@Column (name = "id")
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private int id;
	@Column (name = "nome", nullable = false)
	private String nome;
	@Column (name = "scheda")
	private byte[] scheda;
	@Column (name = "token")
	private byte[] token;
	@Column (name = "livello", nullable = false)
	private int livello;
	@Column (name = "ruolo", nullable = false)
	private String ruolo;
	@Column (name = "status", nullable = false)
	private String status;
	@Column (name = "taglia", nullable = false)
	private String taglia;
	@Column (name = "pe", nullable = false)
	private int pe;
	@JsonIgnore
	@ManyToOne
	@JoinColumn (name = "utente", nullable = false)
	private Utente utente;
	@Column (name = "avventuriero", nullable = false)
	private boolean avventuriero;
	
	public Creatura(int id, String nome, byte[] scheda, byte[] token, int livello, String ruolo, String status,
			String taglia, int pe, Utente utente, boolean avventuriero) {
		super();
		this.id = id;
		this.nome = nome;
		this.scheda = scheda;
		this.token = token;
		this.livello = livello;
		this.ruolo = ruolo;
		this.status = status;
		this.taglia = taglia;
		this.pe = pe;
		this.utente = utente;
		this.avventuriero = avventuriero;
	}
	
	public Creatura(String nome, byte[] scheda, byte[] token, int livello, String ruolo, String status,
			String taglia, int pe, Utente utente, boolean avventuriero) {
		super();
		this.id = 0;
		this.nome = nome;
		this.scheda = scheda;
		this.token = token;
		this.livello = livello;
		this.ruolo = ruolo;
		this.status = status;
		this.taglia = taglia;
		this.pe = pe;
		this.utente = utente;
		this.avventuriero = avventuriero;
	}
	
	public Creatura(String nome, int livello, String ruolo, String status,
			String taglia, int pe, Utente utente, byte[] scheda, byte[] token) {
		super();
		this.id = 0;
		this.nome = nome;
		this.scheda = scheda;
		this.token = token;
		this.livello = livello;
		this.ruolo = ruolo;
		this.status = status;
		this.taglia = taglia;
		this.pe = pe;
		this.utente = utente;
		this.avventuriero = false;
	}
	
	public Creatura(String nome, int livello, String ruolo, String status,
			String taglia, int pe, Utente utente) {
		super();
		this.id = 0;
		this.nome = nome;
		this.livello = livello;
		this.ruolo = ruolo;
		this.status = status;
		this.taglia = taglia;
		this.pe = pe;
		this.utente = utente;
		this.avventuriero = false;
		this.scheda = new byte[500000];
		this.token = new byte[500000];
	}
	
	public Creatura(int id, byte[] token) {
		super();
		this.id = id;
		this.nome = "";
		this.scheda = new byte[500000];
		this.token = token;
		this.livello = 0;
		this.ruolo = "";
		this.status = "";
		this.taglia = "";
		this.pe = 0;
		this.utente = null;
		this.avventuriero = false;
	}
	
	public Creatura() {
		super();
		this.id = 0;
		this.nome = "";
		this.scheda = new byte[500000];
		this.token = new byte[500000];
		this.livello = 0;
		this.ruolo = "";
		this.status = "";
		this.taglia = "";
		this.pe = 0;
		this.utente = null;
		this.avventuriero = false;
	}
	
	public boolean isAvventuriero() {
		return avventuriero;
	}

	public void setAvventuriero(boolean avventuriero) {
		this.avventuriero = avventuriero;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public byte[] getScheda() {
		return scheda;
	}

	public void setScheda(byte[] scheda) {
		this.scheda = scheda;
	}

	public byte[] getToken() {
		return token;
	}
	
	public String getTokenString() {
		String tokenString = Base64.getEncoder().encodeToString(this.token);
		return tokenString;
	}

	public void setToken(byte[] token) {
		this.token = token;
	}

	public int getLivello() {
		return livello;
	}

	public void setLivello(int livello) {
		this.livello = livello;
	}

	public String getRuolo() {
		return ruolo;
	}

	public void setRuolo(String ruolo) {
		this.ruolo = ruolo;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getTaglia() {
		return taglia;
	}

	public void setTaglia(String taglia) {
		this.taglia = taglia;
	}

	public int getPe() {
		return pe;
	}

	public void setPe(int pe) {
		this.pe = pe;
	}

	public Utente getUtente() {
		return utente;
	}

	public void setUtente(Utente utente) {
		this.utente = utente;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + Arrays.hashCode(scheda);
		result = prime * result + Arrays.hashCode(token);
		result = prime * result + Objects.hash(avventuriero, id, livello, nome, pe, ruolo, status, taglia, utente);
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
		Creatura other = (Creatura) obj;
		return avventuriero == other.avventuriero && id == other.id && livello == other.livello
				&& Objects.equals(nome, other.nome) && pe == other.pe && Objects.equals(ruolo, other.ruolo)
				&& Arrays.equals(scheda, other.scheda) && Objects.equals(status, other.status)
				&& Objects.equals(taglia, other.taglia) && Arrays.equals(token, other.token)
				&& Objects.equals(utente, other.utente);
	}

	@Override
	public String toString() {
		return "Creatura [id=" + id + ", nome=" + nome + ", scheda=" + Arrays.toString(scheda) + ", token="
				+ Arrays.toString(token) + ", livello=" + livello + ", ruolo=" + ruolo + ", status=" + status
				+ ", taglia=" + taglia + ", pe=" + pe + ", utente=" + utente + ", avventuriero=" + avventuriero + "]";
	}

}
