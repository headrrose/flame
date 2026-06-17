function showSignupMessage() {
  let name = document.getElementById("nameInput").value;

  let region = document.getElementById("regionInput").value;

  let role = document.getElementById("roleInput").value;

  let message
  if (name == ''){
    message = "please enter both name and"

  } else if (region == "") {
    message = 'please enter valid'
  } else {
  message = `Welcome, ${name} the ${role} from ${region} \nThanks for joining the party`
  }

  document.getElementById("output").innerText = message;
   
}

document.getElementById("signupButton").onclick = showSignupMessage
