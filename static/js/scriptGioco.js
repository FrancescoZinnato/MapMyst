var tokenGlobale = null; //Definisco un token globale, mi serve per eliminare il token cliccato

var dadi = { //Mappo globalmente gli id dei dadi associando un valore, serve per la funzione di roll
  'd4' : 4,
  'd6' : 6,
  'd8' : 8,
  'd10' : 10,
  'd12' : 12,
  'd20' : 20,
  'd100' : 100
};

function caselleDroppable(x) {
  x.forEach(element => {
      element.droppable({
          accept: ".token",
          drop: function (event, ui) {
            var tokenSpostato = ui.draggable.clone();
            ui.draggable.remove();
            $(this).append(tokenSpostato);
            tokenSpostato.css({
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              'z-index': '99'
            });

            tokenSpostato.draggable({
              containment: "#sfondo",
              cursor: "move",
              scroll: true,
              start: function (event, ui) {
                console.log("Inizio trascinamento");
              },
              drag: function (event, ui) {
                console.log("Trascinamento in corso");
                tokenSpostato.css({
                  left: '',
                  top: '',
                  transform: '',
                  'z-index': '99999'
                });
              },
              stop: function (event, ui) {
                console.log("Fine trascinamento");
              },
            });

            tokenMenu(tokenSpostato);
            tokenSpostato.on('dblclick', function(e) {
              tokenGlobale = tokenSpostato;
              var dialogo = $('#confermaEliminazione');
              var dialogoWidth = dialogo.width();
              var dialogoHeight = dialogo.height();
              var x = e.pageX;
              var y = e.pageY;
              if (e.pageX > $(window).width() / 2) {
                x -= dialogoWidth; //Confronto la posizione del click con la larghezza del documento 
              } //E se la posizione del click è maggiore della metà della larghezza dello schermo lo sposto verso sinistra
              if (e.pageY > $(window).height() / 2) {
                y -= dialogoHeight; //Confronto la posizione del click con l'altezza del documento 
              } //E se la posizione del click è maggiore della metà dell'altezza dello schermo lo sposto verso l'alto
              dialogo.css({
                left: x + 'px',
                top: y + 'px',
                display: 'block'
              })
            });
          },
        });
  });
}

function caselleSelector(){
var sceltaCaselle = $(this).val();
if (sceltaCaselle != "default") {
  $("#contenitoreCaselle").empty();

  var griglia = $("#contenitoreCaselle");

  switch (sceltaCaselle) {
    case "piccole":
      griglia.css({
        "grid-template-columns": "repeat(12, auto)",
        "grid-template-rows": "repeat(8, auto)",
      });
      var numCaselle = 12 * 8;
      var listaCaselle = [];
      for (var i = 0; i < numCaselle; i++) {
        var idCasella = i+1;
        var casella = $('<div class = "casella" id = "c'+idCasella+'"></div>');
        griglia.append(casella);
        listaCaselle.push(casella);
      }
      caselleDroppable(listaCaselle);
      break;
    case "medie":
      griglia.css({
        "grid-template-columns": "repeat(9, auto)",
        "grid-template-rows": "repeat(6, auto)",
      });
      var numCaselle = 9 * 6;
      var listaCaselle = [];
      for (var i = 0; i < numCaselle; i++) {
        var idCasella = i+1;
        var casella = $('<div class = "casella" id = "c'+idCasella+'"></div>');
        griglia.append(casella);
        listaCaselle.push(casella);
      }
      caselleDroppable(listaCaselle);
      break;
    case "grandi":
      griglia.css({
        "grid-template-columns": "repeat(6, auto)",
        "grid-template-rows": "repeat(4, auto)",
      });
      var numCaselle = 6 * 4;
      var listaCaselle = [];
      for (var i = 0; i < numCaselle; i++) {
        var idCasella = i+1;
        var casella = $('<div class = "casella" id = "c'+idCasella+'"></div>');
        griglia.append(casella);
        listaCaselle.push(casella);
      }
      caselleDroppable(listaCaselle);
      break;
    default:
      break;
  }
  $(this).val('default');
}
}

