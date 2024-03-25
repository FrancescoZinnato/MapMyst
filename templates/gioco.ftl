<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BattleMap</title>
    <link rel="icon" type="image/png" href="/img/MapMystLogo.png">
    <link rel="stylesheet" href="css/styleGioco.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
  </head>

  <body>
    <!-- navigazione top -->
    <div id="nav">
      <!-- apri sidebar sinistra -->
      <div id="apriSidebar2">
        <button id="sidebarButton2"></button>
      </div>

      <!-- Barra di navigazione -->
      <button class="btn">
        <div class="home">
          <a href="/home" class="link">
            <lord-icon
              src="https://cdn.lordicon.com/wmwqvixz.json"
              trigger="hover"
              target=".home"
              colors="primary:#ad874f"
              style="width: 20px; height: 20px; vertical-align: bottom"></lord-icon>
            <span class="text">Home</span>
          </a>
        </div>
      </button>

      <button id="dropbuilder" class="btn">
        <div class="builder">
          <p id="buildertag">
            <lord-icon
              src="https://cdn.lordicon.com/wkvacbiw.json"
              trigger="hover"
              target=".builder"
              colors="primary:#ad874f"
              style="width: 20px; height: 20px; vertical-align: bottom">
            </lord-icon>
            Builder
          </p>
        </div>
      </button>

      <button class="btn">
        <div class="archivio">
          <a href="/archivio">
            <lord-icon
              src="https://cdn.lordicon.com/fkaukecx.json"
              trigger="hover"
              target=".archivio"
              colors="primary:#ad874f"
              style="width: 20px; height: 20px; vertical-align: bottom">
            </lord-icon>
            Archivio
          </a>
        </div>
      </button>

      <button class="btn active">
        <div class="gioca">
          <a href="" class="active">
            <lord-icon
              src="https://cdn.lordicon.com/becebamh.json"
              trigger="hover"
              target=".gioca"
              colors="primary:#333"
              style="width: 20px; height: 20px; vertical-align: bottom">
            </lord-icon>
            Gioca
          </a>
        </div>
      </button>

      <button class="btn" id="apriComandi">
        <div class="comandi">
          <a>
            <lord-icon
              src="https://cdn.lordicon.com/jnzhohhs.json"
              trigger="hover"
              target=".comandi"
              colors="primary:#ad874f,secondary:#ad874f,tertiary:#ad874f,quaternary:#ad874f,quinary:#ad874f,senary:#ad874f,septenary:#333"
              style="width: 20px; height: 20px; vertical-align: bottom">
            </lord-icon>
            Comandi
          </a>
        </div>
      </button>
      
      <button class="btn">
        <div class="logout">
          <a href="/logout">
            <lord-icon
              src="https://cdn.lordicon.com/eoacwhtz.json"
              trigger="hover"
              target=".logout"
              colors="primary:#ad874f,secondary:#ad874f,tertiary:#ad874f,quaternary:#ad874f,quinary:#ad874f,senary:#ad874f,septenary:#333"
              style="width: 20px; height: 20px; vertical-align: bottom">
            </lord-icon>
            Logout
          </a>
        </div>
      </button>

      <!-- apri sidebar destra -->
      <div id="apriSidebar">
        <button id="sidebarButton"></button>
      </div>
    </div>

    <!-- contenitore campo di gioco -->
    <div id="sfondo">
      <!-- sidebar lato destro -->
      <div id="sidebar" class="styleSelect">
        <div class="salva">
          <button class="bottone" id="bottoneSalva">
            <div class="saveicon">
              <lord-icon src="https://cdn.lordicon.com/fowixcuo.json" trigger="hover" target=".saveicon" colors="primary:#8B4513,secondary:#ad874f,tertiary:#ad874f,quaternary:#ad874f,quinary:#ad874f,senary:#ad874f,septenary:#333" style="width: 20px; height: 20px; vertical-align: bottom"></lord-icon>
              <span>Salva</span>
            </div>
          </button>
          <button class="bottone" id="bottoneCarica">
            <div class="loadicon">
              <lord-icon src="https://cdn.lordicon.com/cjbuodml.json" trigger="hover" target=".loadicon" colors="primary:#8B4513,secondary:#ad874f,tertiary:#ad874f,quaternary:#ad874f,quinary:#ad874f,senary:#ad874f,septenary:#333" style="width: 20px; height: 20px; vertical-align: bottom"></lord-icon>
              <span>Carica</span>
            </div>
          </button>
          <button class="bottone" id="bottoneMappa">
        	<div class="mappabott">
          		<lord-icon src="https://cdn.lordicon.com/hwpjjkev.json" trigger="hover" target=".mappabott" colors="primary:#8B4513,secondary:#ad874f,tertiary:#8b4513" style="width: 20px; height: 20px; vertical-align: bottom"></lord-icon>
          		<span>Carica Mappa</span>
        	</div>
      	  </button>
        </div>
        <select name="mostroSelector" id="mostroSelector" class="styleSelect">
          <option value="vuoto">Seleziona Mostro</option>
          <#if utente.getListaSchede()?size != 0>
          <#list utente.getListaSchede() as creatura>
          	<#if creatura.isAvventuriero() == false>
          		<option id="${creatura.getId()}" value="/carica/recuperaToken/${creatura.getId()}">${creatura.getNome()}</option>
          	</#if>
          </#list>
          </#if>
        </select>
        <select name="avventurieroSelector" id="avventurieroSelector" class="styleSelect">
          <option value="vuoto">Seleziona Avventuriero</option>
          <#if utente.getListaSchede()?size != 0>
          <#list utente.getListaSchede() as avventuriero>
          	<#if avventuriero.isAvventuriero() == true>
          		<option id="${avventuriero.getId()}" value="/carica/recuperaToken/${avventuriero.getId()}">${avventuriero.getNome()}</option>
          	</#if>
          </#list>
          </#if>
        </select>
        <select name="backgroundSelector" id="backgroundSelector" class="styleSelect">
          <option value="vuoto">Mappe Default</option>
          <option value="/img/mappe/small-1.jpg">Caserma(12x8)</option>
          <option value="/img/mappe/small-2.jpg">Cripta(12x8)</option>
          <option value="/img/mappe/small-3.jpg">Taverna(12x8)</option>
          <option value="/img/mappe/med-1.jpg">Natura(9x6)</option>
          <option value="/img/mappe/wide-1.jpg">Santuario(6x4)</option>
        </select>
        <select name="mappaUtenteSelector" id="mappaUtenteSelector" class="styleSelect">
          <option value="vuoto">Mappe Utente</option>
          <#if utente.getListaMappe()?size != 0>
          <#list utente.getListaMappe() as mappa>
          <option id="m${mappa.getId()}" value="/carica/recuperaMappa/${mappa.getId()}">${mappa.getNome()}</option>
          </#list>
          </#if>
        </select>
        <select name="caselleSelector" id="caselleSelector" class="styleSelect">
          <option value="default">Genera Caselle</option>
          <option value="vuoto">Elimina Caselle</option>
          <option value="piccole">Piccole(12x8)</option>
          <option value="medie">Medie(9x6)</option>
          <option value="grandi">Grandi(6x4)</option>
        </select>
      </div>
      <!-- sidebar lato sinistro -->
      <div id="sidebar2" class="styleSelect">
        <button class="rollContainer" id="d4"></button>
        <button class="rollContainer" id="d6"></button>
        <button class="rollContainer" id="d8"></button>
        <button class="rollContainer" id="d10"></button>
        <button class="rollContainer" id="d12"></button>
        <button class="rollContainer" id="d20"></button>
        <button class="rollContainer" id="d100"></button>
      </div>
      <!-- mappa -->
      <#if partita.getId() gt 0>
      <img id="mappa" src="${partita.getMappa()}" alt=""/>
      <#else>
      <img id="mappa" src="img/sfondoGioco.png" alt=""/>
      </#if>
      <!-- griglia di gioco -->
      <div id="grigliaDaSalvare">
      	<#if partita.getId() gt 0>
      	${partita.getGriglia()}
        <#else>
		<div id="contenitoreCaselle">
          
        </div>
        </#if>
      </div>
      <div id="popupRisultato" class="modal" style="display: none">
        <div id="popupContenuto" class="modal-content">
          <span id="popupChiudi" class="close"></span>
          <p id="risultatoRoll"></p>
        </div>
      </div>
      <!--  elimina token -->
      <div id="confermaEliminazione">
        Vuoi davvero eliminare il token?
        <button id="confermaEliminaToken">Si</button>
        <button id="annullaEliminaToken">No</button>
      </div>
      <!-- popup comandi -->
      <div class="modal-content" id="finestraComandi">
        <lord-icon id="chiudiComandi" class="tastoX" style="width: 42px; height: 42px;" src="https://cdn.lordicon.com/zxvuvcnc.json" trigger="hover" colors="primary:#8B4513" vertical-align="bottom"></lord-icon>
        <h3>Ecco i comandi di gioco:</h3>
        <ul>
          <li>Clicca sull'icona del drago per aprire il menu gestionale.</li>
          <li>Clicca sull'icona del dado per aprire il menu di roll dei dadi.</li>
          <li>Genera la griglia prima di generare i Token.</li>
          <li>Se elimini la griglia, verranno eliminati anche i token.</li>
          <li>Per trascinare un Token, tieni premuto il tasto sinistro del mouse su di esso.</li>
          <li>Per aprire la scheda relativa al Token, effettua un click destro su di esso.</li>
          <li>Per eliminare un Token, effettua un doppio click sinistro su di esso.</li>
        </ul> 
      </div>
      <!-- popup salva -->
      <div id="modalSalva" class="modal">
        <div class="modal-content">
          <form action="/gestione/salvaPartita" method="post">
            <input type="text" id="nomePartita" name="nome" placeholder="Inserisci il nome della partita da salvare"/>
            <input type="text" id="salvagriglia" name="griglia" hidden value=""/>
            <input type="text" id="salvamappa" name="mappa" hidden value=""/>
            <input type="number" id="idMappaUtenteSalva" name="idMappa" hidden value="0"/>
            <button type="submit" id="confermaSalva">Conferma</button>
            <button id="annullaSalva">Annulla</button>
          </form>
        </div>
      </div>
      <!-- popup carica -->
      <div id="modalCarica" class="modal">
            <div class="modal-content">
                  <select id="selezionaPartita" name="partitaSelezionata">
                  	<#if utente.getListaPartite()?size != 0>
                  	<#list utente.getListaPartite() as partitas>
                    <option value="${partitas.getNome()}">${partitas.getNome()}</option>
                    </#list>
                    </#if>
                  </select>
                  <button id="confermaCarica">Conferma</button>
                  <button id="annullaCarica">Annulla</button>
            </div>
       </div>
       <!-- popup carica mappa -->
       <div id="modalMappa" class="modal">
  		   <div class="modal-content">
    		<form method="POST" action="/upload/mappaUpload" enctype="multipart/form-data">
       			<label for="file"><a>Scegli un'immagine da caricare come Mappa:</a></label>
       			<input type="file" name="file">
       			<label for="nome"><a> Nome mappa</a> </label>
   				<input type="text" id="nome" name="nome">
        		<button id="caricaMappa" type="submit">Carica</button>
        		<button id="annullaCaricaMappa">Annulla</button>
        		<div id="disclaimer">
    				<i class="fas fa-exclamation-circle"></i> ATTENZIONE! Sarai reindirizzato in archivio, assicurati di aver salvato la partita!
  				</div>
  			</form>
		   </div>
		</div>
    </div>
  <div id="sceltaBuilder">
     <p class="iconaMostro"><a href="/builder"><lord-icon src="https://cdn.lordicon.com/ribxmuoc.json" trigger="hover" target=".iconaMostro" colors="primary:#ad874f,secondary:#ad874f" style="width:25px;height:22px"></lord-icon>Crea Mostro</a></p>
     <p class="iconaAvventuriero"><a href="/builderAvventuriero"><lord-icon src="https://cdn.lordicon.com/ppjrlsnd.json" trigger="hover" target=".iconaAvventuriero" colors="primary:#ad874f,secondary:#ad874f,tertiary:#ad874f,quaternary:#ad874f" style="width:25px;height:22px"></lord-icon>Crea Avventuriero</a></p>
  </div>
<script src="https://cdn.lordicon.com/lordicon.js"></script>
<script src="js/scriptGioco.js"></script>
</body>
</html>
