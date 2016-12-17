//NIE CZYŚCIĆ KODU!

var links = new Array();
links[0] = "../Disease/Borelioza.html ";
links[1] = "../Disease/Cukrzycowa_Choroba_Nerek.html";
links[2] = "../Disease/Dna_Moczanowa.html";
links[3] = "../Disease/Figowka_Gronkowcowa.html";
links[4] = "../Disease/Osteoporoza.html";

/*------------- Nie dotykać kodu pod tą linią -------------*/

/*function RandomizePage() {
    var a = Math.floor(Math.random() * links.length);
	parent.location = links[a];
    }
}*/


function RandomizePage() {
    do {
        var a = Math.floor(Math.random() * links.length);
    }
    while (links[a] === window.location.href);

    parent.location = links[a];
}
