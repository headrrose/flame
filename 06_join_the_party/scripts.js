let nameInput = document.getElementById("nameInput");
let greetButton = document.getElementById("greetButton");
let output = document.getElementById("output");
let roleInput = document.getElementById("roleInput")
let partyInput = document.getElementById("partyInput")

function sayHello() {
  let name = nameInput.value;
  let role = roleInput.value;
  let party = partyInput.value;
  output.innerText = "Welcome, " + name + " the " + role + " to the " + party.toUpperCase()
}
greetButton.onclick = sayHello;
