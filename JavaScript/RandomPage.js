//NIE CZYŚCIĆ KODU!

var links = new Array();
links[0] = "../Disease/Borelioza.html";
links[1] = "../Disease/Cukrzycowa_Choroba_Nerek.html";
links[2] = "../Disease/Dna_Moczanowa.html";
links[3] = "../Disease/Figowka_Gronkowcowa.html";
links[4] = "../Disease/Osteoporoza.html";

/*------------- Nie dotykać kodu pod tą linią -------------*/


function pushCurrentUrlToArray() { //prob not working
    links.push(window.location.href);
}

function RandomizePage() {
    var a = Math.floor(Math.random() * links.length);
    if (a == links[links.length - 1]) {
        return RandomizePage;
    } else {
        parent.location = links[a];
    }
}
