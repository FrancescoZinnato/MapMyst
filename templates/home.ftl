<!DOCTYPE html>
<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <title>Home</title>
  <link rel="icon" type="image/png" href="/img/MapMystLogo.png">
  <link rel="stylesheet" href="css/styleHome.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

<body>
  <div id="nav">
    <button class="bott active">
      <div class="home">
        <a href="/home" class="link active">
          <lord-icon src="https://cdn.lordicon.com/wmwqvixz.json" trigger="hover" target=".home"
            colors="primary:#333" style="width: 20px; height: 20px; vertical-align:bottom;"></lord-icon>
          <span class="text">Home</span>
        </a>
      </div>
    </button>
    <button id="dropbuilder" class="bott">
      <div class="builder">
        <p id="buildertag">
          <lord-icon src="https://cdn.lordicon.com/wkvacbiw.json" trigger="hover" target=".builder"
            colors="primary:#ad874f" style="width: 20px; height: 20px; vertical-align:bottom;">
          </lord-icon>
          Builder
        </p>  
      </div>
    </button>
    <button class="bott">
      <div class="archivio">
        <a href="/archivio">
          <lord-icon src="https://cdn.lordicon.com/fkaukecx.json" trigger="hover" target=".archivio"
            colors="primary:#ad874f" style="width: 20px; height: 20px; vertical-align:bottom;">
          </lord-icon>
          Archivio</a>
      </div>
    </button>
    <button class="bott">
      <div class="gioca">
        <a href="/gioca">
          <lord-icon src="https://cdn.lordicon.com/becebamh.json" trigger="hover" target=".gioca"
            colors="primary:#ad874f" style="width: 20px; height:20px; vertical-align:bottom;">
          </lord-icon>
          Gioca</a>
      </div>
    </button>
    <button class="bott">
      <div class="logout">
        <a href="/logout"><lord-icon src="https://cdn.lordicon.com/eoacwhtz.json" trigger="hover" target=".logout"
            colors="primary:#ad874f,secondary:#ad874f,tertiary:#ad874f,quaternary:#ad874f,quinary:#ad874f,
        senary:#ad874f,septenary:#333" style="width: 20px; height: 20px; vertical-align:bottom;">
          </lord-icon>Logout</a>
      </div>
    </button>
  </div>
  <#if utente.getListaPartite()?size != 0>
    <div id="flexslider">
    	<h3>Continua le tue avventure</h3>
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner h-100">
            <#list utente.getListaPartite() as partita>
            	<#if partita?index == 0>
                <div class="carousel-item active h-100" data-bs-interval="100000000">
                    <img src="${partita.getMappa()}" class="d-block w-100 h-100" alt="" />
                    <div class="carousel-caption d-none d-md-block">
                    	<h3 class="nomep"><a href="/caricaDaHome/${partita.getNome()}">${partita.getNome()}</a></h3>
                	</div>
                </div>
                <#else>
                <div class="carousel-item h-100" data-bs-interval="100000000">
                    <img src="${partita.getMappa()}" class="d-block w-100 h-100" alt="" />
                    <div class="carousel-caption d-none d-md-block">
                    	<h3 class="nomep"><a href="/caricaDaHome/${partita.getNome()}">${partita.getNome()}</a></h3>
                	</div>
                </div>
                </#if>
            </#list>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  <#else>
  <div class="pagina">
        <div>
            <h3>
                Inizia una nuova avventura, creando un nuovo <a href="/builderAvventuriero">Avventuriero</a>
                , oppure un nuovo <a href="/builder">Mostro</a>
            </h3>
        </div>
  </div>
  </#if>
  <footer class="foot">
    <div class="flex-container">
      <div class="item">
        <div class="manuale">
          <a href="https://mega.nz/file/D4dQjDAT#vdXv1pyPrCrYpwpy_WzR1tddnESOuPKG85u4IQs0wEA">
            <lord-icon src="https://cdn.lordicon.com/omiqopzf.json" trigger="hover" target=".manuale"
              colors="primary:#ad874f" style="width: 20px; height: 20px; vertical-align:bottom;">
            </lord-icon>
            Manuale di gioco</a>
        </div>
      </div>
      <div class="item">
        <div class="chi">
          <a href="/chiSiamo">
            <lord-icon src="https://cdn.lordicon.com/gkgkfbzm.json" trigger="hover" stroke="bold" target=".chi"
              colors="primary:#ad874f,secondary:#ad874f" style="width: 20px; height: 20px; vertical-align:bottom;"
              display="inline-block">
            </lord-icon>
            Chi Siamo</a>
        </div>
      </div>
      <div class="item">
        <div class="chi">
          <a href="/gestioneAccount">
            <lord-icon src="https://cdn.lordicon.com/ifsxxxte.json" trigger="hover" stroke="bold" target=".chi"
              colors="primary:#ad874f,secondary:#ad874f" style="width: 20px; height: 20px; vertical-align:bottom;"
              display="inline-block">
            </lord-icon>
            Gestione Account</a>
        </div>
      </div>
    </div>
  </footer>
  <div id="sceltaBuilder">
     <p class="iconaMostro"><a href="/builder"><lord-icon src="https://cdn.lordicon.com/ribxmuoc.json" trigger="hover" target=".iconaMostro" colors="primary:#ad874f,secondary:#ad874f" style="width:25px;height:22px"></lord-icon>Crea Mostro</a></p>
     <p class="iconaAvventuriero"><a href="/builderAvventuriero"><lord-icon src="https://cdn.lordicon.com/ppjrlsnd.json" trigger="hover" target=".iconaAvventuriero" colors="primary:#ad874f,secondary:#ad874f,tertiary:#ad874f,quaternary:#ad874f" style="width:25px;height:22px"></lord-icon>Crea Avventuriero</a></p>
  </div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="js/scriptHome2.js"></script>
<script src="https://cdn.lordicon.com/lordicon.js"></script>
</body>
</html>