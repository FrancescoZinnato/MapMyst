// Variabili static form
let idPoteri = 0;
let idTratti = 0;
let idAure = 0;

// Variabili statiche scheda
let idPoteriScheda = 0;
let idTrattiScheda = 0;
let idAureScheda = 0;

// Costante che rappresenta il div che contiene la scheda e il token
const scheda = document.getElementById('scheda');
const tokenPicture = document.getElementById('tokenPicture');

// Variabile che verifica se ho generato la scheda
let schedaGenerata = false;

// Costanti per rappresentare il form finale
const urlScheda = document.getElementById("urlScheda");
const invioNome = document.getElementById("invioNome");
const invioRuolo = document.getElementById("invioRuolo");
const invioGruppo = document.getElementById("invioGruppo");
const invioTaglia = document.getElementById("invioTaglia");
const invioPe = document.getElementById("invioPe");
const invioLivello = document.getElementById("invioLivello");
const urlToken = document.getElementById("urlToken");
const inviaTestuali = document.getElementById("inviaTestuali");

// Costanti che referenziano i campi del form
const nomeMostro = document.getElementById("nomeMostro");
const livello = document.getElementById("livello");
const ruolo = document.getElementById("ruolo");
const gruppo = document.getElementById("gruppo");
const guida = document.getElementById("guida");
const impulsi = document.getElementById("impulsi");
const tipoMostro = document.getElementById("tipoMostro");
const origine = document.getElementById("origine");
const taglia = document.getElementById("taglia");
const keywordsMostro = document.getElementById("keywordsMostro");
const razza = document.getElementById("razza");
const pf = document.getElementById("pf");
const impulsiCurativi = document.getElementById("impulsiCurativi");
const valoreImpulso = document.getElementById("valoreImpulso");
const ca = document.getElementById("ca");
const tempra = document.getElementById("tempra");
const riflessi = document.getElementById("riflessi");
const volonta = document.getElementById("volonta");
const forza = document.getElementById("forza");
const costituzione = document.getElementById("costituzione");
const destrezza = document.getElementById("destrezza");
const intelligenza = document.getElementById("intelligenza");
const saggezza = document.getElementById("saggezza");
const carisma = document.getElementById("carisma");
const modFor = document.getElementById("modFor");
const modCos = document.getElementById("modCos");
const modDes = document.getElementById("modDes");
const modInt = document.getElementById("modInt");
const modSag = document.getElementById("modSag");
const modCar = document.getElementById("modCar");
const velocita = document.getElementById("velocita");
const ts = document.getElementById("ts");
const puntiAzione = document.getElementById("puntiAzione");
const iniziativa = document.getElementById("iniziativa");
const percezione = document.getElementById("percezione");
const sensi = document.getElementById("sensi");
const immunita = document.getElementById("immunita");
const resistenza = document.getElementById("resistenza");
const vulnerabilita = document.getElementById("vulnerabilita");
const abilita = document.getElementById("abilita");
const allineamento = document.getElementById("allineamento");
const linguaggi = document.getElementById("linguaggi");
const equipaggiamento = document.getElementById("equipaggiamento");

// Costanti che referenziano i campi della scheda
const nomeMostroScheda = document.getElementById("nomeMostroScheda");
const livelloScheda = document.getElementById("livelloScheda");
const ruoloScheda = document.getElementById("ruoloScheda");
const gruppoScheda = document.getElementById("gruppoScheda");
const guidaScheda = document.getElementById("guidaScheda");
const impulsiScheda = document.getElementById("impulsiScheda");
const tipoMostroScheda = document.getElementById("tipoMostroScheda");
const origineScheda = document.getElementById("origineScheda");
const tagliaScheda = document.getElementById("tagliaScheda");
const keywordsMostroScheda = document.getElementById("keywordsMostroScheda");
const razzaScheda = document.getElementById("razzaScheda");
const pe = document.getElementById("pe");
const pfScheda = document.getElementById("pfScheda");
const sanguinanteScheda = document.getElementById("sanguinanteScheda");
const impulsiCurativiScheda = document.getElementById("impulsiCurativiScheda");
const valoreImpulsoScheda = document.getElementById("valoreImpulsoScheda");
const caScheda = document.getElementById("caScheda");
const tempraScheda = document.getElementById("tempraScheda");
const riflessiScheda = document.getElementById("riflessiScheda");
const volontaScheda = document.getElementById("volontaScheda");
const forzaScheda = document.getElementById("forzaScheda");
const costituzioneScheda = document.getElementById("costituzioneScheda");
const destrezzaScheda = document.getElementById("destrezzaScheda");
const intelligenzaScheda = document.getElementById("intelligenzaScheda");
const saggezzaScheda = document.getElementById("saggezzaScheda");
const carismaScheda = document.getElementById("carismaScheda");
const modForScheda = document.getElementById("modForScheda");
const modCosScheda = document.getElementById("modCosScheda");
const modDesScheda = document.getElementById("modDesScheda");
const modIntScheda = document.getElementById("modIntScheda");
const modSagScheda = document.getElementById("modSagScheda");
const modCarScheda = document.getElementById("modCarScheda");
const velocitaScheda = document.getElementById("velocitaScheda");
const tsScheda = document.getElementById("tsScheda");
const puntiAzioneScheda = document.getElementById("puntiAzioneScheda");
const iniziativaScheda = document.getElementById("iniziativaScheda");
const percezioneScheda = document.getElementById("percezioneScheda");
const sensiScheda = document.getElementById("sensiScheda");
const immunitaScheda = document.getElementById("immunitaScheda");
const resistenzaScheda = document.getElementById("resistenzaScheda");
const vulnerabilitaScheda = document.getElementById("vulnerabilitaScheda");
const abilitaScheda = document.getElementById("abilitaScheda");
const allineamentoScheda = document.getElementById("allineamentoScheda");
const linguaggiScheda = document.getElementById("linguaggiScheda");
const equipaggiamentoScheda = document.getElementById("equipaggiamentoScheda");

// Costanti che referenziano i contenitori "a scomparsa" della scheda
const boxStatus = document.getElementById("boxStatus");
const boxGuida = document.getElementById("boxGuida");
const boxKeywordsMostro = document.getElementById("boxKeywordsMostro");
const boxRazza = document.getElementById("boxRazza");
const boxSanguinante = document.getElementById("boxSanguinante");
const boxImpulsiCurativi = document.getElementById("boxImpulsiCurativi");
const boxValoreImpulso = document.getElementById("boxValoreImpulso");
const boxImmunita = document.getElementById("boxImmunita");
const boxResistenza = document.getElementById("boxResistenza");
const boxVulnerabilita = document.getElementById("boxVulnerabilita");
const boxTs = document.getElementById("boxTs");
const boxPuntiAzione = document.getElementById("boxPuntiAzione");
const boxSensi = document.getElementById("boxSensi");
const boxTratti = document.getElementById("boxTratti");
const boxAzioniStandard = document.getElementById("boxAzioniStandard");
const boxAzioniMovimento = document.getElementById("boxAzioniMovimento");
const boxAzioniMinori = document.getElementById("boxAzioniMinori");
const boxAzioniGratuite = document.getElementById("boxAzioniGratuite");
const boxAzioniAttivate = document.getElementById("boxAzioniAttivate");
const boxNessunaAzione = document.getElementById("boxNessunaAzione");
const boxAbilita = document.getElementById("boxAbilita");
const boxNarrativi = document.getElementById("boxNarrativi");
const boxEquipaggiamento = document.getElementById("boxEquipaggiamento");

// Funzione per fare apparire un messaggio di errore
function errore(messaggioErrore) {
    // Nell'elemento con id 'messaggioErrore', salva il contenuto della stringa passata come parametro
    document.getElementById('messaggioErrore').textContent = messaggioErrore;
    // Rendi visibile l'elemento con id 'errore'
    document.getElementById('errore').style.display = 'flex';
    // Al click sull'elemento 'errore' (che occupa l'intera pagina), nascondi l'elemento
    document.getElementById('errore').addEventListener('click', function() {
        document.getElementById('errore').style.display = 'none';
        document.getElementById('messaggioErrore').textContent = "";
    });
}

// Funzione booleana per controllare che l'utente abbia settato livello, ruolo e gruppo
function statisticheEsistono() {

    // Effettuo i controlli
    if (!livello.value || !ruolo.value || !gruppo.value) {
        return false;
    } else {
        return true;
    }
}

