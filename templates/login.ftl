<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>Login</title>
	<link rel="icon" type="image/png" href="/img/MapMystLogo.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="preconnect" href="https://fonts.googleapis.com%22%3E/">
	<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,
		300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
	<!-- STYLE CSS -->
	<link rel="stylesheet" href="css/styleLogin.css">
</head>

<body>
	<div class="wrapper">
		<div class="inner">
			<form action="/controlloLogin" method="post">
				<h3>BENVENUTO
				</h3>
				<div class="form-holder">
					<span class="lnr lnr-user"></span>
					<input type="" class="form-control" name="email" placeholder="Email">
				</div>
				<div class="form-holder">
					<span class="lnr lnr-lock"></span>
					<input type="password" class="form-control" name="password" placeholder="Password">
				</div>
				<button type="submit">
					<span>Login</span>
				</button>
			</form>
			<p>Non sei registrato? <a href="/registrati">Registrati qui.</a></p>
		</div>
	</div>
</body>
</html>