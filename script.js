<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registration Form</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
  <h2>Registration Form</h2>

  <form id="form">

    <input type="text" id="name" placeholder="Full Name">
    
    <input type="email" id="email" placeholder="Email">

    <input type="password" id="password" placeholder="Password">

    <input type="password" id="confirmPassword" placeholder="Confirm Password">

    <button type="submit">Register</button>

    <p id="message"></p>

  </form>
</div>

<script src="script.js"></script>

</body>
</html>
function togglePassword() {
  const password = document.getElementById("password");

  if(password.type === "password"){
    password.type = "text";
  } else {
    password.type = "password";
  }
}