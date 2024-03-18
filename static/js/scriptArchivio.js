// Riferimenti
const avviso = document.getElementById("avviso");
const avviso2 = document.getElementById("avviso2");
const wrapper = document.getElementById("wrapper");
const formMappa = document.getElementById("formMappa");
const inputMappa = document.getElementById("inputMappa");
const pulsanteMostri = document.getElementById("pulsanteMostri");
const pulsanteAvventurieri = document.getElementById("pulsanteAvventurieri");
const pulsanteMappe = document.getElementById("pulsanteMappe");
const tabellaMostri = document.getElementById("tabellaMostri");
const tabellaAvventurieri = document.getElementById("tabellaAvventurieri");
const tabellaMappe = document.getElementById("tabellaMappe");
const nomeMappa = document.getElementById("nomeMappa");

document.addEventListener("DOMContentLoaded", function() {


    // Attivazione del form
   inputMappa.addEventListener("change", function() {
    // Verifica se sono stati selezionati file
    if (this.files.length > 0) {
        // Ottieni il nome del primo file selezionato
        const nomeFile = this.files[0].name;
        // Assegna il nome del file al campo nomeMappa
        nomeMappa.value = nomeFile;
    }
	    // Invia il form
	    formMappa.submit();
	});
    
    // Click del pulsante Mostri
    pulsanteMostri.addEventListener("click", function() {

        if(tabellaMostri) {
            tabellaMostri.style.display = "grid";
            avviso.style.display = "none";
        } else {
            avviso.style.display = "block";
            avviso.innerHTML = "NON HAI ANCORA CARICATO NESSUN MOSTRO NELL'ARCHIVIO. VAI AL <a href=\"/builder\">BUILDER</a>.";
        }

        if(tabellaAvventurieri) {
            tabellaAvventurieri.style.display = "none";
        }

        if(tabellaMappe) {
            tabellaMappe.style.display = "none";
        }
        $('#avviso2').css({
			display: 'none'
		})
    });

    // Click del pulsante avventurieri
    pulsanteAvventurieri.addEventListener("click", function() {

        if(tabellaMostri) {
            tabellaMostri.style.display = "none";
        }

        if(tabellaAvventurieri) {
            tabellaAvventurieri.style.display = "grid";
            avviso.style.display = "none";
        } else {
            avviso.style.display = "block";
            avviso.innerHTML = "NON HAI ANCORA CARICATO NESSUN AVVENTURIERO NELL'ARCHIVIO. VAI AL <a href=\"/builderAvventuriero\">BUILDER</a>.";

        }

        if(tabellaMappe) {
            tabellaMappe.style.display = "none";
        }
        
        $('#avviso2').css({
			display: 'none'
		})
    });

    // Click del pulsante Mappe
    pulsanteMappe.addEventListener("click", function() {

        if(tabellaMostri) {
            tabellaMostri.style.display = "none";
        }

        if(tabellaAvventurieri) {
            tabellaAvventurieri.style.display = "none";
        }

        if(tabellaMappe) {
            tabellaMappe.style.display = "grid";
            avviso2.style.display = "block";
            avviso2.innerHTML = "CARICA UN'ALTRA MAPPA NELL'ARCHIVIO DA <a id=\"uploadMappa\">QUI</a>.";
            document.getElementById("uploadMappa").addEventListener("click", uploadMappa);
             // Funzione per caricare una mappa
            function uploadMappa() {
                inputMappa.click();
            }
        } else {
            avviso.style.display = "block";
            avviso.innerHTML = "NON HAI ANCORA CARICATO NESSUNA MAPPA NELL'ARCHIVIO. <a id=\"uploadMappa\">CARICANE UNA</a>.";
            document.getElementById("uploadMappa").addEventListener("click", uploadMappa);

            // Funzione per caricare una mappa
            function uploadMappa() {
                inputMappa.click();
            }
        }
    });

    // Clicca sul pulsante dei mostri non appena carichi la pagina
    pulsanteMostri.click();
});

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