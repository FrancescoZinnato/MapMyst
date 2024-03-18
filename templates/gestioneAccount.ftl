<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gestione Account</title>
  <link rel="icon" type="image/png" href="/img/MapMystLogo.png">
  <link rel="stylesheet" href="css/styleGestioneAccount.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

<body>
  <div id="nav">
    <button class="btn">
      <div class="home">
        <a href="/home">
          <lord-icon src="https://cdn.lordicon.com/wmwqvixz.json" trigger="hover" target=".home"
            colors="primary:#ad874f" style="width: 20px; height: 20px; vertical-align:bottom;"></lord-icon>
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
  <div class="display-flex">
    <div class="flex-container">
      <div class="flex-around">
        <div class="menu">
          <h1>Le tue credenziali</h1>
          <div class="form-holder">
            <span class="lnr lnr-lock"></span>
            <input type="" id="username" class="form-control" placeholder="${utente.getUsername()}" />
          </div>
          <div class="form-holder">
            <span class="lnr lnr-lock"></span>
            <input type="password" id="password" class="form-control" value="${utente.getPassword()}" />
          </div>
          <div class="form-holder">
            <span class="lnr lnr-lock"></span>
            <input type="" id="email" class="form-control" placeholder="${utente.getEmail()}" />
          </div>
          <br />
          <div class="tasti">
          </div>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="flex-cont">
        <form action="/cambioDatiUtente" class="menu" id="formCambioDati">
          <h1>Cambia le tue credenziali</h1>
          <div class="form-holder">
            <span class="lnr lnr-lock"></span>
            <input type="" id="username1" class="form-control" name="username" value="${utente.getUsername()}" readonly />
          </div>
          <div class="form-holder">
            <span class="lnr lnr-lock"></span>
            <input type="password" id="password1" class="form-control" name="password" placeholder="Password" />
          </div>
          <div class="error-message" id="passwordError"></div>
          <div class="form-holder">
            <span class="lnr lnr-lock"></span>
            <input type="" id="email1" class="form-control" name="email" placeholder="email" />
          </div>
          <div class="error-messageE" id="passwordErrorE"></div>
          <br />
          <div class="tasto">
            <button id="cambiaDati">Cambia Dati</button>
            <button type="submit" class="button" id="confermaDati">Conferma Dati</button>
          </div>
        </form>
      </div>
  <div id="sceltaBuilder">
     <p class="iconaMostro"><a href="/builder"><lord-icon src="https://cdn.lordicon.com/ribxmuoc.json" trigger="hover" target=".iconaMostro" colors="primary:#ad874f,secondary:#ad874f" style="width:25px;height:22px"></lord-icon>Crea Mostro</a></p>
     <p class="iconaAvventuriero"><a href="/builderAvventuriero"><lord-icon src="https://cdn.lordicon.com/ppjrlsnd.json" trigger="hover" target=".iconaAvventuriero" colors="primary:#ad874f,secondary:#ad874f,tertiary:#ad874f,quaternary:#ad874f" style="width:25px;height:22px"></lord-icon>Crea Avventuriero</a></p>
  </div>
<script src="js/scriptGestioneAccount.js"></script>
<script src="https://cdn.lordicon.com/lordicon.js"></script>
</body>
</html>