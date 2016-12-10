var links = new Array( 11 ) //change number to amount of pages
links[ 0 ] = "Dis1.html"
links[ 1 ] = "Dis2.html"
links[ 2 ] = "Dis3.html"
links[ 3 ] = "Dis4.html"
links[ 4 ] = "Dis5.html"
links[ 5 ] = "Dis6.html"
links[ 6 ] = "Dis7.html"
links[ 7 ] = "Dis8.html"
links[ 8 ] = "Dis9.html"
links[ 9 ] = "Dis10.html"
links[ 10 ] = "Dis11.html"

function redirect() {
	var a = 1 + Math.round( Math.random() * 11 ); //change last number to be equal to amount of pages
	var i = a;
	var last = links[ links.length - 1 ]; //defines last element of Array
	links.push( "Error.html" ); //pushes Error page to Array

	if ( i > last ) {
		location = links[ last ];
	} else {
		location = links[ i ];
	}
}