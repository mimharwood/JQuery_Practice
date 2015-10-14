$( document ).ready( function(){


	$("#topPanel").animate({"top": "-=150px"}, 2000);

	$("#bottomPanel").animate({"bottom": "-=150px"}, 2000);

	$("img").click( function(){
		$(this).fadeOut();
		$(this).fadeIn();
	});

	$("#bottomPanel").mouseenter(function(){
        alert("Hi Al! Hi Elijah!");
    });

    $("p").click(function(){
        $(this).hide();
});

});