function tokenSelectorMostro(){
var sceltaToken = $(this).val();
var idTokenSelezionato = $('#mostroSelector').find(':selected').attr('id');
var casellaIniziale = $('#c1');
if (sceltaToken != "vuoto" && casellaIniziale != null) {
  var nuovoToken = $(
    '<div class="token"><img src="' + sceltaToken + '" alt="' + idTokenSelezionato + '"></div>'
  );
  $("#c1").append(nuovoToken);
}

nuovoToken.draggable({
  containment: "#body",
  cursor: "move",
  scroll: true,
  start: function (event, ui) {
    console.log("Inizio trascinamento");
  },
  drag: function (event, ui) {
    console.log("Trascinamento in corso");
  },
  stop: function (event, ui) {
    console.log("Fine trascinamento");
  },
});

tokenMenu(nuovoToken);

nuovoToken.on('dblclick', function(e) {
  tokenGlobale = nuovoToken;
  var dialogo = $('#confermaEliminazione');
  dialogo.css({
    left: e.pageX + 'px',
    top: e.pageY + 'px',
    display: 'block'
  })
});

$(this).val("vuoto");
}

function tokenSelectorAvventuriero(){
var sceltaToken = $(this).val();
var idTokenSelezionato = $('#avventurieroSelector').find(':selected').attr('id');
var casellaIniziale = $('#c1');
if (sceltaToken != "vuoto" && casellaIniziale != null) {
  var nuovoToken = $(
    '<div class="token"><img src="' + sceltaToken + '" alt="' + idTokenSelezionato + '"></div>'
  );
  $("#c1").append(nuovoToken);
}

nuovoToken.draggable({
  containment: "#body",
  cursor: "move",
  scroll: true,
  start: function (event, ui) {
    console.log("Inizio trascinamento");
  },
  drag: function (event, ui) {
    console.log("Trascinamento in corso");
  },
  stop: function (event, ui) {
    console.log("Fine trascinamento");
  },
});

tokenMenu(nuovoToken);

nuovoToken.on('dblclick', function(e) {
  tokenGlobale = nuovoToken;
  var dialogo = $('#confermaEliminazione');
  dialogo.css({
    left: e.pageX + 'px',
    top: e.pageY + 'px',
    display: 'block'
  })
});

$(this).val("vuoto");
}

function tokenMenu(token) {
  token.on('contextmenu', function(e) {
    e.preventDefault();
    $('#tokenMenu').remove();
    var menu = $('<div id="tokenMenu"></div>');
    //apro una richiesta verso il server per recuperare il token come file json dove trasporto il blob
    //che inserirò nell'attributo src e l'id del token che mi serve per fare la richiesta nell'attributo alt
    let idToken = token.find('img').attr('alt');
	var scheda = $('<img src="/carica/recuperaScheda/'+ idToken + '" alt="'+ idToken+ '">');
        menu.append(scheda);
        menu.css({
          position: 'absolute',
          visibility: 'hidden'
        });
        $('body').append(menu); //Genero il menu temporaneamente invisibile per poter recuperare altezza e larghezza
        var menuWidth = menu.width();
        var menuHeight = menu.height();
        var x = e.pageX;
        var y = e.pageY;
        if (e.pageX > $(window).width() / 2) {
          x -= menuWidth; //Confronto la posizione del click con la larghezza del documento 
        } //E se la posizione del click è maggiore della metà della larghezza dello schermo lo sposto verso sinistra
        if (e.pageY > $(window).height() / 2) {
          y -= menuHeight; //Confronto la posizione del click con l'altezza del documento 
        } //E se la posizione del click è maggiore della metà dell'altezza dello schermo lo sposto verso l'alto
        menu.css({ //Assegno la posizione corretta e lo rendo visibile
          top: y+'px',
          left: x+'px',
          visibility: 'visible'
        });
        $(document).on('click', function() {
          menu.remove();
        });

  });
}

function mappaSelector(){
var sceltaMappa = $(this).val();
$("#mappa").attr("src", sceltaMappa);
$('#mappaUtenteSalva').val(0);
$(this).val("vuoto");
}

