var userNumber = Math.ceil(Math.random() * 6);
console.log(userNumber);
var computerNumber = Math.ceil(Math.random() * 6);
console.log(computerNumber)
var testo;
if(userNumber > computerNumber){
    testo = "hai vinto";
}else if(userNumber < computerNumber){
    testo = "hai perso";
}else{
    testo = "pari";
}
document.getElementById("testo").innerHTML = testo;
console.log(testo)