// Funzione per calcolare statistiche primarie
function statistichePrimarie() {

    // Controllo che non esistano valori nulli
    if (!statisticheEsistono()) {
        errore("Devi prima selezionare il livello, il ruolo e il gruppo.");
    } else {

        // Calcolo delle difese base
        tempra.value = 12 + parseInt(livello.value);
        riflessi.value = 12 + parseInt(livello.value);
        volonta.value = 12 + parseInt(livello.value);

        // Calcolo della Classe armatura
        switch (ruolo.value) {
            case "Schermagliatore":
            case "Controllore":
            case "Appostato":
                ca.value = 14 + parseInt(livello.value);
                break;
            case "Soldato":
                ca.value = 16 + parseInt(livello.value);
                break;
            default:
                ca.value = 12 + parseInt(livello.value);
                break;
        }

        // Calcolo i punti ferita
        switch (ruolo.value) {
            case "Bruto":
                pf.value = 26 + (10 * parseInt(livello.value));
                break;
            case "Artigliere":
            case "Appostato":
                pf.value = 21 + (6 * parseInt(livello.value));
                break;
            default:
                pf.value = 24 + (8 * parseInt(livello.value));
                break;
        }

        // Calcolo dei punteggi di caratteristica
        forza.value = Math.floor(13 + (parseInt(livello.value) / 2));
        costituzione.value = Math.floor(13 + (parseInt(livello.value) / 2));
        destrezza.value = Math.floor(13 + (parseInt(livello.value) / 2));
        intelligenza.value = Math.floor(13 + (parseInt(livello.value) / 2));
        saggezza.value = Math.floor(13 + (parseInt(livello.value) / 2));
        carisma.value = Math.floor(13 + (parseInt(livello.value) / 2));

        // Calcolo i modificatori di caratteristica
        aggiornaMod();

        // Apporto delle modifiche nel caso di mostri gregari, elite o solitari
        switch (gruppo.value) {
            case "Gregario":
                pf.value = 1;
                pf.disabled = true;
                break;
            case "Elite":
                pf.disabled = false;
                impulsiCurativi.disabled = false;
                valoreImpulso.disabled = false;
                pf.value *= 2;
                ts.value = "+2";
                puntiAzione.value = "1";
                break;
            case "Solitario":
                pf.disabled = false;
                impulsiCurativi.disabled = false;
                valoreImpulso.disabled = false;
                pf.value *= 4;
                ts.value = "+5";
                puntiAzione.value = "2";
                break;
            default:
                pf.disabled = false;
                impulsiCurativi.disabled = false;
                valoreImpulso.disabled = false;
        }

        // Impulsi curativi e valore dell'impulso
        if (impulsi.checked) {
            if (gruppo.value === "Gregario") {
                impulsiCurativi.value = "";
                impulsiCurativi.placeholder = "n/a";
                impulsiCurativi.disabled = true;
                valoreImpulso.value = "";
                valoreImpulso.placeholder = "n/a";
                valoreImpulso.disabled = true;
            } else {
                valoreImpulso.value = Math.floor(pf.value / 4);
                impulsiCurativi.value = parseInt(livello.value) <= 10 ? 1 : (parseInt(livello.value) <= 20 ? 2 : 3);
                impulsiCurativi.disabled = false;
                valoreImpulso.disabled = false;
            }
        } else {
            impulsiCurativi.value = "";
            impulsiCurativi.placeholder = "n/a";
            impulsiCurativi.disabled = true;
            valoreImpulso.value = "";
            valoreImpulso.placeholder = "n/a";
            valoreImpulso.disabled = true;
        }
    }
}

// Funzione per aggiornare i modificatori di caratteristica
function aggiornaMod() {

    // Controllo che l'utente abbia inserito tutti i valori
    if(!livello || !forza || !costituzione || !destrezza || !intelligenza || !saggezza || !carisma) {
        errore("Devi prima selezionare un livello e generare i punteggi di caratteristica.");
    } else {

        // Calcolo metà del livello arrotondata per difetto
        let metaLivello = Math.floor(parseInt(livello.value)/2);
        
        //  Calcolo i modificatori
        modFor.value = segno(Math.floor((parseInt(forza.value)-10)/2) + metaLivello);
        modCos.value = segno(Math.floor((parseInt(costituzione.value)-10)/2) + metaLivello);
        modDes.value = segno(Math.floor((parseInt(destrezza.value)-10)/2) + metaLivello);
        modInt.value = segno(Math.floor((parseInt(intelligenza.value)-10)/2) + metaLivello);
        modSag.value = segno(Math.floor((parseInt(saggezza.value)-10)/2) + metaLivello);
        modCar.value = segno(Math.floor((parseInt(carisma.value)-10)/2) + metaLivello);

        // Calcolo del modificatore di Percezione
        percezione.value = modSag.value;
        
        // Calcolo del modificatore di iniziativa
        switch (ruolo.value) {
            case "Schermagliatore":
            case "Soldato":
                iniziativa.value = segno(parseInt(modDes.value) + 2);
                break;
            case "Appostato":
                iniziativa.value = segno(parseInt(modDes.value) + 4);
                break;
            default:
                iniziativa.value = segno(parseInt(modDes.value));
        }
    }
}

// Funzione che aggiunge un segno + ai numeri positivi che sono un modificatore
function segno(valore) {
    return (valore >= 0 ? '+' : '') + valore;
}

// Funzione che aggiunge un segno + ai numeri positivi e inserisce i numeri fra parentesi
function parentesiSegno(valore) {
    return "(" + (valore >= 0 ? '+' : '') + valore + ")";
}

// Funzione per spostarsi su Tratti e Poteri
function redirectTratti() {

    // Controllo se statistiche esistono
    if(!statisticheEsistono()) {
        errore("Devi prima selezionare il livello, il ruolo e il gruppo.");
    } else {
        // Reindirizzo su tratti e poteri
        document.getElementById("formTratti").style.display = 'grid';
        document.getElementById("formStatistiche").style.display = 'none';
    }
   
}

// Funzione per spostarsi su Statistiche
function redirectStatistiche() {

    // Controllo che tutti i poteri abbiano i campi mandatori assegnati
    let flag = true;
    for(let i=1; i<=idPoteri && flag; i++) {

        // Prelevo i riferimenti ai campi form del potere
        let azione = document.getElementById("azione-" + idPoteri);
        let nomePotere = document.getElementById("nomePotere-" + idPoteri);
        let tipoPotere = document.getElementById("tipoPotere-" + idPoteri);
        let ricarica = document.getElementById("ricarica-" + idPoteri);
        let descrizionePotere = document.getElementById("descrizionePotere-" + idPoteri);
        // Effettuo i controlli
        if(!azione.value || !nomePotere.value || !tipoPotere.value || !ricarica.value || !descrizionePotere.value) {
            flag = false;
            break;
        }
    }

    for(let i=1; i<=idTratti && flag; i++) {

        // Prelevo i riferimenti ai campi form del tratto
        let nomeTratto = document.getElementById("nomeTratto-" + idTratti);
        let descrizioneTratto = document.getElementById("descrizioneTratto-" + idTratti);
        // Effettuo i controlli
        if(!nomeTratto.value || !descrizioneTratto.value) {
            flag = false;
            break;
        }
    }

    for(let i=1; i<=idAure && flag; i++) {

        // Prelevo i riferimenti ai campi form dell'aura
        let nomeAura = document.getElementById("nomeAura-" + idAure);
        let descrizioneAura = document.getElementById("descrizioneAura-" + idAure);
        // Effettuo i controlli
        if(!nomeAura.value || !descrizioneAura.value) {
            flag = false;
            break;
        }
    }

    if(!flag) {
        errore("Alcuni campi obbligatori non sono stati riempiti.");
    } else {
        document.getElementById("formStatistiche").style.display = 'grid';
        document.getElementById("formTratti").style.display = 'none';
    }

}

