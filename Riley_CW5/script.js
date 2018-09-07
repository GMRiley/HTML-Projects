
function randomClass() 
{
  var classes = ['up', 'right', 'bottom', 'left'],
    index = Math.floor(Math.random() * classes.length);
  return classes[index];
}

function changePerspective() 
{
  var tiles = document.querySelectorAll('.tile');
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].className = 'tile ' + randomClass();
  }
}
var submit = document.getElementById("submit");
submit.onclick = validate;

function validate() 
{

	var firstName = document.getElementById("first-name");
	
	var lastName = document.getElementById("last-name");
	
	var emailAddress = document.getElementById("email-address");
	
	var emailConfirm = document.getElementById("email-address-confirm");
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirm-password");
	
// Storing the ID's for the error messages-------------------------
	
	var firstNameError = document.getElementById("first-name-error");
	
	var lastNameError = document.getElementById("last-name-error");
	
	var emailAddressError = document.getElementById("email-address-error");
	
	var emailConfirmError = document.getElementById("email-address-confirm-error");
    var usernameError = document.getElementById("username-error");
    var passwordError = document.getElementById("password-error");
    var confirmPassError = document.getElementById("confirm-password-error");
    
	
	// validation ---------------------------------------------
	
	//First Name
	
	if(firstName.value=="") {
		firstNameError.innerHTML="*Please fill in your First Name!";
	} 
	
	else {
		firstNameError.innerHTML="";
	}

	//Last Name
	
	if(lastName.value=="") {
		lastNameError.innerHTML="*Please fill in your Last Name!";
	} 
	
	else {
		lastNameError.innerHTML="";
	}
	
	// Email Address
	
	if(emailAddress.value=="") {
		emailAddressError.innerHTML="*Please fill in your Email Address!";
	} 
	
	else {
		emailAddressError.innerHTML="";
	}
	
	// email confirmation
	
	if(emailConfirm.value=="") {
		emailConfirmError.innerHTML="*Please Confirm your Email Address!";
	} 
	
	else {
		emailConfirmError.innerHTML="";
	}
	
	// checking if the emails match
	
	if(emailAddress.value != emailConfirm.value) {
		emailConfirmError.innerHTML="EMAILS DON'T MATCH!";
	
	}
    //username
    if(username.value=="")
    {
        usernameError.innerHTML="*Please fill in your Username!";
    }
    else
    {
         usernameError.innerHTML="";
        
    }
    if(password.value=="") {
		passwordError.innerHTML="*Please fill in your Email Address!";
	} 
	
	else {
		passwordError.innerHTML="";
	}
	
	// password confrim	
	if(confirmPassword.value=="") 
    {
		confirmPassError.innerHTML="*Please Confirm your Email Address!";
	} 
	
	else {
		confirmPassError.innerHTML="";
	}
    if(password.value != confirmPassword.value) {
		confirmPassError.innerHTML="PASSWORDS DON'T MATCH!";
	
	}
	
	// Alert box for confirmation--------------------------
	
	var message ="Press Ok to confirm your info!";
	
	if(
		firstName.value !="" &&
		lastName.value !="" &&
		emailAddress.value !="" &&
		emailConfirm.value !=""&&
		emailAddress.value == emailConfirm.value &&
        username.value !=""&&
        password.value !=""&&
        confirmPassword.value !=""&&
        password.value == confirmPassword.value) 
    {
		alert(
		message + "\n" + firstName.value + "\n" + lastName.value + "\n" + emailAddress.value + "\n" + username.value + "\n" + password.value +
        "\n" + confirmPassword.value
		);
		//opens new window with the URL target
		window.location.assign("./thankyou.html");
	}
}// end validate function