	var links = new Array()
	links[ 0 ] = "Figowka_Gronkowcowa.html"
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

	function RandomizePage() {
		var a = Math.floor( Math.random() * links.length );
		var i = a;
		var last = links[ links.length - 1 ];
		links.push( "Error.html" );

		if ( i > last ) {
			parent.location = links[ last ];
		} else {
			parent.location = links[ i ];
		}
		return false;
	}
