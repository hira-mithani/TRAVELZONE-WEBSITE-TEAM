function validateForm(event) {
  event.preventDefault(); 

  const emailPhone = document.getElementById("emailPhoneInput").value;
  const password = document.getElementById("passwordInput").value;

  const validEmail = "hira@gmail.com"; 
  const validPassword = "1234"; 


  if (emailPhone !== validEmail || password !== validPassword) {
      alert("Invalid Email or Password. Please try again."); 
      document.getElementById("emailPhoneInput").value = ""; 
      document.getElementById("passwordInput").value = ""; 
      document.getElementById("emailPhoneInput").focus(); 
      return; 
  }

  alert("Login successful!"); 
  window.location.href = "../pages/login2.html"; 
}

