package start.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import jakarta.persistence.*;

@Entity
@Table (name = "utente")
public class Utente {
	@Id
	@Column (name = "id")
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private int id;
	@Column (name = "username", nullable = false)
	private String username;
	@Column (name = "email", nullable = false)
	private String email;
	@Column (name = "password", nullable = false)
	private String password;
	@OneToMany (mappedBy = "utente", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private List<Creatura> listaSchede;
	@Column (name = "admin", nullable = false)
	private boolean admin;
	@OneToMany (mappedBy = "utente", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private List<Partita> listaPartite;
	@OneToMany (mappedBy = "utente", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private List<Mappa> listaMappe;
	
	public Utente(int id, String username, String email, String password, List<Creatura> lista) {
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
		this.listaSchede = lista;
		this.admin = false;
		this.listaPartite = new ArrayList<Partita>();
		this.listaMappe = new ArrayList<Mappa>();
	}
	
	public Utente(String username, String email, String password, List<Creatura> lista) {
		this.id = 0;
		this.username = username;
		this.email = email;
		this.password = password;
		this.listaSchede = lista;
		this.admin = false;
		this.listaPartite = new ArrayList<Partita>();
		this.listaMappe = new ArrayList<Mappa>();
	}
	
	public Utente(int id, String username, String email, String password) {
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
		this.listaSchede = new ArrayList<Creatura>();
		this.admin = false;
		this.listaPartite = new ArrayList<Partita>();
		this.listaMappe = new ArrayList<Mappa>();
	}
	
	public Utente(String username, String email, String password) {
		this.username = username;
		this.email = email;
		this.password = password;
		this.listaSchede = new ArrayList<Creatura>();
		this.admin = false;
		this.listaPartite = new ArrayList<Partita>();
		this.listaMappe = new ArrayList<Mappa>();
	}
	
	public Utente() {
		this.id = 0;
		this.username = "";
		this.email = "";
		this.password = "";
		this.listaSchede = new ArrayList<Creatura>();
		this.admin = false;
		this.listaPartite = new ArrayList<Partita>();
		this.listaMappe = new ArrayList<Mappa>();
	}

	public List<Mappa> getListaMappe(){
		return listaMappe;
	}
	
	public void setListaMappe(List<Mappa> listaMappe) {
		this.listaMappe = listaMappe;
	}
	
	public List<Creatura> getListaSchede() {
		return listaSchede;
	}

	public void setListaSchede(List<Creatura> listaSchede) {
		this.listaSchede = listaSchede;
	}

	public List<Partita> getListaPartite() {
		return listaPartite;
	}

	public void setListaPartite(List<Partita> listaPartite) {
		this.listaPartite = listaPartite;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public boolean getAdmin() {
		return admin;
	}

	@Override
	public int hashCode() {
		return Objects.hash(admin, email, id, listaMappe, listaPartite, listaSchede, password, username);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Utente other = (Utente) obj;
		return admin == other.admin && Objects.equals(email, other.email) && id == other.id
				&& Objects.equals(listaMappe, other.listaMappe) && Objects.equals(listaPartite, other.listaPartite)
				&& Objects.equals(listaSchede, other.listaSchede) && Objects.equals(password, other.password)
				&& Objects.equals(username, other.username);
	}

	@Override
	public String toString() {
		return "Utente [id=" + id + ", username=" + username + ", email=" + email + ", password=" + password + "]";
	}
	
}
