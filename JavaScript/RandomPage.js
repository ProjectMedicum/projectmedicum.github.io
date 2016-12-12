
//NIE CZYŚCIĆ KODU!

var links = new Array()
links[ 0 ] = "../Disease/Borelioza.html"
links[ 1 ] = "../Disease/Cukrzycowa_Choroba_Nerek.html"
links[ 2 ] = "../Disease/Dna_Moczanowa.html"
links[ 3 ] = "../Disease/Figowka_Gronkowcowa.html"
links[ 4 ] = "../Disease/Osteoporoza"

/*------------- Nie dotykać kodu pod tą linią -------------*/

function RandomizePage() {
	var a = Math.floor( Math.random() * links.length );
	var i = a;
	var last = links[ links.length - 1 ];
	parent.location = links [ i ];
	
	/*
	links.push( "Error.html" );
	if ( i > last ) {
		parent.location = links[ last ];
	} else {
		parent.location = links[ i ];
	}
	return false;
	parent.location = links[ i ];
	*/

}

/* 
	Jak dodać kolejne choroby:
		1. Skopiuj dokładną nazwę pliku choroby, np. "Osteoporoza.html".
		2. Dodaj linię kodu "links[ x ] = "Plik.html", gdzie 'x' jest liczbą następującą po poprzedniej chorobie.
		3. ???
		4. Profit.
*/
