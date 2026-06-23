// Instructions in the CSS
function checkAge() {

  let age = Number(document.getElementById("ageBox").value);
  
  if (age >= 99) {
    message = "You're a legend!?"
  } else if (age >= 18) {
    message = "You can vote!";
  } else if (age >= 16) {
    message = "You can pre-enrol.";
  } else if (age <= 0) {
    message = "Time traveller??"
  } else {
    message = "Sorry, you can't register yet.";
  }


  document.getElementById("result").innerHTML = message;
}

document.getElementById("submit").onclick = checkAge
