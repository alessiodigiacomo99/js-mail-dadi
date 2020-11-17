var email = prompt("Qual è la tua email?");
var emailList = ["piero@gmail.com", "luca@gmail.com", "gianni@gmail.com", "franco@gmail.com", "mimmo@gmail.com"];
var testo = "non sei dentro";
for (i = 0; i < emailList.length; i++) {
    if(email == emailList[i]){
        testo = "sei dentro";
    }
    document.getElementById("testo").innerHTML = testo;
}