package start.model;

import java.util.Objects;

public class PartitaDaCaricare {
	private String mappa;
	private String griglia;
	
	public PartitaDaCaricare(String mappa, String griglia) {
		super();
		this.mappa = mappa;
		this.griglia = griglia;
	}

	public String getMappa() {
		return mappa;
	}

	public void setMappa(String mappa) {
		this.mappa = mappa;
	}

	public String getGriglia() {
		return griglia;
	}

	public void setGriglia(String griglia) {
		this.griglia = griglia;
	}

	@Override
	public int hashCode() {
		return Objects.hash(griglia, mappa);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PartitaDaCaricare other = (PartitaDaCaricare) obj;
		return Objects.equals(griglia, other.griglia) && Objects.equals(mappa, other.mappa);
	}
	
	
}
