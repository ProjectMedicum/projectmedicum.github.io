//NIE CZYŚCIĆ KODU!

var links = new Array();
links[0] = "https://projectmedicum.github.io/Disease/Borelioza.html";
links[1] = "https://projectmedicum.github.io/Disease/Cukrzycowa_Choroba_Nerek.html";
links[2] = "https://projectmedicum.github.io/Disease/Dna_Moczanowa.html";
links[3] = "https://projectmedicum.github.io/Disease/Figowka_Gronkowcowa.html";
links[4] = "https://projectmedicum.github.io/Disease/Osteoporoza.html";

/*------------- Nie dotykać kodu pod tą linią -------------*/

// 17/12/2016 18:53 REPETITIVE PAGES ARE NO MORE! THE KING IS DEAD, LONG LIVE THE KING!
function RandomizePage() {
    var CurrentPage = links.indexOf(window.location.href);
    if (CurrentPage > -1) {
        links.splice(CurrentPage, 1);
    }
    var a = Math.floor(Math.random() * links.length);
    window.location.href = links[a];
}
