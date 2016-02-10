         // insert code to be run when the symbol is created here
		var wasHidden = true;

		//http://stackoverflow.com/a/488073/52160
		function isScrolledIntoView(elem) {
			var docViewTop = $(window).scrollTop();
			var docViewBottom = docViewTop + $(window).height();

			var elemTop = $(elem).offset().top;
			var elemBottom = elemTop + $(elem).height();
		console.log('elemBottom',elemBottom,'elemTop',elemTop,'docBottom',docViewBottom,'docTop',docViewTop);		
			return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
			  && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
		}		  

		//Immedidately see if visible
		if(isScrolledIntoView(sym.element)) {
			console.log('on load vis');
			wasHidden=false;
			sym.play();
		}

		function doStart() {
            if(isScrolledIntoView(sym.element)) {
				if(wasHidden) {
					console.log('Start me up');	
					sym.play();
				}
				wasHidden = false;
            } else {
                console.log('stop');
                sym.stop();
				wasHidden = true;
            }

		}

        $(window).on("scroll", doStart);

