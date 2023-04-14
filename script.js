function generatePassword(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

document.getElementById("password-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const passwordLength = document.getElementById("password-length").value;
  const passwordDisplay = document.getElementById("password");

  const passwordDisplayElement = document.getElementById("password-display");

  const password = generatePassword(passwordLength);

  passwordDisplay.value = password;
});