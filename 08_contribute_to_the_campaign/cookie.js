let cookieclicks = 0;

function thecookieclicks() {
    cookieclicks = cookieclicks + 1;
    document.getElementById("totalclicks").innerText = "Total clicks: " + cookieclicks;
}

function buyUpgrade() {
    
    if (cookieclicks >= 10) {
        cookieclicks = cookieclicks - 10;
        document.getElementById("totalclicks").innerText = "Total clicks: " + cookieclicks;
        setInterval(thecookieclicks, 1000); 
    } else {
        document.getElementByID("gameMessage").innerText = "You need 10 clicks to buy this!";
    }
}

document.getElementById("giveButton").onclick = thecookieclicks;
document.getElementById("buyButton").onclick = buyUpgrade;