// Funzione per aggiungere un potere
function aggiungiPotere(idGenerato) {

    // Mi preparo delle variabili ausiliarie che serviranno per le opzioni delle select
    let op1, op2, op3, op4, op5, op6, op7, op8, op9, op10;
    
    // Creo l'elemento div in cui intendo memorizzare il potere
    let nuovoPotere = document.createElement("div");

            // Setto id e classe del div appena creato
            nuovoPotere.id = "potere-" + idGenerato;
            nuovoPotere.classList.add("potere");

    // Creo la la select per il tipo di azione
    let selectAzione = document.createElement("select");

            // Setto gli attributi per la select
            selectAzione.id = "azione-" + idGenerato;

            // Creo l'opzione di default per la select
            op1 = creaOpzione("", "Azione");
            op1.disabled = true;
            op1.selected = true;

            // Creo le altre opzioni
            op2 = creaOpzione("standard", "Standard");
            op3 = creaOpzione("movimento", "Movimento");
            op4 = creaOpzione("minore", "Minore");
            op5 = creaOpzione("gratuita", "Gratuita");
            op6 = creaOpzione("attivata", "Attivata");
            op7 = creaOpzione("nessuna", "Nessuna");

            // Appendo le opzioni alla select
            selectAzione.appendChild(op1);
            selectAzione.appendChild(op2);
            selectAzione.appendChild(op3);
            selectAzione.appendChild(op4);
            selectAzione.appendChild(op5);
            selectAzione.appendChild(op6);
            selectAzione.appendChild(op7);

            // Appendo la select al potere
            nuovoPotere.appendChild(selectAzione);

            // Select per il tipo del potere
            let selectTipo = document.createElement("select");

                    // Setto gli attributi della select
                    selectTipo.id = "tipoPotere-" + idGenerato;

                    // Creo l'opzione di default per la select
                    op1 = creaOpzione("", "Tipo");
                    op1.disabled = true;
                    op1.selected = true;

                    // Creo le altre opzioni
                    op2 = creaOpzione("mischia", "Mischia");
                    op3 = creaOpzione("bMischia", "Mischia (basilare)");
                    op4 = creaOpzione("distanza", "Distanza");
                    op5 = creaOpzione("bDistanza", "Distanza (basilare)");
                    op6 = creaOpzione("ravvicinato", "Ravvicinato");
                    op7 = creaOpzione("area", "Ad area");

                    // Appendo le opzioni alla select
                    selectTipo.appendChild(op1);
                    selectTipo.appendChild(op2);
                    selectTipo.appendChild(op3);
                    selectTipo.appendChild(op4);
                    selectTipo.appendChild(op5);
                    selectTipo.appendChild(op6);
                    selectTipo.appendChild(op7);

                    // Appendo la select al potere
                    nuovoPotere.appendChild(selectTipo);

    // Box testo per il nome del potere
    let nomePotere = document.createElement("input");

            // Setto gli attributi dell'input
            nomePotere.id = "nomePotere-" + idGenerato;
            nomePotere.type = "text";
            nomePotere.placeholder = " Nome del potere";

            // Appendo il nuovo elemento al potere
            nuovoPotere.appendChild(nomePotere);

    // Box testo per le parole chiave del potere
    let keywords = document.createElement("input");

            // Setto gli attributi dell'input
            keywords.id = "keywordsPotere-" + idGenerato;
            keywords.type = "text";
            keywords.placeholder = " Parole chiave";

            // Appendo il nuovo elemento al potere
            nuovoPotere.appendChild(keywords);
    
    // Select per selezionare il tipo di ricarica
    let selectRicarica = document.createElement("select");

            // Setto gli attributi della select
            selectRicarica.id = "ricarica-" + idGenerato;

            // Creo l'opzione di default per la select
            op1 = creaOpzione("", "Ricarica");
            op1.disabled = true;
            op1.selected = true;

            // Creo le altre opzioni
            op2 = creaOpzione("volonta", "A volontà");
            op3 = creaOpzione("incontro", "A incontro");
            op4 = creaOpzione("giornaliero", "Giornaliero");
            op5 = creaOpzione("ricarica2", "Ricarica 2+");
            op6 = creaOpzione("ricarica3", "Ricarica 3+");
            op7 = creaOpzione("ricarica4", "Ricarica 4+");
            op8 = creaOpzione("ricarica5", "Ricarica 5+");
            op9 = creaOpzione("ricarica6", "Ricarica 6+");
            op10 = creaOpzione("ricaricaQuando", "Ricarica ...");

            // Appendo le opzioni alla select
            selectRicarica.appendChild(op1);
            selectRicarica.appendChild(op2);
            selectRicarica.appendChild(op3);
            selectRicarica.appendChild(op4);
            selectRicarica.appendChild(op5);
            selectRicarica.appendChild(op6);
            selectRicarica.appendChild(op7);
            selectRicarica.appendChild(op8);
            selectRicarica.appendChild(op9);
            selectRicarica.appendChild(op10);

            // Appendo la select al potere
            nuovoPotere.appendChild(selectRicarica);

    // Box per note aggiuntive
    let noteRicarica = document.createElement("input");

            // Setto gli attributi dell'input
            noteRicarica.id = "noteRicarica-" + idGenerato;
            noteRicarica.type = "text";
            noteRicarica.placeholder = " Note aggiuntive"

            // Appendo il box di input al potere
            nuovoPotere.appendChild(noteRicarica);
    
    // Textarea per descrizione del potere
    let descrizionePotere = document.createElement("textarea");

            // Setto gli attributi per la textarea
            descrizionePotere.id = "descrizionePotere-" + idGenerato;
            descrizionePotere.placeholder = "Descrizione del potere";

            // Appendo la textarea al potere
            nuovoPotere.appendChild(descrizionePotere);
    
    // Select per difesa attaccata
    let difesaAttaccata = document.createElement("select");

            // Setto gli attributi della select
            difesaAttaccata.id = "difesaAttaccata-" + idGenerato;
            difesaAttaccata.textAlign = "center";

            // Creo le opzioni per la select
            op1 = creaOpzione("","Nessun attacco");
            op2 = creaOpzione("ca","Attacco vs ca");
            op3 = creaOpzione("difese", "Attacco vs Difese");

            // Setto l'opzione di default
            op1.selected = true;

            // Appendo le opzioni alla select
            difesaAttaccata.appendChild(op1);
            difesaAttaccata.appendChild(op2);
            difesaAttaccata.appendChild(op3);

            // Appendo la select al potere
            nuovoPotere.appendChild(difesaAttaccata);
    
    // Select per numero bersagli
    let selectBersagli = document.createElement("select");

            // Setto gli attributi della select
            selectBersagli.id = "numeroBersagli-" + idGenerato;

            // Creo le opzioni per la select
            op1 = creaOpzione("", "Numero di bersagli");
            op2 = creaOpzione("singolo", "Bersaglio singolo");
            op3 = creaOpzione("multipli", "Bersagli multipli");

            // Setto l'opzione di default
            op1.selected = true;
            op1.disabled = true;

            // Appendo le opzioni alla select
            selectBersagli.appendChild(op1);
            selectBersagli.appendChild(op2);
            selectBersagli.appendChild(op3);

            // Appendo la select al potere
            nuovoPotere.appendChild(selectBersagli);
    
    // Select per soglia dei danni
    let selectDanni = document.createElement("select");

            // Setto gli attributi della select
            selectDanni.id = "tipoDanni-" + idGenerato;

            // Creo le opzioni per la select
            op1 = creaOpzione("","Tipo di danni");
            op2 = creaOpzione("normali","Danni normali");
            op3 = creaOpzione("elevati", "Danni elevati");

            // Setto l'opzione di default
            op1.selected = true;
            op1.disabled = true;

            // Appendo le opzioni alla select
            selectDanni.appendChild(op1);
            selectDanni.appendChild(op2);
            selectDanni.appendChild(op3);

            // Appendo la select al potere
            nuovoPotere.appendChild(selectDanni);

    // Box per l'attacco suggerito
    let attaccoSuggerito = document.createElement("input");

        // Setto gli attributi per il box testo
        attaccoSuggerito.type = "text";
        attaccoSuggerito.id = "attaccoSuggerito-" + idGenerato;
        attaccoSuggerito.placeholder = "Attacco"
        attaccoSuggerito.disabled = true;

        // Appendo il box testo al potere
        nuovoPotere.appendChild(attaccoSuggerito);

    // Box per il danno suggerito
    let dannoSuggerito = document.createElement("input");

            // Setto gli attributi per il box testo
            dannoSuggerito.type = "text";
            dannoSuggerito.id = "dannoSuggerito-" + idGenerato;
            dannoSuggerito.placeholder = "Danni"
            dannoSuggerito.disabled = true;

            // Appendo il box testo al potere
            nuovoPotere.appendChild(dannoSuggerito);

    // Pulsante per calcolare i danni
    let calcolaDanno = document.createElement("button");
            
            // Setto gli attributi per il pulsante
            calcolaDanno.id = "calcolaDanno-" + idGenerato;
            calcolaDanno.textContent = "Genera i valori";

            // Associa un listener al pulsante appena creato
            calcolaDanno.addEventListener("click", function() {

                // Leggi dati del mostro
                let ricarica = document.getElementById("ricarica-" + idGenerato);
                let difesaAttaccata = document.getElementById("difesaAttaccata-" + idGenerato);
                let tipoDanni = document.getElementById("tipoDanni-" + idGenerato);
                let numeroBersagli = document.getElementById("numeroBersagli-" + idGenerato);
                let tipoPotere = document.getElementById("tipoPotere-" + idGenerato);

                // Controllo che l'utente abbia selezionato un tipo di ricarica
                if (ricarica.value === "" || tipoPotere.value === "" || tipoDanni.value === "" || numeroBersagli.value === "" || difesaAttaccata.value === "") {
                    errore("Devi prima selezionare il tipo di attacco e di ricarica, la difesa attaccata, il numero di bersagli e il tipo dei danni.");
                } else {
                    // Calcolo danno medio
                    let dannoMedio = 8 + parseInt(livello.value);

                    // Calcolo attacco medio
                    let attaccoSuggerito;
                    if(difesaAttaccata.value === "ca") {
                        attaccoSuggerito = 5 + parseInt(livello.value);
                    } else {
                        attaccoSuggerito = 3 + parseInt(livello.value);
                    }

                    // Calcolo percentuale da applicare ai danni
                    let percentuale = 0;
                    if (gruppo.value === "gregario") {percentuale -= 50;}
                    if (ruolo.value === "Bruto") {percentuale += 25;}
                    if (numeroBersagli.value === "multipli") {percentuale -= 25;}
                    if (ricarica.value != "nessuna" && ricarica != "volonta") {percentuale += 25;}
                    if (tipoDanni.value === "elevati") {percentuale += 25;}
                    if ((ruolo.value === "Artigliere" && tipoPotere.value === "mischia") || (ruolo.value === "Artigliere" && tipoPotere.value === "bMischia")) {percentuale -= 25;}

                    // Applico la percentuale
                    dannoMedio = Math.floor(dannoMedio + dannoMedio * ((percentuale / 100) * 0.5));

                    // Scrivo il risultato
                    document.getElementById("dannoSuggerito-" + idGenerato).value = dannoMedio;
                    document.getElementById("attaccoSuggerito-" + idGenerato).value = segno(attaccoSuggerito);
                }
            });

            // Appendi il pulsante creato al potere
            nuovoPotere.appendChild(calcolaDanno);

    // Pulsante per eliminare il potere
    let eliminaPotere = document.createElement("button");

            // Setto gli attributti del pulsante
            eliminaPotere.id = "eliminaPotere-" + idGenerato;
            eliminaPotere.textContent = "Elimina il potere"

            // Appendo il pulsante al potere
            nuovoPotere.appendChild(eliminaPotere);

            // Associa un listener al pulsante appena creato
            eliminaPotere.addEventListener("click", function elimina() {
                    let elemento = document.getElementById(nuovoPotere.id);
                    elemento.parentNode.removeChild(elemento);
                    idPoteri--;
            });
            

    // Verifico dove si trova l'ultimo figlio di formTratti
    let ultimoFiglio = document.getElementById("formTratti").lastElementChild;

    // Aggiungo il nuovo potere alla penultima posizione
    document.getElementById("formTratti").insertBefore(nuovoPotere, ultimoFiglio);
}