function mappaUtenteSelector(){
	var sceltaMappaUtente = $(this).val();
	var idMappaUtente = $('#mappaUtenteSelector').find(':selected').attr('id');
	$('#mappa').attr('src', sceltaMappaUtente)
	$('#mappaUtenteSalva').val(idMappaUtente);
	$(this).val('vuoto');
}

function apriCestino(){
$('#cestinoToken').css('z-index', '9999');
$('#cestinoToken').css('opacity', '0.9');
}

function chiudiCestino(){
$('#cestinoToken').css('z-index', '-9999');
$('#cestinoToken').css('opacity', '0');
}

function apriSidebarDestra(){
var valoreOpacity = $('#sidebar').css('opacity');
var sidebar = $('#sidebar');
if (valoreOpacity === '0') {
 sidebar.css('opacity', '0.9')
 sidebar.css('z-index', '9999')
} else {
    sidebar.css('opacity', '0')
    sidebar.css('z-index', '-9999')
}
}

function chiudiSidebarDestra(){
if($(this).css('opacity') === '0.9'){
  $(this).css('opacity', '0')
  $(this).css('z-index', '-9999')
}
}

function apriSidebarSinistra(){
var valoreOpacity = $('#sidebar2').css('opacity');
var sidebar = $('#sidebar2');
if (valoreOpacity === '0') {
 sidebar.css('opacity', '0.9')
 sidebar.css('z-index', '999999')
} else {
    sidebar.css('opacity', '0')
    sidebar.css('z-index', '-9999')
}
}

function chiudiSidebarSinistra(){
if($(this).css('opacity') === '0.9'){
  $(this).css('opacity', '0')
  $(this).css('z-index', '-9999')
}
}

function rollaDado(e){
  var idDado = e.target.id; //Recupero id dell'elemento cliccato
  var valore = dadi[idDado]; //Recupero il valore del dado cliccato
  var risultato = Math.floor(Math.random() * valore) + 1; //Risultato randomico tra 1 e il valore del dado
  var dado = $('#' + idDado); //Seleziono l'elemento dado e applico i css per l'animazione
  dado.css('animation', 'none'); //Rimuove l'animazione
  dado[0].offsetWidth; //Forza il reflow
  dado.css('animation', ''); //Reimposta l'animazione
  setTimeout(() => { //Riapplica la classe dopo un breve ritardo
    dado.addClass('ruota');
    dado.one('animationend', function() { //Gestore per l'evento di fine animazione
      mostraRisultato(risultato, dado); //Fa apparire il popup del risultato
      dado.removeClass('ruota'); //Rimuove la classe
    });
  }, 10);
}

function aggiungiRollDadi(mappa) {
  Object.keys(mappa).forEach(function(key) { //Per ogni chiave nella mappa recupera l'elemento con quell'id
      $('#' + key).on('click', rollaDado); //E gli applica la funzione di roll del dado
  });
}

function mostraRisultato(risultato, dado) {
$("#risultatoRoll").text(`Roll del ${dado.attr('id')} : ${risultato}`);
$("#popupRisultato").fadeIn();
$("#popupChiudi").click(function() {
  $("#popupRisultato").fadeOut();
});
$(document).on('click', function(){
  $('#popupRisultato').hide();
})
}

function apriComandi(){
  var valoreOpacity = $('#finestraComandi').css('opacity');
  var comandi = $('#finestraComandi');
  if (valoreOpacity === '0') {
    comandi.css('opacity', '0.9')
    comandi.css('z-index', '9999')
  } else {
    comandi.css('opacity', '0')
    comandi.css('z-index', '-9999')
  }
}

function chiudiComandi(){
  if($('#finestraComandi').css('opacity') === '0.9'){
    $('#finestraComandi').css('opacity', '0')
    $('#finestraComandi').css('z-index', '-9999')
  }
}

function inserisciValoriSalvataggio(){
  var valoreMappa = $('#mappa').attr('src');
  $('#salvamappa').val(valoreMappa);
  var valoreGriglia = $('#grigliaDaSalvare').html();
  $('#salvagriglia').val(valoreGriglia);
}

