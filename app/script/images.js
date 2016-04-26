
var image = {};

image.setup = function(){
	$("#submit").on("click", function(e){
		e.preventDefault();
		var imageUrl = $("#imageUrl").val();
		var description = $("#imageDescription").val();
		console.log(imageUrl);
		$.ajax({
		  method: "POST",
		  url: "/api/images",
		  data: '{"imageUrl":"' + imageUrl + '", "imageDescription":"' + description + '"}',
		  contentType: "application/json",
    	dataType: 'json'
		})
		  .done(function( msg ) {
		    alert( "Data Saved: " + msg );
		  });	
		
	});
};
image.setup()


	