// Funzione per creare opzione in una select
function creaOpzione(value, textContent) {
    // Crea un elemento option nel documento
    let opzione = document.createElement("option");
    // Assegna il value passato come parametro
    opzione.value = value;
    // Assegna il textContent passato come parametro
    opzione.textContent = textContent;
    // Restituisce l'opzione creata
    return opzione;
}

// Funzione per aggiungere un tratto
function aggiungitratto(idGenerato) {
    
    // Creazione di una nuova sezione, che sarà un elemento div
    let nuovoTratto = document.createElement("div");

    // Assegno alla nuova sezione l'ID autoincrementato e la classe "tratto"
    nuovoTratto.id = "tratto-" + idGenerato;
    nuovoTratto.classList.add("tratto");

    // Box testo per il nome del tratto
    let nomeTratto = document.createElement("input");

            // Setto gli attributi per il box testo
            nomeTratto.id = "nomeTratto-" + idGenerato;
            nomeTratto.type = "text";
            nomeTratto.placeholder = " Nome del tratto";

            // Appento il box testo creato al tratto
            nuovoTratto.appendChild(nomeTratto);

    // Textarea per descrizione del tratto
    let descrizioneTratto = document.createElement("textarea");

            // Setto gli attributi per la textarea
            descrizioneTratto.id = "descrizioneTratto-" + idGenerato;
            descrizioneTratto.placeholder = "Descrizione del tratto";

            // Appendo la textarea al potere
            nuovoTratto.appendChild(descrizioneTratto);
        
    // Pulsante per eliminare il tratto
    let eliminaTratto = document.createElement("button");

            // Setto gli attributti del pulsante
            eliminaTratto.id = "eliminaTratto-" + idGenerato;
            eliminaTratto.textContent = "Elimina il tratto"

            // Associa un listener al pulsante appena creato
            eliminaTratto.addEventListener("click", function elimina() {
                let elemento = document.getElementById(nuovoTratto.id);
                elemento.parentNode.removeChild(elemento);
                idTratti--;
            });

            // Appendo il pulsante all'aura
            nuovoTratto.appendChild(eliminaTratto);
    
    // Verifico dove si trova l'ultimo figlio di formTratti
    let ultimoFiglio = document.getElementById("formTratti").lastElementChild;

    // Aggiungo il nuovo tratto alla penultima posizione
    document.getElementById("formTratti").insertBefore(nuovoTratto, ultimoFiglio);

}

// Funzione che aggiunge un'aura
function aggiungiAura(idGenerato) {

    // Creo una nuova aura, che sarà un elemento di tipo div
    let nuovaAura = document.createElement("div");

    // Assegno all'aura l'id autoincrementato e la classe aura
    nuovaAura.id = "aura-" + idGenerato;
    nuovaAura.classList.add("aura");

    // Creo il box di testo che contiene il nome dell'aura
    let nomeAura = document.createElement("input");

            // Setto gli attributi del box testo
            nomeAura.id = "nomeAura-" + idGenerato;
            nomeAura.type = "text";
            nomeAura.placeholder = " Nome dell'aura";

            // Appendo il box testo all'aura
            nuovaAura.appendChild(nomeAura);

    // Creo il box di testo che contiene le parole chiave dell'aura
    let keywordsAura = document.createElement("input");

            // Setto gli attributi del box testo
            keywordsAura.id = "keywordsAura-" + idGenerato;
            keywordsAura.type = "text";
            keywordsAura.placeholder = " Parole chiave";

            // Appendo il box testo all'aura
            nuovaAura.appendChild(keywordsAura);

    // Creo il box di testo che contiene la gittata dell'aura
    let gittataAura = document.createElement("input");

            // Setto gli attributi del box testo
            gittataAura.id = "gittataAura-" + idGenerato;
            gittataAura.type = "text";
            gittataAura.placeholder = " Gittata";

            // Appendo il box testo all'aura
            nuovaAura.appendChild(gittataAura);

    // Textarea per descrizione dell'aura
    let descrizioneAura = document.createElement("textarea");

            // Setto gli attributi per la textarea
            descrizioneAura.id = "descrizioneAura-" + idGenerato;
            descrizioneAura.placeholder = "Descrizione dell'aura";

            // Appendo la textarea all'aura
            nuovaAura.appendChild(descrizioneAura);

    // Pulsante per eliminare l'aura
    let eliminaAura = document.createElement("button");

            // Setto gli attributti del pulsante
            eliminaAura.id = "eliminaAura-" + idGenerato;
            eliminaAura.textContent = "Elimina l'aura"

            // Associa un listener al pulsante appena creato
            eliminaAura.addEventListener("click", function elimina() {
                let elemento = document.getElementById(nuovaAura.id);
                elemento.parentNode.removeChild(elemento);
                idAure--;
            });

            // Appendo il pulsante all'aura
            nuovaAura.appendChild(eliminaAura);

    // Verifico dove si trova l'ultimo figlio di formTratti
    let ultimoFiglio = document.getElementById("formTratti").lastElementChild;

    // Aggiungo il nuovo potere alla penultima posizione
    document.getElementById("formTratti").insertBefore(nuovaAura, ultimoFiglio);

}

