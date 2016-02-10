/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
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
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-524363739");