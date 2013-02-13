// Random bits of code that do random stuff (awesome doc, please)
! function ($) {

    $window = $(window);

    // *** Scrolling ***
    // Smooth scrolling
    function scrollSmoothly(toHash,theOffset) {
        $('html,body').animate({
            scrollTop: toHash.offset().top + theOffset
        }, 300);
    }

    // Links with class="jump"
    $(".jump").click(function (event) {
        event.preventDefault();
        scrollSmoothly($(this.hash),0);
    });
    
    // Links with class="footote-jump"
    $(".footnote-jump").click(function (event) {
        event.preventDefault();
        scrollSmoothly($(this.hash),-60);
    });
    
    // *** strokes (keyboard nav) ***
	
	// Set offset
	strokes.offset(-60);
	
	// Move from one thought to another
    strokes.step({
        selector: ".step",
        comboPrevious: [ "altKey", 38 ],
        comboNext: [ "altKey", 40 ],
    });  

	// Top/Bottom
    strokes.direct({
        selector: "#top",
        combo: [ "ctrlKey", "altKey", 38 ],
    })
    .direct({
        selector: "#bottom",
        combo: [ "ctrlKey", "altKey", 40 ],
    });
 	
 	strokes.listen();

    // *** tooltip ***
    function tooltipify() {
        if ($window.width() > 980) {

            $('.thought-footer .tooltipify a').tooltip({
                placement: 'right'
            });

            $('.navbar .tooltipify a').tooltip({
                placement: 'bottom'
            });

            $('.content-nav .tooltipify a').tooltip({
                placement: 'top'
            });

        } else {
            $('.thought-footer .tooltipify a').tooltip("destroy");
            $('.navbar .tooltipify a').tooltip("destroy");
            $('.content-nav .tooltipify a').tooltip("destroy");
        }
    }

    $window.resize($.debounce(300, function () {
        tooltipify();
    }));
    tooltipify();
    
    
    // *** prettyPrint ***
    //window.prettyPrint && prettyPrint();
    
 	$(".container").fitVids();

}(window.jQuery)