// Funzione per generare la scheda delle statistiche
function generaScheda() {

    // Verifica se tutte le variabili essenziali sono definite e non vuote
    if (
        nomeMostro.value &&
        origine.value &&
        tipoMostro.value &&
        taglia.value &&
        livello.value &&
        pf.value &&
        ca.value &&
        tempra.value &&
        riflessi.value &&
        volonta.value &&
        forza.value &&
        costituzione.value &&
        destrezza.value &&
        intelligenza.value &&
        saggezza.value &&
        carisma.value &&
        modFor.value &&
        modCos.value &&
        modDes.value &&
        modInt.value &&
        modSag.value &&
        modCar.value &&
        velocita.value &&
        iniziativa.value &&
        percezione.value
    ) {

        // Segnalo che la scheda è stata generata
        schedaGenerata = true;
        errore("Scheda generata con successo! Fai click sull'anteprima della scheda per scaricarla.");

        // Nascondo alcune sezioni opzionali
        boxTratti.style.display = "none";
        boxAzioniStandard.style.display = "none";
        boxAzioniMovimento.style.display = "none";
        boxAzioniMinori.style.display = "none";
        boxAzioniGratuite.style.display = "none";
        boxAzioniAttivate.style.display = "none";
        boxNessunaAzione.style.display = "none";

        // Elimino tutti i tratti esistenti
        for(let i=1; i<=idTrattiScheda; i++) {
            document.getElementById("trattoScheda-" + i).remove();
        }
        idTrattiScheda = 0;

        // Elimino tutte le aure esistenti
        for(let i=1; i<=idAureScheda; i++) {
            document.getElementById("auraScheda-" + i).remove();
        }
        idAureScheda = 0;

        // Elimino tutti i poteri esistenti
        for(let i=1; i<=idPoteriScheda; i++) {
            document.getElementById("potereScheda-" + i).remove();
        }
        idPoteriScheda = 0;

        // Ripristina il colore originale dei seguenti campi se l'operazione va a buon fine
        nomeMostro.style.backgroundColor = "#E7E5D4";
        origine.style.backgroundColor = "#E7E5D4";
        tipoMostro.style.backgroundColor = "#E7E5D4";
        taglia.style.backgroundColor = "#E7E5D4";
        livello.style.backgroundColor = "#E7E5D4";
        ruolo.style.backgroundColor = "#E7E5D4";
        gruppo.style.backgroundColor = "#E7E5D4";
        pf.style.backgroundColor = "#E7E5D4";
        ca.style.backgroundColor = "#E7E5D4";
        tempra.style.backgroundColor = "#E7E5D4";
        riflessi.style.backgroundColor = "#E7E5D4";
        volonta.style.backgroundColor = "#E7E5D4";
        forza.style.backgroundColor = "#E7E5D4";
        costituzione.style.backgroundColor = "#E7E5D4";
        destrezza.style.backgroundColor = "#E7E5D4";
        intelligenza.style.backgroundColor = "#E7E5D4";
        saggezza.style.backgroundColor = "#E7E5D4";
        carisma.style.backgroundColor = "#E7E5D4";
        modFor.style.backgroundColor = "#E7E5D4";
        modCos.style.backgroundColor = "#E7E5D4";
        modDes.style.backgroundColor = "#E7E5D4";
        modInt.style.backgroundColor = "#E7E5D4";
        modSag.style.backgroundColor = "#E7E5D4";
        modCar.style.backgroundColor = "#E7E5D4";
        velocita.style.backgroundColor = "#E7E5D4";
        iniziativa.style.backgroundColor = "#E7E5D4";
        percezione.style.backgroundColor = "#E7E5D4";

        // Inietta nella scheda le componenti dei campi mandatori
        nomeMostroScheda.textContent = nomeMostro.value;
        origineScheda.textContent = origine.value.toLowerCase();
        tipoMostroScheda.textContent = tipoMostro.value;
        tagliaScheda.textContent = taglia.value;
        livelloScheda.textContent = livello.value;
        ruoloScheda.textContent = ruolo.value;
        pfScheda.textContent = pf.value + ";";
        sanguinanteScheda.textContent = Math.floor(parseInt(pf.value)/2);
        caScheda.textContent = ca.value + ",";
        tempraScheda.textContent = tempra.value + ",";
        riflessiScheda.textContent = riflessi.value + ",";
        volontaScheda.textContent = volonta.value;
        forzaScheda.textContent = forza.value;
        costituzioneScheda.textContent = costituzione.value;
        destrezzaScheda.textContent = destrezza.value;
        intelligenzaScheda.textContent = intelligenza.value;
        saggezzaScheda.textContent = saggezza.value;
        carismaScheda.textContent = carisma.value;
        modForScheda.textContent = "(" + modFor.value + ")";
        modCosScheda.textContent = "(" + modCos.value + ")";
        modDesScheda.textContent = "(" + modDes.value + ")";
        modIntScheda.textContent = "(" + modInt.value + ")";
        modSagScheda.textContent = "(" + modSag.value + ")";
        modCarScheda.textContent = "(" + modCar.value + ")";
        velocitaScheda.textContent = velocita.value;
        iniziativaScheda.textContent = iniziativa.value;
        percezioneScheda.textContent = percezione.value;
        gruppoScheda.textContent = gruppo.value;

        // Controllo sui pf in caso di mostri gregari
        if(gruppo.value === "Gregario") {
            pfScheda.textContent = "1; un attacco mancato non danneggia mai un gregario.";
            boxSanguinante.style.display = "none";
            
        } else {
            boxSanguinante.style.display = "inline";
        }

        // Inserimento di impulsi curativi e valori impulso quando impulsi è checked
        if(impulsi.checked && gruppo.value != "Gregario")   {
            boxImpulsiCurativi.style.display = "inline";
            boxValoreImpulso.style.display = "inline";
            impulsiCurativiScheda.textContent = impulsiCurativi.value + ";";
            sanguinanteScheda.textContent += ";";
            valoreImpulsoScheda.textContent = valoreImpulso.value;
        } else {
            boxImpulsiCurativi.style.display = "none";
            boxValoreImpulso.style.display = "none";
        }

        // Calcolo dei punti esperienza
        pe.textContent = calcolaPuntiEsperienza(gruppo.value, parseInt(livello.value));

        // Cambiamento genere di "taglia" in caso di tipoMostro maschile
        if (tipoMostro.value === "Umanoide" || tipoMostro.value === "Animato") {
          switch (taglia.value) {
            case "Minuscola":
              tagliaScheda.textContent = "Minuscolo";
              break;
            case "Piccola":
              tagliaScheda.textContent = "Piccolo";
              break;
            case "Media":
              tagliaScheda.textContent = "Medio";
              break;
            case "Mastodontica":
              tagliaScheda.textContent = "Mastodontico";
          }
        }

        // Inserimento delle keywords del mostro (se esistono)
        if(keywordsMostro.value) {
            boxKeywordsMostro.style.display = "inline";
            keywordsMostroScheda.textContent = "(" + keywordsMostro.value + ")";
        } else {
            boxKeywordsMostro.style.display = "none";
        }

        // Inserimento della razza del mostro (se esiste)
        if(razza.value) {
            boxRazza.style.display = "inline";
            razzaScheda.textContent = razza.value;
        } else {
            boxRazza.style.display = "none";
        }

        // Inserimento della virgola nel caso esista la razza
        if(razza.value && keywordsMostro.value) {
            keywordsMostroScheda.textContent = keywordsMostroScheda.textContent + ",";
        } else if(razza.value) {
            tagliaScheda.textContent = tagliaScheda.textContent + ",";
        }

        // Inserimento del gruppo (se diverso da "Standard")
        switch(gruppo.value) {
            case "Gregario":
            case "Solitario":
                boxStatus.style.display = "inline";
                gruppoScheda.textContent = gruppo.value;
                break;
            case "Elite":
                boxStatus.style.display = "inline";
                gruppoScheda.textContent = "d'Elite"
                break;
            case "Standard":
                boxStatus.style.display = "none";
                break;
        }

        // Inserimento della nota '(guida)' se la checkbox è spuntata
        if(guida.checked) {
            boxGuida.style.display = "inline";
            guidaScheda.textContent = "(guida)";
        } else {
            boxGuida.style.display = "none";
        }

        // Inserimento dei sensi speciali (se esistono)
        if(sensi.value) {
            boxSensi.style.display = "inline";
            sensiScheda.textContent = sensi.value;
        } else {
            boxSensi.style.display = "none";
        }

        // Inserimento delle immunità  (se esistono)
        if(immunita.value) {
            boxImmunita.style.display = "inline";
            immunitaScheda.textContent = immunita.value;
        } else {
            boxImmunita.style.display = "none";
        }

        // Inserimento delle resistenze  (se esistono)
        if(resistenza.value) {
            boxResistenza.style.display = "inline";
            resistenzaScheda.textContent = resistenza.value;
        } else {
            boxResistenza.style.display = "none";
        }

        // Inserimento delle vulnerabilità  (se esistono)
        if(vulnerabilita.value) {
            boxVulnerabilita.style.display = "inline";
            vulnerabilitaScheda.textContent = vulnerabilita.value;
        } else {
            boxVulnerabilita.style.display = "none";
        }

        // Inserimento dei punti e virgola per immunità etc
        if(immunita.value && resistenza.value && vulnerabilita.value) {
            immunitaScheda.textContent += ";";
            resistenzaScheda.textContent += ";";
        } else if (immunita.value && vulnerabilita.value || immunita.value && resistenza.value) {
            immunitaScheda.textContent += ";";
        } else if (resistenza.value && vulnerabilita.value) {
            resistenzaScheda.textContent += ";";
        } 

        // Inserimento dei tiri salvezza (se esistono)
        if(ts.value) {
            boxTs.style.display = "inline";
            tsScheda.textContent = ts.value;
        } else {
            boxTs.style.display = "none";
        }

        // Inserimento dei punti azione (se esistono)
        if(puntiAzione.value) {
            boxPuntiAzione.style.display = "inline";
            puntiAzioneScheda.textContent = puntiAzione.value;
        } else {
            boxPuntiAzione.style.display = "none";
        }

        // Inserimento dei punti e virgola per tiri salvezza e punti azione
        if(ts.value && puntiAzione.value) {
            tsScheda.textContent += ";";
        }

        // Inserimento delle abilità (se esistono)
        if(abilita.value) {
            boxAbilita.style.display = "block";
            abilitaScheda.textContent = abilita.value;
        } else {
            boxAbilita.style.display = "none";
        }

        // Inserimento allineamento e linguaggi (se esistono)
        if(!allineamento.value && !linguaggi.value) {
            boxNarrativi.style.display = "none";
        } else {
            allineamentoScheda.textContent = "-";
            linguaggiScheda.textContent = "-";
            boxNarrativi.style.display = "grid";

            if(allineamento.value) {
                allineamentoScheda.textContent = allineamento.value;
            }
            if(linguaggi.value) {
                linguaggiScheda.textContent = linguaggi.value;
            }
        }

        // Inserimento equipaggiamento (se esiste)
        if(equipaggiamento.value) {
            boxEquipaggiamento.style.display = "block";
            equipaggiamentoScheda.textContent = equipaggiamento.value;
        } else {
            boxEquipaggiamento.style.display = "none";
        }

        // Inserisco i tratti, se ve ne sono
        if(idTratti!=0) {
            inserisciTrattiScheda();
        }
        
        // Inserisco le aure, se ve ne sono
        if(idAure!=0) {
            inserisciAureScheda();
        }

        // Inserisco i poteri, se ve ne sono
        if(idPoteri!=0) {
            inserisciPoteriScheda();
        }

    } else {

        // Segnalo che la scheda none è stata generata
        schedaGenerata = false;

        // Evidenzia i seguenti campi
        nomeMostro.style.backgroundColor = "#FEFFBA";
        origine.style.backgroundColor = "#FEFFBA";
        tipoMostro.style.backgroundColor = "#FEFFBA";
        taglia.style.backgroundColor = "#FEFFBA";
        livello.style.backgroundColor = "#FEFFBA";
        ruolo.style.backgroundColor = "#FEFFBA";
        gruppo.style.backgroundColor = "#FEFFBA";
        pf.style.backgroundColor = "#FEFFBA";
        ca.style.backgroundColor = "#FEFFBA";
        tempra.style.backgroundColor = "#FEFFBA";
        riflessi.style.backgroundColor = "#FEFFBA";
        volonta.style.backgroundColor = "#FEFFBA";
        forza.style.backgroundColor = "#FEFFBA";
        costituzione.style.backgroundColor = "#FEFFBA";
        destrezza.style.backgroundColor = "#FEFFBA";
        intelligenza.style.backgroundColor = "#FEFFBA";
        saggezza.style.backgroundColor = "#FEFFBA";
        carisma.style.backgroundColor = "#FEFFBA";
        modFor.style.backgroundColor = "#FEFFBA";
        modCos.style.backgroundColor = "#FEFFBA";
        modDes.style.backgroundColor = "#FEFFBA";
        modInt.style.backgroundColor = "#FEFFBA";
        modSag.style.backgroundColor = "#FEFFBA";
        modCar.style.backgroundColor = "#FEFFBA";
        velocita.style.backgroundColor = "#FEFFBA";
        iniziativa.style.backgroundColor = "#FEFFBA";
        percezione.style.backgroundColor = "#FEFFBA";

        // Richiama la funzione errore se una qualsiasi delle variabili è vuota
        errore("Per generare la scheda è necessario riempire i campi evidenziati.");
    }

}