function caricaPartitaSalvata(){
  var nomePartita = $('#selezionaPartita').val();
  $.ajax({
    url: "/carica/caricaPartita/" + nomePartita,
    type: "GET",
    dataType: "json",
    success: function(risposta){
      var mappa = risposta.mappa;
      var griglia = risposta.griglia;
      $('#mappa').attr('src', mappa);
      $('#grigliaDaSalvare').empty();
      $('#grigliaDaSalvare').append(griglia);
      riassegnaDroppable();
      associaFunzioniAiToken();
    },
    error: function(xhr, status, error) {
      alert("Si è verificato un errore di caricamento");
    }
  });
  $('#modalCarica').css({
	  display: 'none'
  })
}

function associaFunzioniAiToken() {
  var listaToken = $('.token');
  listaToken.each(function() {
      var tokenCaricato = $(this);
      
      tokenCaricato.draggable({
          containment: "#body",
          cursor: "move",
          scroll: true,
          start: function(event, ui) {
              console.log("Inizio trascinamento");
          },
          drag: function(event, ui) {
              console.log("Trascinamento in corso");
          },
          stop: function(event, ui) {
              console.log("Fine trascinamento");
          },
      });
      
      tokenMenu(tokenCaricato); // Assumo che tokenMenu sia una funzione definita altrove
      
      tokenCaricato.on('dblclick', function(e) {
          tokenGlobale = tokenCaricato; // Assumo che tokenGlobale sia una variabile definita altrove
          var dialogo = $('#confermaEliminazione');
          dialogo.css({
              left: e.pageX + 'px',
              top: e.pageY + 'px',
              display: 'block'
          });
      });
  });
}

function riassegnaDroppable() {
    var listaCaselle = $('.casella');
    listaCaselle.each(function() {
        var casellaCaricata = $(this);
        casellaCaricata.droppable({
            accept: ".token",
            drop: function(event, ui) {
                var tokenSpostato = ui.draggable.clone();
                ui.draggable.remove();
                $(this).append(tokenSpostato);
                tokenSpostato.css({
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    'z-index': '99'
                });
                
                tokenSpostato.draggable({
                    containment: "#sfondo",
                    cursor: "move",
                    scroll: true,
                    start: function(event, ui) {
                        console.log("Inizio trascinamento");
                    },
                    drag: function(event, ui) {
                        console.log("Trascinamento in corso");
                        tokenSpostato.css({
                            left: '',
                            top: '',
                            transform: '',
                            'z-index': '99999'
                        });
                    },
                    stop: function(event, ui) {
                        console.log("Fine trascinamento");
                    },
                });
                
                tokenMenu(tokenSpostato);
                
                tokenSpostato.on('dblclick', function(e) {
                    tokenGlobale = tokenSpostato;
                    var dialogo = $('#confermaEliminazione');
                    var dialogoWidth = dialogo.width();
                    var dialogoHeight = dialogo.height();
                    var x = e.pageX;
                    var y = e.pageY;
                    if (e.pageX > $(window).width() / 2) {
                        x -= dialogoWidth;
                    }
                    if (e.pageY > $(window).height() / 2) {
                        y -= dialogoHeight;
                    }
                    dialogo.css({
                        left: x + 'px',
                        top: y + 'px',
                        display: 'block'
                    });
                });
            },
        });
    });
}

