function Hour () 
	{
		d = new Date();
		h = d.getHours();
		min = d.getMinutes();
		s = d.getSeconds();
		txt = h + ": " + min + ": " + s;
		Calk.innerHTML = txt;
		setTimeout("Hour()", 1000);
	}


function tweett_post() {
	var user_name = document.getElementById("user_name").value;
	var tw_p = document.getElementById("tw_p").value;
	if (tw_p == "")
      {alert("Il faut ecrire un tweet avant de l'envoyer");}
    else {document.getElementById("tweets").innerHTML += '<ul>'+'<li>'+user_name+" à écrit à "+Date.now()+':'+'</li>'+'</ul>'+'<p>'+tw_p+'</p>';}
}

function verifie_password() {
	var password_n = document.getElementById("passw").value;
	var password_c = document.getElementById("cpassw").value;
	if(password_n!=password_c) 
		{alert("Les mots de passe sont differents");}
}
     
function recherche_tweet() {
      chaine.indexOf(document.getElementById("recherche").value,debut)	
      
}