// Funzione per calcolare i punti esperienza in base al livello e al ruolo
function calcolaPuntiEsperienza(ruolo, livello) {

    let gregarioPE = {
        1: 25,
        2: 31,
        3: 38,
        4: 44,
        5: 50,
        6: 63,
        7: 75,
        8: 88,
        9: 100,
        10: 125,
        11: 150,
        12: 175,
        13: 200,
        14: 250,
        15: 300,
        16: 350,
        17: 400,
        18: 500,
        19: 600,
        20: 700,
        21: 800,
        22: 1038,
        23: 1275,
        24: 1513,
        25: 1750,
        26: 2250,
        27: 2750,
        28: 3250,
        29: 3750,
        30: 4750,
        31: 5750,
        32: 6750,
        33: 7750,
        34: 9750,
        35: 11750,
        36: 13750,
        37: 15750,
        38: 19750,
        39: 23750,
        40: 27750,
      };

      let standardPE = {
        1: 100,
        2: 125,
        3: 150,
        4: 175,
        5: 200,
        6: 250,
        7: 300,
        8: 350,
        9: 400,
        10: 500,
        11: 600,
        12: 700,
        13: 800,
        14: 1000,
        15: 1200,
        16: 1400,
        17: 1600,
        18: 2000,
        19: 2400,
        20: 2800,
        21: 3200,
        22: 4150,
        23: 5100,
        24: 6050,
        25: 7000,
        26: 9000,
        27: 11000,
        28: 13000,
        29: 15000,
        30: 19000,
        31: 23000,
        32: 27000,
        33: 31000,
        34: 39000,
        35: 47000,
        36: 55000,
        37: 63000,
        38: 79000,
        39: 95000,
        40: 111000,
      };
      
      let elitePE = {
        1: 200,
        2: 250,
        3: 300,
        4: 350,
        5: 400,
        6: 500,
        7: 600,
        8: 700,
        9: 800,
        10: 1000,
        11: 1200,
        12: 1400,
        13: 1600,
        14: 2000,
        15: 2400,
        16: 2800,
        17: 3200,
        18: 4000,
        19: 4800,
        20: 5600,
        21: 6400,
        22: 8300,
        23: 10200,
        24: 12050,
        25: 14000,
        26: 18000,
        27: 22000,
        28: 26000,
        29: 30000,
        30: 38000,
        31: 46000,
        32: 54000,
        33: 62000,
        34: 78000,
        35: 94000,
        36: 110000,
        37: 126000,
        38: 158000,
        39: 190000,
        40: 222000,
      };
      
      let solitarioPE = {
        1: 500,
        2: 625,
        3: 750,
        4: 875,
        5: 1000,
        6: 1250,
        7: 1500,
        8: 1750,
        9: 2000,
        10: 2500,
        11: 3000,
        12: 3500,
        13: 4000,
        14: 5000,
        15: 6000,
        16: 7000,
        17: 8000,
        18: 10000,
        19: 12000,
        20: 14000,
        21: 16000,
        22: 20750,
        23: 25500,
        24: 30250,
        25: 35000,
        26: 45000,
        27: 55000,
        28: 65000,
        29: 75000,
        30: 95000,
        31: 115000,
        32: 135000,
        33: 155000,
        34: 195000,
        35: 235000,
        36: 275000,
        37: 315000,
        38: 395000,
        39: 475000,
        40: 555000,
      };

    switch(ruolo) {

        case "Gregario":
            return gregarioPE[livello];

        case "Standard":
            return standardPE[livello];
        
        case "Elite":
            return elitePE[livello];
        
        case "Solitario":
            return solitarioPE[livello];

    }
    
}

