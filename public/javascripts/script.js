function Hour() 
	{
		var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();
		var txt = h +" h " + m + " min " + s +" s ";
		setTimeout("Hour()", 1000);
		return txt;
	}
	
function Date_auj(){
	var d = new Date();
	var j = d.getDay()+1;
	var m = d.getMonth()+1;
	var a = d.getYear()+1900;
	var date_txt = j+'/'+m+'/'+a;
	return date_txt;
}


function tweett_post() {
	var h = Hour();
	var d_auj = Date_auj();
	var user_name = document.getElementById("user_name").value;
	var tw_p = document.getElementById("tw_p").value;
	if (tw_p == "")
      {alert("Il faut ecrire un tweet avant de l'envoyer");}
    else {document.getElementById("tweets").innerHTML += '<ul>'+'<li>'+user_name+" à écrit le "+d_auj+" à "+h+':'+'</li>'+'</ul>'+'<p>'+tw_p+'</p>';}
}

function verifie_password(element1,element2) {
	if (element1.value.length<8) {return false;}
	else if(element1.value!=element2.value) 
		{alert("Les mots de passe sont differents");
		element1.select();
		return false;}
        else return true;
}

function bon_mot_de_passe() {
	var e = document.getElementById("passw").value;
	if (e.length<8) {document.getElementById("good_passw").innerHTML = "Mot de passe trop court";}
	else {document.getElementById("good_passw").innerHTML = "Mot de passe assez long";}
	
}