//Avvio delle funzioni quando il documento è completamente caricato
$(document).ready(function () {
	
$('#apriComandi').on('click', apriComandi);


$("#mostroSelector").on("change", tokenSelectorMostro);


$("#avventurieroSelector").on("change", tokenSelectorAvventuriero);


$('#apriCestino').on('click', apriCestino);


$('#cestinoToken').on('mouseleave', chiudiCestino);


$("#backgroundSelector").on("change", mappaSelector);


$('#mappaUtenteSelector').on('change', mappaUtenteSelector);


$("#caselleSelector").on("change", caselleSelector);


$('#sidebarButton').click(apriSidebarDestra);


$('#sidebarButton2').click(apriSidebarSinistra);


$('#sidebar').on('mouseleave', chiudiSidebarDestra);


$('#sidebar2').on('mouseleave', chiudiSidebarSinistra);


$("#popupChiudi").on("click", function() {
  $('#sidebar2').css('opacity', '0');
  $('#sidebar2').css('z-index', '-9999');
});

$('#popupRisultato').hide();

aggiungiRollDadi(dadi);

$('#confermaEliminaToken').on('click', function(){
  if(tokenGlobale !== null){
    tokenGlobale.remove();
    tokenGlobale = null;
    $('#confermaEliminazione').css('display', 'none');
  }
})

$('#annullaEliminaToken').on('click', function(){
  tokenGlobale = null;
  $('#confermaEliminazione').css('display', 'none');
})

$('#chiudiComandi').on('click', chiudiComandi);

$('#bottoneSalva').on('click', inserisciValoriSalvataggio);

$('#annullaSalva').on('click', function(e){
  e.preventDefault();
})

$('#annullaCarica').on('click', function(e){
  e.preventDefault();
})

$('#confermaCarica').on('click', caricaPartitaSalvata);

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

// Event listener per aprire la finestra modale di caricamento della mappa
  $('#bottoneMappa').on('click', function() {
    $('#modalMappa').css('display', 'block');
  });

  // Event listener per il click sul pulsante di chiusura nella finestra modale di caricamento della mappa
  $('#annullaCaricaMappa').on('click', function(e) {
    // Chiudi la finestra modale
    e.preventDefault();
    $('#modalMappa').css('display', 'none');
  });

  // Event listener per il click sul pulsante "Annulla" e per il pulsante di chiusura
  $('#annullaCaricaMappa, #modalMappa').on('click', function(event) {
    // Verifica se l'evento è stato generato dal pulsante "Annulla" o dallo sfondo della finestra modale
    if (event.target.id === 'annullaCarica' || event.target.id === 'modalMappa') {
      // Chiudi la finestra modale
      event.preventDefault();
      $('#modalMappa').css('display', 'none');
    }
  });

});

// function restoreGame(){
//   //fetch file JSON?
//   //crei variabili di interesse
//   //puoi far ripartire le funzioni che generano mappa token ecc
// }
// //parte dopo che qualunque cosa è stata caricata

// window.onload = () =>{
//   //funzione che controllerà se esiste una sessione salvata(key)
//   if(localStorage.getItem(key)){
//     restoreGame()
//   }
// }

//Funzioni aggiuntive (si possono caricare nel document ready sopra probabilmente)(probabilmente scrivere in jquery)
document.addEventListener("DOMContentLoaded", function() {
  const modalSalva = document.getElementById("modalSalva");
  const modalCarica = document.getElementById("modalCarica");
  const salvaButton = document.getElementById("bottoneSalva");
  const caricaButton = document.getElementById("bottoneCarica");
  const confermaSalvaButton = document.getElementById("confermaSalva");
  const annullaSalvaButton = document.getElementById("annullaSalva");
  const annullaCaricaButton = document.getElementById("annullaCarica");

  // Event listener per aprire la finestra modale di salvataggio
  salvaButton.addEventListener("click", function() {
      modalSalva.style.display = "block";
  });

  // Event listener per aprire la finestra modale di caricamento
  caricaButton.addEventListener("click", function() {
      modalCarica.style.display = "block";
  });

  // Event listener per il click sul pulsante "Conferma" nella finestra modale di salvataggio
  confermaSalvaButton.addEventListener("click", function() {
      // Qui puoi aggiungere la logica per salvare la partita
      modalSalva.style.display = "none";
  });

  // Event listener per il click sul pulsante "Annulla" nella finestra modale di salvataggio
  annullaSalvaButton.addEventListener("click", function() {
      modalSalva.style.display = "none";
  });

  // Event listener per il click sul pulsante "Annulla" nella finestra modale di caricamento
  annullaCaricaButton.addEventListener("click", function() {
      modalCarica.style.display = "none";
  });

  // Event listener per il click sul pulsante di chiusura nella finestra modale di salvataggio
  document.getElementById("annullaSalva").addEventListener("click", function() {
      modalSalva.style.display = "none";
  });

  // Event listener per il click sul pulsante di chiusura nella finestra modale di caricamento
  document.getElementById("annullaCarica").addEventListener("click", function() {
      modalCarica.style.display = "none";
  });
});
