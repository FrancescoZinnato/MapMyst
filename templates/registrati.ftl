<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Registrazione</title>
    <link rel="icon" type="image/png" href="/img/MapMystLogo.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com%22%3E/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <!-- STYLE CSS -->
    <link rel="stylesheet" href="css/styleRegistrati.css">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="crossorigin="anonymous"></script>
</head>
<body>
    <div class="wrapper">
        <div class="inner">
            <!-- controllare se va aggiunta qualche animazione -->
            <form action="/controlloRegistrati" method="post" id="formRegistrati">
                <h3>CREA IL TUO ACCOUNT</h3>
                <div class="form-holder">
                    <span class="lnr lnr-user"></span>
                    <input type="" id="Username" class="form-control" name="username" placeholder="Username">
                </div>
                <div class="error-messageu" id="passwordErroru"></div>
                <br>
                <div class="form-holder">
                    <span class="lnr lnr-lock"></span>
                    <input type="password" id="password" class="form-control" name="password" placeholder="Password">
                </div>
                <div class="error-message" id="passwordError"></div>
                <br>
                <div class="form-holder">
                    <span class="lnr lnr-lock"></span>
                    <input type="" id="email" class="form-control" name="email" placeholder="Email">
                </div>
                <div class="error-messagee" id="passwordErrore"></div>
                <br>
                <button id="submit" type="submit">
                    <span>Registrati</span>
                </button>
            </form>
        </div>
    </div>
<script src="js/scriptRegistrati.js"></script>
</body>
</html>