// Funzione per aggiungere i tratti alla scheda
function inserisciTrattiScheda() {

    // Rendo visibile la sezione tratti della scheda
    boxTratti.style.display = "block";

    // Aggiungo un tratto per quanti ne sono presenti nel form
    for(let i=1; i<=idTratti; i++) {

        // Incremento i tratti nella scheda di 1
        idTrattiScheda++;

        // Prelevo i dati del tratto nel form
        let nomeTratto = document.getElementById("nomeTratto-" + i).value;
        let descrizioneTratto = document.getElementById("descrizioneTratto-" + i).value;
        
        // Creo un div che contiene il tratto da aggiungere e gli assegno un id
        let nuovoTratto = document.createElement("div");
        nuovoTratto.id = "trattoScheda-" + i;

        // Creo il paragrafo che contiene il nome del tratto e gli aggiungo la classe "scheda-azione"
        let headerTratto = document.createElement("p");
        headerTratto.classList.add("scheda-azione");

            // Creo l'elemento <strong> in cui inserisco il nome del tratto
            let nomeTrattoScheda = document.createElement("strong");

                // Imposto come contenuto dell'elemento <strong> il nome del tratto
                nomeTrattoScheda.textContent = nomeTratto;
                // Appendo l'elemento <strong> all'header del tratto
                headerTratto.appendChild(nomeTrattoScheda);
        
            // Appendo l'header del tratto al div principale
            nuovoTratto.appendChild(headerTratto);

        // Creo il paragrafo che contiene la descrizione del tratto
        let descrizioneTrattoScheda = document.createElement("p");

                // Assegno al paragrafo la classe "scheda-descrizione"
                descrizioneTrattoScheda.classList.add("scheda-descrizione");
                // Imposto come contenuto del parafrafo la descrizione del tratto
                descrizioneTrattoScheda.textContent = descrizioneTratto;
                // Appendo il paragrafo al div del tratto
                nuovoTratto.appendChild(descrizioneTrattoScheda);
        
        // Appendo il tratto appena creato al box tratti della scheda
        boxTratti.appendChild(nuovoTratto);
    }
}

// Funzione per aggiungere le aure alla scheda
function inserisciAureScheda() {

    // Rendo visibile la sezione tratti della scheda
    boxTratti.style.display = "block";

    // Aggiungo un'aura per quante ne sono presenti nel form
    for(let i=1; i<=idAure; i++) {

        // Incremento le aure nella scheda di 1
        idAureScheda++;

        // Prelevo i dati dell'aura nel form
        let nomeAura = document.getElementById("nomeAura-" + i);
        let descrizioneAura = document.getElementById("descrizioneAura-" + i);
        let keywordsAura = document.getElementById("keywordsAura-" + i);
        let gittataAura = document.getElementById("gittataAura-" + i);
        
        // Creo un div che contiene l'aura da aggiungere e gli assegno un id
        let nuovaAura = document.createElement("div");
        nuovaAura.id = "auraScheda-" + i;

        // Creo il paragrafo che contiene il nome dell'aura e gli aggiungo la classe "scheda-azione"
        let headerAura = document.createElement("p");
        headerAura.classList.add("scheda-azione");

            // Creo un elemento <span> per l'icona
            let icona = document.createElement("span");

                // Assegno all'elemento <span> la classe rpg-symbols
                icona.classList.add("rpg-symbols");
                // Gli inserisco l'icona opportuna
                icona.textContent = "@ "
                // Appendo l'elemento span all'header dell'aura
                headerAura.appendChild(icona);

            // Creo l'elemento <strong> in cui inserisco il nome dell'aura
            let nomeAuraScheda = document.createElement("strong");

                // Imposto come contenuto dell'elemento <strong> il nome dell'aura
                nomeAuraScheda.textContent = nomeAura.value;
                // Appendo l'elemento <strong> all'header dell'aura
                headerAura.appendChild(nomeAuraScheda);

            // Inserisco le parole chiave, se ve ne sono
            if(keywordsAura.value) {
                // Creo l'elemento <span> in cui inserisco le parole chiave
                let keywordsAuraScheda = document.createElement("span");
                // Imposto come contenuto dell'elemento <span> le parole chiave
                keywordsAuraScheda.textContent = " (" + keywordsAura.value + ")"
                // Appendo l'elemento <span> all'header dell'aura
                headerAura.appendChild(keywordsAuraScheda);
            }

            // Creo l'elemento <strong> in cui inserisco il simbolo ✦
            let simbolo = document.createElement("strong");

                // Imposto come contenuto dell'elemento <span> le parole chiave
                simbolo.textContent = " ✦ Aura "
                // Appendo l'elemento <strong> all'header dell'aura
                headerAura.appendChild(simbolo);

            // Inserisco la gittata, se presente
            if(gittataAura.value) {
                // Creo l'elemento <span> in cui inserisco la gittata
                let gittataAuraScheda = document.createElement("span");
                // Imposto come contenuto dell'elemento <span> le parole chiave
                gittataAuraScheda.textContent = gittataAura.value;
                // Appendo l'elemento <span> all'header dell'aura
                headerAura.appendChild(gittataAuraScheda);
            }

            // Appendo l'header dell'aura al div principale
            nuovaAura.appendChild(headerAura);

        // Creo il paragrafo che contiene la descrizione dell'aura
        let descrizioneAuraScheda = document.createElement("p");

                // Assegno al paragrafo la classe "scheda-descrizione"
                descrizioneAuraScheda.classList.add("scheda-descrizione");
                // Imposto come contenuto del parafrafo la descrizione dell'aura
                descrizioneAuraScheda.textContent = descrizioneAura.value;
                // Appendo il paragrafo al div dell'aura
                nuovaAura.appendChild(descrizioneAuraScheda);
        
        // Appendo l'aura appena creata nel box delle aure
        boxAure.appendChild(nuovaAura);
    }
}

