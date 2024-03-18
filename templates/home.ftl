<!DOCTYPE html>
<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <title>Home</title>
  <link rel="icon" type="image/png" href="/img/MapMystLogo.png">
  <style type="text/css">
    @-ms-viewport {
      width: auto !important;
    }
  </style>
  <link rel="stylesheet" href="css/styleHome.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script src="js/scriptHome.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
	$(document).ready(function(){
	$('#dropbuilder').on('click', function(e){
	  if($('#sceltaBuilder').css("display") == "none"){
	    $('#sceltaBuilder').css({
	     'display': 'block',
	     'left': e.pageX-5+'px',
	     'top': e.pageY-5+'px',
	     'z-index': '9999'
	    })
	  }else{
	    $('#sceltaBuilder').css({
	    'display': 'none',
	    'z-index': '-9999'
	  })
	  }
	});
	
	$('#sceltaBuilder').on('mouseleave', function(){
	  $('#sceltaBuilder').css({
	    'display': 'none',
	    'z-index': '-9999'
	  })
	});
	})
  </script>
  <script>
    window.addEventListener("load", function () {
      document
        .querySelector(".glider")
        .addEventListener("glider-slide-visible", function (event) {
          var glider = Glider(this);
          console.log("Slide Visible %s", event.detail.slide);
        });
      document
        .querySelector(".glider")
        .addEventListener("glider-slide-hidden", function (event) {
          console.log("Slide Hidden %s", event.detail.slide);
        });
      document
        .querySelector(".glider")
        .addEventListener("glider-refresh", function (event) {
          console.log("Refresh");
        });
      document
        .querySelector(".glider")
        .addEventListener("glider-loaded", function (event) {
          console.log("Loaded");
        });

      window._ = new Glider(document.querySelector(".glider"), {
        slidesToShow: 1, //'auto',
        slidesToScroll: 1,
        itemWidth: 150,
        draggable: true,
        scrollLock: false,
        dots: "#dots",
        rewind: true,
        arrows: {
          prev: ".glider-prev",
          next: ".glider-next",
        },
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToScroll: "auto",
              itemWidth: 300,
              slidesToShow: "auto",
              exactWidth: true,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToScroll: 4,
              slidesToShow: 4,
              // dots: false,
              // arrows: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToScroll: 3,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToScroll: 2,
              slidesToShow: 2,
              // dots: false,
              // arrows: false,
              // scrollLock: true,
            },
          },
        ],
      });
    });
  </script>

  <!--
        Used to frame the glider on the page

        Not necessary for Glider.js
    -->
  <style type="text/css">
    * {
      box-sizing: border-box;
    }

    html,
    body {
      width: 100%;
    }

    .glider-contain {
      width: 90%;
      max-width: 997px;
      margin: 0 auto;
    }

    .glider-slide {
      min-height: 150px;
    }

    .glider-slide img {
      width: 100%;
    }
  </style>
</head>

<body>

  <div id="nav">
    <button class="btn active">
      <div class="home">
        <a href="/home" class="link active">
          <lord-icon src="https://cdn.lordicon.com/wmwqvixz.json" trigger="hover" target=".home"
            colors="primary:#333" style="width: 20px; height: 20px; vertical-align:bottom;"></lord-icon>
          <span class="text">Home</span>
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
    <button class="btn">
      <div class="archivio">
        <a href="/archivio">
          <lord-icon src="https://cdn.lordicon.com/fkaukecx.json" trigger="hover" target=".archivio"
            colors="primary:#ad874f" style="width: 20px; height: 20px; vertical-align:bottom;">
          </lord-icon>
          Archivio</a>
      </div>
    </button>
    <button class="btn">
      <div class="gioca">
        <a href="/gioca">
          <lord-icon src="https://cdn.lordicon.com/becebamh.json" trigger="hover" target=".gioca"
            colors="primary:#ad874f" style="width: 20px; height:20px; vertical-align:bottom;">
          </lord-icon>
          Gioca</a>
      </div>
    </button>
    <button class="btn">
      <div class="logout">
        <a href="/logout"><lord-icon src="https://cdn.lordicon.com/eoacwhtz.json" trigger="hover" target=".logout"
            colors="primary:#ad874f,secondary:#ad874f,tertiary:#ad874f,quaternary:#ad874f,quinary:#ad874f,
        senary:#ad874f,septenary:#333" style="width: 20px; height: 20px; vertical-align:bottom;">
          </lord-icon>Logout</a>
      </div>
    </button>
  </div>
  <#if utente.getListaPartite()?size != 0>
  <div class="menu">
    <div class="flex-containerMenu">
      <h1 id="titolo">Le tue Partite salvate</h1>
      <div id="ricerca">
        <label for="cercaPartita">Filtra scena</label>
        <input id="cercaPartita" name="cercaPartita" type="text" placeholder="Cerca" />
      </div>
      <div><br /></div>
      <div class="glider-contain">
        <div class="glider">
          <#list utente.getListaPartite() as partita>
            <div class="contenitoreG">
              <h2>${partita.getNome()}</h2>
              <img alt="Test" src="${partita.getMappa()}">
            </div>
          </#list>
        </div>
        <button class="glider-prev">&laquo;</button>
        <button class="glider-next">&raquo;</button>
        <div id="dots"></div>
      </div>
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

<script src="https://cdn.lordicon.com/lordicon.js"></script>
</body>
</html>