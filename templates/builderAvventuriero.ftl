<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Builder Avventuriero</title>
    <link rel="icon" type="image/png" href="/img/MapMystLogo.png">
    <link rel="stylesheet" href="css/styleBuilderAvventurieroTratti.css">
    <link rel="stylesheet" href="css/styleBuilderAvventurieroStat.css">
    <link rel="stylesheet" href="css/styleBuilderAvventurieroScheda.css">
    <link rel="stylesheet" href="css/styleBuilderAvventurieroGenerale.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

<body>

    <!-- Finestra modale di errore -->
    <div id="errore" class="overlay">
        <div class="modale">
            <p id="messaggioErrore"></p>
        </div>
    </div>

    <!-- Elementi disattivati -->
    <div  style="display: none;">
        <input type="checkbox" id="guida">
        <input type="checkbox" id="impulsi" checked>
        <select id="gruppo">
            <option disabled selected value="Standard">Gruppo</option>
        </select>
    </div>

    <div id="nav">
        <button class="btn">
            <div class="home">
                <a href="/home" class="link">
                    <lord-icon src="https://cdn.lordicon.com/wmwqvixz.json" trigger="hover" target=".home"
                        colors="primary:#ad874f" style="width: 20px; height: 20px; vertical-align:bottom;"></lord-icon>
                    Home
                </a>
            </div>
        </button>

        <button id="dropbuilder" class="btn active">
            <div class="builder">
                <p id="buildertag">
                    <lord-icon src="https://cdn.lordicon.com/wkvacbiw.json" trigger="hover" target=".builder"
                        colors="primary:#333" style="width: 20px; height: 20px; vertical-align:bottom;">
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
                    Archivio
                </a>
            </div>
        </button>

        <button class="btn">
            <div class="gioca">
                <a href="/gioca">
                    <lord-icon src="https://cdn.lordicon.com/becebamh.json" trigger="hover" target=".gioca"
                        colors="primary:#ad874f" style="width: 20px; height:20px; vertical-align:bottom;">
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
                        style="width: 20px; height: 20px; vertical-align:bottom;">
                    </lord-icon>
                    Logout
                </a>
            </div>
        </button>
    </div>

    <!-- Contenitore generale (1x2) -->
    <div id="wrapper">
        <!-- Griglia verticale per il lato builder -->
        <div id="formStatistiche">
            <!-- Grid per informazioni generali -->
            <div id="infogenerali">
                <!-- Titolo della sezione -->
                <p class="titolo">Informazioni generali</p>
                <!-- Nome -->
                <input type="text" placeholder=" Nome dell'avventuriero" id="nomeMostro">
                <!-- Livello -->
                <input type="number" placeholder=" Livello" min="1" max="40" id="livello">
                <!-- Ruolo -->
                <select id="ruolo">
                    <option disabled selected value="">Ruolo</option>
                    <option value="Assalitore">Assalitore</option>
                    <option value="Difensore">Difensore</option>
                    <option value="Controllore">Controllore</option>
                    <option value="Guida">Guida</option>
                </select>
                <!-- Tipo del mostro -->
                <select id="tipoMostro">
                    <option disabled selected value="">Tipo</option>
                    <option value="Umanoide">Umanoide</option>
                    <option value="Animato">Animato</option>
                    <option value="Bestia">Bestia</option>
                    <option value="Bestia magica">Bestia magica</option>
                </select>
                <!-- Origine -->
                <input type="text" placeholder=" Origine" id="origine">
                <!-- Taglia -->
                <select id="taglia">
                    <option disabled selected value="">Taglia</option>
                    <option value="Minuscola">Minuscola</option>
                    <option value="Piccola">Piccola</option>
                    <option value="Media">Media</option>
                    <option value="Grande">Grande</option>
                    <option value="Enorme">Enorme</option>
                    <option value="Mastodontica">Mastodontica</option>
                </select>
                <!-- Parole chiave -->
                <input type="text" placeholder=" Parole chiave" id="keywordsMostro">
                <!-- Razza -->
                <input type="text" placeholder=" Razza" id="razza">
                <!-- Pulsante per generare le statistiche primarie -->
                <button id="generaStatistichePrimarie">Genera statistiche primarie</button>
            </div>
            <!-- Grid per punti ferita e difese -->
            <div id="pf-difese">
                <!-- Titolo della sezione -->
                <p class="titolo">Punti ferita e difese</p>
                <div>
                    <!-- Punti ferita -->
                    <p class="etichetta">Punti ferita</p>
                    <input type="number" min="1" id="pf">
                </div>
                <div>
                    <!-- Impulsi curativi -->
                    <p class="etichetta">Impulsi curativi</p>
                    <input type="number" min="1" id="impulsiCurativi">
                </div>
                <div>
                    <!-- Valore impulso -->
                    <p class="etichetta">Valore impulso</p>
                    <input type="number" min="1" id="valoreImpulso">
                </div>
                <div>
                    <!-- Classe armatura -->
                    <p class="etichetta">Classe Armatura</p>
                    <input type="number" min="1" id="ca">
                </div>
                <div>
                    <!-- Tempra -->
                    <p class="etichetta">Tempra</p>
                    <input type="number" min="1" id="tempra">
                </div>
                <div>
                    <!-- Riflessi -->
                    <p class="etichetta">Riflessi</p>
                    <input type="number" min="1" id="riflessi">
                </div>
                <div>
                    <!-- Volontà -->
                    <p class="etichetta">Volontà</p>
                    <input type="number" min="1" id="volonta">
                </div>
            </div>
            <!-- Grid per punteggi di caratteristica -->
            <div id="caratteristiche">
                <!-- Titolo della sezione -->
                <p class="titolo">Punteggi di caratteristica</p>
                <div>
                    <!-- Forza -->
                    <p class="etichetta">Forza</p>
                    <input type="number" id="forza" placeholder="Punteggio">
                </div>
                <div>
                    <!-- Costituzione -->
                    <p class="etichetta">Costituzione</p>
                    <input type="number" id="costituzione" placeholder="Punteggio">
                </div>
                <div>
                    <!-- Destrezza -->
                    <p class="etichetta">Destrezza</p>
                    <input type="number" id="destrezza" placeholder="Punteggio">
                </div>
                <div>
                    <!-- Intelligenza -->
                    <p class="etichetta">Intelligenza</p>
                    <input type="number" id="intelligenza" placeholder="Punteggio">
                </div>
                <div>
                    <!-- Saggezza -->
                    <p class="etichetta">Saggezza</p>
                    <input type="number" id="saggezza" placeholder="Punteggio">
                </div>
                <div>
                    <!-- Carisma -->
                    <p class="etichetta">Carisma</p>
                    <input type="number" id="carisma" placeholder="Punteggio">
                </div>
                <!-- Modificatori di caratteristica -->
                <input type="text" readonly id="modFor" class="centrato" placeholder="Modificatore">
                <input type="text" readonly id="modCos" class="centrato" placeholder="Modificatore">
                <input type="text" readonly id="modDes" class="centrato" placeholder="Modificatore">
                <input type="text" readonly id="modInt" class="centrato" placeholder="Modificatore">
                <input type="text" readonly id="modSag" class="centrato" placeholder="Modificatore">
                <input type="text" readonly id="modCar" class="centrato" placeholder="Modificatore">
                <!-- Pulsante per aggiornare i modificatori di caratteristica -->
                <button id="aggiornaMod">Aggiorna modificatori di caratteristica</button>
            </div>
            <!-- Grid per immunità, resistenze, vulnerabilità -->
            <div id="immunitaEtc">
                <!-- Titolo della sezione -->
                <p class="titolo">Immunità, Resistenza e Vulnerabilità</p>
                <div>
                    <!-- Immunità -->
                    <p class="etichetta">Immunita</p>
                    <input type="text" id="immunita">
                </div>
                <div>
                    <!-- Resistenza -->
                    <p class="etichetta">Resistenza</p>
                    <input type="text" id="resistenza">
                </div>
                <div>
                    <!-- Vulnerabilità -->
                    <p class="etichetta">Vulnerabilità</p>
                    <input type="text" id="vulnerabilita">
                </div>
            </div>
            <!-- Grid per altre statistiche -->
            <div id="altreStatistiche">
                <p class="titolo">Altre statistiche</p>
                <div>
                    <!-- Velocità -->
                    <p class="etichetta">Velocità</p>
                    <input type="text" id="velocita">
                </div>
                <div>
                    <!-- Tiri salvezza -->
                    <p class="etichetta">Tiri salvezza</p>
                    <input type="text" id="ts">
                </div>
                <div>
                    <!-- Punti azione -->
                    <p class="etichetta">Punti azione</p>
                    <input type="text" id="puntiAzione">
                </div>
                <div>
                    <!-- Iniziativa -->
                    <p class="etichetta">Iniziativa</p>
                    <input type="text" id="iniziativa">
                </div>
                <div>
                    <!-- Percezione -->
                    <p class="etichetta">Percezione</p>
                    <input type="text" id="percezione">
                </div>
                <div>
                    <!-- Sensi speciali -->
                    <p class="etichetta">Sensi speciali</p>
                    <input type="text" id="sensi">
                </div>
                <!-- Abilità con addestramento -->
                <input type="text" placeholder=" Abilità con addestramento" id="abilita">
            </div>
            <!-- Grid per dettagli narrativi -->
            <div id="narrativi">
                <!-- Titolo della sezione -->
                <p class="titolo">Dettagli narrativi</p>
                <!-- Allineamento -->
                <input type="text" placeholder=" Allineamento" id="allineamento">
                <!-- Linguaggi -->
                <input type="text" placeholder=" Linguaggi" id="linguaggi">
                <!-- Equipaggiamento -->
                <input type="text" placeholder=" Equipaggiamento" id="equipaggiamento">
            </div>
            <!-- Pulsante per tratti e poteri -->
            <div id="builder-statistiche-menu">
                <!-- Pulsante per visualizzare tratti e poteri -->
                <button id="redirectTratti">Visualizza tratti e poteri</button>
                <!-- Pulsante per generare la scheda -->
                <button id="generaScheda">Genera la scheda</button>
                <!-- Pulsante per salvare la scheda nel DB -->
                <button id="salvaScheda">Salva l'avventuriero nell'archivio</button>
            </div>
        </div>

        <!-- Sezione dei tratti -->
        <div id="formTratti">
            <!-- Pulsanti nel footer -->
            <div class="builder-tratti-menu">
                <button id="aggiungiTratto">Aggiungi tratto</button>
                <button id="aggiungiAura">Aggiungi aura</button>
                <button id="aggiungiPotere">Aggiungi potere</button>
                <button id="redirectStatistiche">Torna alle statistiche</button>
            </div>
        </div>
        
        <!-- Scheda -->
        <div id="scheda">
            <!-- Header della scheda -->
            <div id="scheda-header">
                <!-- Nome -->
                <p id="nomeMostroScheda" class="scheda-bold">Nome dell'avventuriero</p>
                <p class="scheda-dx scheda-bold">
                    <!-- Livello -->
                    Livello <span id="livelloScheda">#</span>
                    <!-- Ruolo -->
                    <span id="ruoloScheda">Ruolo</span>
                </p>
                <p>
                    <!-- Tipo -->
                    <span id="tipoMostroScheda">Tipo</span>
                    <!-- Origine -->
                    <span id="origineScheda">origine</span>
                    <!-- Taglia -->
                    <span id="tagliaScheda">Taglia</span>
                    <!-- Parole chiave -->
                    <span id="boxKeywordsMostro"><span id="keywordsMostroScheda">parole chiave</span></span>
                    <!-- Razza -->
                    <span id="boxRazza"><span id="razzaScheda">razza</span></span>
                </p>
            </div>
            <div id="scheda-stat1">
                <div>
                    <p>
                        <!-- Punti ferita -->
                        <strong>Punti ferita</strong>
                        <span id="pfScheda">#</span>
                        <!-- Valore di sanguinante -->
                        <span id="boxSanguinante">
                            <strong>Sanguinante</strong>
                            <span id="sanguinanteScheda">#</span>
                        </span>
                        <!-- Impulsi curativi -->
                        <span id="boxImpulsiCurativi">
                            <strong>Impulsi curativi</strong>
                            <span id="impulsiCurativiScheda">#</span>
                        </span>
                        <!-- Valore dell'impulso -->
                        <span id="boxValoreImpulso">
                            <strong>Valore impulso</strong>
                            <span id="valoreImpulsoScheda">#</span>
                        </span>
                    </p>
                    <p>
                        <!-- Classe Armatura -->
                        <strong>CA</strong>
                        <span id="caScheda">#</span>
                        <!-- Tempra -->
                        <strong>Tempra</strong>
                        <span id="tempraScheda">#</span>
                        <!-- Riflessi -->
                        <strong>Riflessi</strong>
                        <span id="riflessiScheda">#</span>
                        <!-- Volontà -->
                        <strong>Volontà</strong>
                        <span id="volontaScheda">#</span>
                    </p>
                    <p>
                        <!-- Velocità -->
                        <strong>Velocità</strong>
                        <span id="velocitaScheda">#</span>
                    </p>
                </div>
                <div class="scheda-dx">
                    <p>
                        <!-- Iniziativa -->
                        <strong>Iniziativa</strong>
                        <span id="iniziativaScheda">#</span>
                    </p>
                    <p>
                        <!-- Percezione -->
                        <Strong>Percezione</Strong>
                        <span id="percezioneScheda">#</span>
                    </p>
                    <!-- Sensi -->
                    <span id="boxSensi">
                        <p id="sensiScheda">Sensi speciali</p>
                    </span>
                </div>
                <div style="grid-column: span 2;">
                    <p>
                        <!-- Immunità -->
                        <span id="boxImmunita">
                            <strong>Immunità</strong>
                            <span id="immunitaScheda">#</span>
                        </span>
                        <!-- Resistenza -->
                        <span id="boxResistenza">
                            <strong>Resistenza</strong>
                            <span id="resistenzaScheda">#</span>
                        </span>
                        <!-- Vulnerabilità -->
                        <span id="boxVulnerabilita">
                            <strong>Vulnerabilità</strong>
                            <span id="vulnerabilitaScheda">#</span>
                        </span>
                    </p>
                    
                    <p>
                        <!-- Tiri Salvezza -->
                        <span id="boxTs">
                            <strong>Tiri salvezza</strong>
                            <span id="tsScheda">#</span>
                        </span>
                        <!-- Punti Azione -->
                        <span id="boxPuntiAzione">
                            <strong>Punti azione</strong>
                            <span id="puntiAzioneScheda">#</span>
                        </span>
                    </p>
                </div>
            </div>

            <!-- Tratti -->
            <div id="boxTratti">
                <!-- Titolo della sezione -->
                <p class="scheda-sezione">Tratti</p>
                <div id="boxAure"><!-- Qui andranno le aure --></div>
            </div>
            <!-- Azioni standard -->
            <div id="boxAzioniStandard">
                <!-- Titolo della sezione -->
                <p class="scheda-sezione">Azioni Standard</p>
            </div>

            <!-- Azioni di movimento -->
            <div id="boxAzioniMovimento">
                <!-- Titolo della sezione -->
                <p class="scheda-sezione">Azioni di Movimento</p>
            </div>

            <!-- Azioni minori -->
            <div id="boxAzioniMinori">
                <!-- Titolo della sezione -->
                <p class="scheda-sezione">Azioni Minori</p>
            </div>

            <!-- Azioni gratuite -->
            <div id="boxAzioniGratuite">
                <!-- Titolo della sezione -->
                <p class="scheda-sezione">Azioni Gratuite</p>
            </div>

            <!-- Azioni attivate -->
            <div id="boxAzioniAttivate">
                <!-- Titolo della sezione -->
                <p class="scheda-sezione">Azioni Attivate</p>
            </div>

            <!-- Nessuna azione -->
            <div id="boxNessunaAzione">
                <!-- Titolo della sezione -->
                <p class="scheda-sezione">Nessuna Azione</p>
            </div>

            <!-- Inizio parte terminale scheda -->
            <div id="scheda-stat2">
                <p id="boxAbilita"> 
                    <!-- Abilità -->
                    <strong>Abilità</strong>
                    <span id="abilitaScheda">#</span>
                </p>

                <!-- Punteggi di caratteristica -->
                <div id="scheda-caratteristiche">

                    <p>
                        <strong>For</strong>
                        <!-- Forza -->
                        <span id="forzaScheda">#</span>
                        <!-- Modificatore di Forza -->
                        <span id="modForScheda">(mod)</span>
                    </p>
                    <p>
                        <strong>Des</strong>
                        <!-- Destrezza -->
                        <span id="destrezzaScheda">#</span>
                        <!-- Modificatore di Destrezza -->
                        <span id="modDesScheda">(mod)</span>
                    </p>
                    <p>
                        <strong>Sag</strong>
                        <!-- Saggezza -->
                        <span id="saggezzaScheda">#</span>
                        <!-- Modificatore di Saggezza -->
                        <span id="modSagScheda">(mod)</span>
                    </p>
                    <p>
                        <strong>Cos</strong>
                        <!-- Costituzione -->
                        <span id="costituzioneScheda">#</span>
                        <!-- Modificatore di Costituzione -->
                        <span id="modCosScheda">(mod)</span>
                    </p>
                    <p>
                        <strong>Int</strong>
                        <!-- Intelligenza -->
                        <span id="intelligenzaScheda">#</span>
                        <!-- Modificatore di Intelligenza -->
                        <span id="modIntScheda">(mod)</span>
                    </p>
                    <p>
                        <strong>Car</strong>
                        <!-- Carisma -->
                        <span id="carismaScheda">#</span>
                        <!-- Modificatore di Carisma -->
                        <span id="modCarScheda">(mod)</span>
                    </p>
                </div>
            </div>

            <!-- Footer scheda -->
            <div id="boxNarrativi">
                <p>
                    <!-- Allineamento -->
                    <strong>Allineamento</strong>
                    <span id="allineamentoScheda">#</span>
                </p>
                <p>
                    <!-- Linguaggi -->
                    <strong>Linguaggi</strong>
                    <span id="linguaggiScheda">#</span>
                </p>
            </div>
            <p id="boxEquipaggiamento">
                <!-- Equipaggiamento -->
                <strong>Equipaggiamento</strong>
                <span id="equipaggiamentoScheda">#</span>
            </p>
        </div>
        <!-- Form per inviare i dati al DB -->
        <div id="token">
            <form method="POST" enctype="multipart/form-data" action="/salvaCreatura" id="formInvioFinale" style="display: none;">
                <input type="file" id="inputToken" accept="image/*" name="token" value="">
                <input type="file" id="inputScheda" accept="image/*" value="" name="scheda">
                <input type="text" id="invioNome" name="nome">
                <input type="text" id="invioRuolo" name="ruolo">
                <input type="text" id="invioTaglia" name="taglia">
                <input type="text" id="invioGruppo" name="gruppo" value="avventuriero">
                <input type="text" id="invioPe" name="pe">
                <input type="text" id="invioLivello" name="livello">
                <input type="submit" name="" id="inviaImmagini">
            </form>
            <img src="/img/token/tokenDefault.png" alt="Token" id="tokenPicture">
        </div>  
    </div>
    <div id="sceltaBuilder">
     <p class="iconaMostro"><a href="/builder"><lord-icon src="https://cdn.lordicon.com/ribxmuoc.json" trigger="hover" target=".iconaMostro" colors="primary:#ad874f,secondary:#ad874f" style="width:25px;height:22px"></lord-icon>Crea Mostro</a></p>
     <p class="iconaAvventuriero"><a href="/builderAvventuriero"><lord-icon src="https://cdn.lordicon.com/ppjrlsnd.json" trigger="hover" target=".iconaAvventuriero" colors="primary:#ad874f,secondary:#ad874f,tertiary:#ad874f,quaternary:#ad874f" style="width:25px;height:22px"></lord-icon>Crea Avventuriero</a></p>
    </div>
    <script src="https://cdn.lordicon.com/lordicon.js"></script>
    <script type="text/javascript" src="js/scriptBuilderAvventuriero.js"></script>
    <script type="text/javascript" src="js/html2canvas.js"></script>
</body>
</html>