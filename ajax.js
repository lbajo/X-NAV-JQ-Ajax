$(document).ready(function() {
    $.ajax({
		type: "GET",
		url: "cancion.txt",
		cache: false
	}).done(function( text ) { 
		$("#principio").click(function(){
			$("#txt").fadeIn("slow", 0);
			$("#txt").html(text);
			alert("LALALAAAAAA LARALALALALAAAAAAA");
		});
	});
	$("#fin").click(function(){
		$.ajax({
	    	type: "GET",
	    	url: "cancion2.txt",
	    	cache: false
		}).done(function( text ) {
	    	$("#txt").html(text);
	    	$("#txt").fadeOut("slow", 0);
		});
	});
});
