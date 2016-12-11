	var links = new Array()
	links[ 0 ] = "Figowka_Gronkowcowa.html"
	links[ 1 ] = "Borelioza.html"

	function RandomizePage() {
		var a = Math.floor( Math.random() * links.length );
		var i = a;
		var last = links[ links.length - 1 ];
		parent.location = [ i ];		
		/*
		links.push( "Error.html" );

		if ( i > last ) {
			parent.location = links[ last ];
		} else {
			parent.location = links[ i ];
		}
		return false;
		*/
	}