// Funzione per aggiungere i poteri alla scheda
function inserisciPoteriScheda() {

    // Aggiungo un potere per quante ne sono presenti nel form
    for(let i=1; i<=idPoteri; i++) {

        // Incremento i poteri nella scheda di 1
        idPoteriScheda++;

        // Prelevo i dati del potere nel form
        let azione = document.getElementById("azione-" + i);
        let nomePotere = document.getElementById("nomePotere-" + i);
        let descrizionePotere = document.getElementById("descrizionePotere-" + i);
        let keywordsPotere = document.getElementById("keywordsPotere-" + i);
        let tipoPotere = document.getElementById("tipoPotere-" + i);
        let ricarica = document.getElementById("ricarica-" + i);
        let noteRicarica = document.getElementById("noteRicarica-" + i);

        // Definisco una variabile che punterà al box target della scheda
        let boxTarget;

        // Verifico il tipo di azione del potere
        switch(azione.value) {
            case "standard":
                boxAzioniStandard.style.display = "block";
                boxTarget = boxAzioniStandard;
                break;
            case "movimento":
                boxAzioniMovimento.style.display = "block";
                boxTarget = boxAzioniMovimento;
                break;
            case "minore":
                boxAzioniMinori.style.display = "block";
                boxTarget = boxAzioniMinori;
                break;
            case "gratuita":
                boxAzioniGratuite.style.display = "block";
                boxTarget = boxAzioniGratuite;
                break;
            case "attivata":
                boxAzioniAttivate.style.display = "block";
                boxTarget = boxAzioniAttivate;
                break;
            case "nessuna":
                boxNessunaAzione.style.display = "block";
                boxTarget = boxNessunaAzione;
        }
        
        // Creo un div che contiene il potere da aggiungere e gli assegno un id
        let nuovoPotere = document.createElement("div");
        nuovoPotere.id = "potereScheda-" + i;

        // Creo il paragrafo che contiene il nome del potere e gli aggiungo la classe "scheda-azione"
        let headerPotere = document.createElement("p");
        headerPotere.classList.add("scheda-azione");

            // Creo un elemento <span> per l'icona
            let icona = document.createElement("span");

                // Assegno l'icona in base al tipo
                switch(tipoPotere.value) {
                    case "mischia":
                        icona.textContent = "m ";
                        break;
                    case "bMischia":
                        icona.textContent = "M ";
                        break;
                    case "distanza":
                        icona.textContent = "r ";
                        break;
                    case "bDistanza":
                        icona.textContent = "R ";
                        break;
                    case "ravvicinato":
                        icona.textContent = "c ";
                        break;
                    case "area":
                        icona.textContent = "a ";
                        console.log("area");
                        break;
                }

                // Assegno all'elemento <span> la classe rpg-symbols
                icona.classList.add("rpg-symbols");
                // Appendo l'elemento span all'header del potere
                headerPotere.appendChild(icona);

            // Creo l'elemento <strong> in cui inserisco il nome del potere
            let nomePotereScheda = document.createElement("strong");

                // Imposto come contenuto dell'elemento <strong> il nome del potere
                nomePotereScheda.textContent = nomePotere.value;
                // Appendo l'elemento <strong> all'header del potere
                headerPotere.appendChild(nomePotereScheda);

            // Inserisco le parole chiave, se ve ne sono
            if(keywordsPotere.value) {
                // Creo l'elemento <span> in cui inserisco le parole chiave
                let keywordsPotereScheda = document.createElement("span");
                // Imposto come contenuto dell'elemento <span> le parole chiave
                keywordsPotereScheda.textContent = " (" + keywordsPotere.value + ")"
                // Appendo l'elemento <span> all'header del potere
                headerPotere.appendChild(keywordsPotereScheda);
            }

            // Inserisco il simbolo ✦ e il tipo di ricarica
            let simbolo = document.createElement("strong");
            let numeri;

                // Veririco il tipo di ricarica
                switch(ricarica.value) {
                    case "volonta":
                        simbolo.textContent = " ✦ A volontà "
                        break;
                    case "incontro":
                        simbolo.textContent = " ✦ Incontro "
                        break;
                    case "giornaliero":
                        simbolo.textContent = " ✦ Giornaliero "
                        break;
                    case "ricarica2":
                        numeri = "23456";
                        simbolo.textContent = " ✦ Ricarica ";
                        break;
                    case "ricarica3":
                        numeri = "3456";
                        simbolo.textContent = " ✦ Ricarica ";
                        break;
                    case "ricarica4":
                        numeri = "456";
                        simbolo.textContent = " ✦ Ricarica ";
                        break;
                    case "ricarica5":
                        numeri = "56";
                        simbolo.textContent = " ✦ Ricarica ";
                        break;
                    case "ricarica6":
                        numeri = "6";
                        simbolo.textContent = " ✦ Ricarica ";
                        break;
                    case "ricaricaQuando":
                        simbolo.textContent = " ✦ Ricarica ";
                }

                // Appendo l'elemento <strong> all'header del potere
                headerPotere.appendChild(simbolo);
            
                // Se numeri non è vuota, crea un altro span per i simboli dei dadi
                if(numeri) {
                    // Creo un elemento span per i dadi
                    let dadi = document.createElement("span");
                    // Gli aggiungo la classe rpg-symbols
                    dadi.classList.add("rpg-symbols");
                    // Gli fisso come contenuto i numeri della ricarica
                    dadi.textContent = numeri + " ";
                    // Appendo lo span creato all'header del potere
                    headerPotere.appendChild(dadi);
                }

            // Inserisco le note aggiuntive, se ve ne sono
            if(noteRicarica.value){
                // Creo un elemento <span> per le note
                let noteRicaricaScheda = document.createElement("span");
                // Prelevo le note dal form e le aggiungo all'elemento span
                noteRicaricaScheda.textContent = noteRicarica.value
                // Appendo l'elemento <span> all'header del potere
                headerPotere.appendChild(noteRicaricaScheda);
            }

            // Appendo l'header del potere al div principale
            nuovoPotere.appendChild(headerPotere);

        // Creo il paragrafo che contiene la descrizione del potere
        let descrizionePotereScheda = document.createElement("p");

                // Assegno al paragrafo la classe "scheda-descrizione"
                descrizionePotereScheda.classList.add("scheda-descrizione");
                // Imposto come contenuto del parafrafo la descrizione del potere
                descrizionePotereScheda.textContent = descrizionePotere.value;
                // Appendo il paragrafo al div del potere
                nuovoPotere.appendChild(descrizionePotereScheda);
        
        // Appendo il potere appena creata nel box target 
        boxTarget.appendChild(nuovoPotere);
    }
}

// Eventi
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("generaStatistichePrimarie").addEventListener("click", statistichePrimarie);
    document.getElementById("aggiornaMod").addEventListener("click", aggiornaMod);
    document.getElementById("redirectTratti").addEventListener("click", redirectTratti);
    document.getElementById("redirectStatistiche").addEventListener("click", redirectStatistiche);
    document.getElementById("generaScheda").addEventListener("click", generaScheda);
    scheda.addEventListener('click', schedaPng);
    document.getElementById("salvaScheda").addEventListener("click", salvaScheda);
    document.getElementById("tokenPicture").addEventListener("click", function (){
        document.getElementById("inputToken").click();
    });
    document.getElementById("inputToken").addEventListener("change", caricaToken);
    document.getElementById("inputScheda").addEventListener("change", inoltraForm);

    document.getElementById("impulsi").addEventListener("change", function() {
        let impulsi = document.getElementById("impulsi");
        let valoreImpulso = document.getElementById("valoreImpulso");
        let pf = document.getElementById("pf");
        let livello = document.getElementById("livello");
        let gruppo = document.getElementById("gruppo");
        if(statisticheEsistono && pf.value && gruppo.value != "Gregario") {
            if (impulsi.checked) {
                valoreImpulso.value = Math.floor(parseInt(pf.value)/4);
                impulsiCurativi.value = parseInt(livello.value) <= 10 ? 1 : (parseInt(livello.value) <= 20 ? 2 : 3);
                impulsiCurativi.disabled = false;
                valoreImpulso.disabled = false;
            } else {
                impulsiCurativi.value = "";
                impulsiCurativi.placeholder = "n/a";
                impulsiCurativi.disabled = true;
                valoreImpulso.value = "";
                valoreImpulso.placeholder = "n/a";
                valoreImpulso.disabled = true;
            }
        }
    });

    document.getElementById("aggiungiTratto").addEventListener("click", function() {
        idTratti++;
        aggiungitratto(idTratti);
    });

    document.getElementById("aggiungiAura").addEventListener("click", function() {
        idAure++;
        aggiungiAura(idAure);
    });

    document.getElementById("aggiungiPotere").addEventListener("click", function() {
        idPoteri++;
        aggiungiPotere(idPoteri);
    });
});

// Funzione per salvare la scheda in png
function schedaPng() {
    // Utilizza html2canvas per trasformare l'elemento in un png
    html2canvas(scheda).then(function(canvas) {

        // Crea un oggetto che memorizza il dataURL del png generato
        const dataURL = canvas.toDataURL('image/png');

        // Crea un href per il download dell'immagine
        const downloadImmagine = document.createElement('a');

        // Assegna il dataURL generato all'href
        downloadImmagine.href = dataURL;

        // Al download, memorizzare il file come 'exported_image.png'
        downloadImmagine.download = 'exported_image.png';

        // Aggiungi il link del download alla pagina
        document.body.appendChild(downloadImmagine);

        // Simula il clic sul link per avviare automaticamente il download
        downloadImmagine.click();

        // Rimuovi il link dalla pagina (opzionale)
        document.body.removeChild(downloadImmagine);

    });
}

// Funzione per caricare un'immagine
function caricaToken() {
    // Ottieni il riferimento all'elemento input
    let inputToken = document.getElementById('inputToken');
    // Ottieni il riferimento all'immagine placeholder
    let tokenPicture = document.getElementById('tokenPicture');
    // Ottieni il riferimento al primo (e unico in questo caso) file caricato dall'input
    let fileCaricato = inputToken.files[0];

    // Verifica se è stato selezionato un file
    if (fileCaricato) {
        // Crea un oggetto FileReader per leggere il file
        let reader = new FileReader();
        // Gestisce l'evento onload del FileReader
        reader.onload = function (e) {
        // Assegna a tokenPicture l'src dell'immagine scelta
        tokenPicture.src = e.target.result;
        };
        // Legge il file come URL dati
        reader.readAsDataURL(fileCaricato);
    }
}

// Funzione per salvare la scheda nel database
function salvaScheda() {
    if(document.getElementById("inputToken").value && schedaGenerata) {
        errore("Specifica il percorso in cui hai scaricato la scheda.");
        document.getElementById("inputScheda").click();
    } else {
        errore("Genera una scheda e carica un token prima di salvare il mostro nell'archivio.");
    }
}

// Inoltra il form nel db
function inoltraForm() {
    if(inputScheda) {
        document.getElementById("invioNome").value = nomeMostroScheda.textContent;
        document.getElementById("invioRuolo").value = ruoloScheda.textContent;
        document.getElementById("invioGruppo").value = gruppoScheda.textContent;
        document.getElementById("invioTaglia").value = tagliaScheda.textContent;
        document.getElementById("invioPe").value = pe.textContent;
        document.getElementById("invioLivello").value = livelloScheda.textContent;
        document.getElementById("formInvioFinale").submit();
    }
}

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