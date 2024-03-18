<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Archivio</title>
    <link rel="icon" type="image/png" href="/img/MapMystLogo.png">
    <link rel="stylesheet" href="css/styleArchivio.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

<body>
    <div id="nav">
        <button class="btn">
            <div class="home">
                <a href="/home" class="link">
                    <lord-icon src="https://cdn.lordicon.com/wmwqvixz.json" trigger="hover" target=".home"
                        colors="primary:#ad874f" style="width: 20px; height: 20px; vertical-align: bottom"></lord-icon>
                    Home
                </a>
            </div>
        </button>

      	<button id="dropbuilder" class="btn">
          <div class="builder">
            <p id="buildertag">
                  <lord-icon src="https://cdn.lordicon.com/wkvacbiw.json" trigger="hover" target=".builder"
                      colors="primary:#ad874f" style="width: 20px; height: 20px; vertical-align:bottom;">
                  </lord-icon>
                  Builder
            </p>
          </div>
      	</button>

        <button class="btn active">
            <div class="archivio">
                <a href="/archivio" class="active">
                    <lord-icon src="https://cdn.lordicon.com/fkaukecx.json" trigger="hover" target=".archivio"
                        colors="primary:#333" style="width: 20px; height: 20px; vertical-align: bottom">
                    </lord-icon>
                    Archivio
                </a>
            </div>
        </button>

        <button class="btn">
            <div class="gioca">
                <a href="/gioca">
                    <lord-icon src="https://cdn.lordicon.com/becebamh.json" trigger="hover" target=".gioca"
                        colors="primary:#ad874f" style="width: 20px; height: 20px; vertical-align: bottom">
                    </lord-icon>
                    Gioca
                </a>
            </div>
        </button>

        <button class="btn">
            <div class="logout">
                <a href="/logout">
                    <lord-icon src="https://cdn.lordicon.com/eoacwhtz.json" trigger="hover" target=".logout"
                        colors="primary:#ad874f,secondary:#ad874f,tertiary:#ad874f,quaternary:#ad874f,quinary:#ad874f,senary:#ad874f,septenary:#333"
                        style="width: 20px; height: 20px; vertical-align: bottom">
                    </lord-icon>
                    Logout
                </a>
            </div>
        </button>
    </div>
    <!-- INIZIO MIO CODICE ------------------------------------------------------------>
    <div id="wrapper">
        <!-- Pulsanti -->
        <div class="contenitore-pulsanti">
            <button id="pulsanteMostri">Mostri</button>
            <button id="pulsanteAvventurieri">Avventurieri</button>
            <button id="pulsanteMappe">Mappe</button>
        </div>
        <!-- Avvisi -->
        <p id="avviso" class="avviso"></p>
        <!-- Tabella mostri -->
        <#if utente.getListaSchede()?size !=0>
            <div id="tabellaMostri" class="tabella">
                <div class="headerTabella">
                    <p>Nome</p>
                    <p>Livello</p>
                    <p>Ruolo</p>
                    <p>Status</p>
                    <p>Taglia</p>
                    <p>PE</p>
                    <p>Elimina</p>
                </div>
                <#list utente.getListaSchede() as creatura>
                    <#if !creatura.isAvventuriero()>
                        <div class="rigaTabella">
                            <p>${creatura.getNome()}</p>
                            <p>${creatura.getLivello()}</p>
                            <p>${creatura.getRuolo()}</p>
                            <p>${creatura.getStatus()}</p>
                            <p>${creatura.getTaglia()}</p>
                            <p>${creatura.getPe()}</p>
 							<a href="/eliminaCreatura/${creatura.getId()}">
                        		  <lord-icon id="chiudiComandi" class="tasto" style="width: 28px; height: 28px; padding:2px"
                                  src="https://cdn.lordicon.com/zxvuvcnc.json" trigger="hover"
                                  colors="primary:#ab0a0a" vertical-align="bottom"></lord-icon>
                 			</a>                  
                         </div>
                    </#if>
                </#list>
            </div>
        </#if>

    <!-- Tabella avventurieri -->
    <#if utente.getListaSchede()?size !=0>
        <div id="tabellaAvventurieri" class="tabella">
            <div class="headerTabella">
                <p>Nome</p>
                <p>Livello</p>
                <p>Ruolo</p>
                <p>Taglia</p>
                <p>Elimina</p>
                
            </div>
            <#list utente.getListaSchede() as avventuriero>
                <#if avventuriero.isAvventuriero()>
                    <div class="rigaTabella">
                        <p>${avventuriero.getNome()}</p>
                        <p>${avventuriero.getLivello()}</p>
                        <p>${avventuriero.getRuolo()}</p>
                        <p>${avventuriero.getTaglia()}</p>
 						<a href="/eliminaCreatura/${avventuriero.getId()}">
 						<lord-icon id="chiudiComandi" class="tasto" style="width: 28px; height: 28px; padding:2px"
               		 	src="https://cdn.lordicon.com/zxvuvcnc.json" trigger="hover" colors="primary:#ab0a0a" vertical-align="bottom"></lord-icon>
               		 	</a>
               		 </div>
                </#if>
            </#list>
        </div>
    </#if>
    <!-- Tabella mappe -->
   
   <#if utente.getListaMappe()?size !=0>
    <div id="tabellaMappe" class="tabella">
        <div class="headerTabella">
            <p>Nome</p>
            <p>Preview</p>
            <p>Elimina</p>
        </div>
        <#list utente.getListaMappe() as mappa>
            <div class="rigaTabella rigaMappa">
                <div><p>${mappa.getNome()}</p></div>
                <div class="sFoto">
                    <img alt="Test" id="foto" src="/carica/recuperaMappa/${mappa.getId()}">
                </div>
                <div>
                 <a href="/eliminaMappa/${mappa.getId()}">
                 <lord-icon id="chiudiComandi" class="tasto" style="width: 28px; height: 28px; padding:2px"
                     src="https://cdn.lordicon.com/zxvuvcnc.json" trigger="hover" colors="primary:#ab0a0a" vertical-align="bottom"></lord-icon>
                 </a>
                </div>
            </div>
           </#list>
          </div>
         <p id="avviso2" class="avviso"></p>
    
</#if> <!-- Questo Ã¨ il tag div di chiusura corretto -->

<form method="POST" id="formMappa" action="/upload/mappaUpload" enctype="multipart/form-data" style="display: none;">
    <input type="file" id="inputMappa" value="" name="file">
    <input type="text" id="nomeMappa" value="" name="nome">
</form>

<div id="sceltaBuilder">
  <p class="iconaMostro"><a href="/builder"><lord-icon src="https://cdn.lordicon.com/ribxmuoc.json" trigger="hover" target=".iconaMostro" colors="primary:#ad874f,secondary:#ad874f" style="width:25px;height:22px"></lord-icon>Crea Mostro</a></p>
  <p class="iconaAvventuriero"><a href="/builderAvventuriero"><lord-icon src="https://cdn.lordicon.com/ppjrlsnd.json" trigger="hover" target=".iconaAvventuriero" colors="primary:#ad874f,secondary:#ad874f,tertiary:#ad874f,quaternary:#ad874f" style="width:25px;height:22px"></lord-icon>Crea Avventuriero</a></p>
</div>

<script src="https://cdn.lordicon.com/lordicon.js"></script>
<script type="text/javascript" src="js/scriptArchivio.js"></script>
</body>
</html>