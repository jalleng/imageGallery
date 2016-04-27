(function(){

var image = {};

image.setup = function(){
  $("#submit").on("click", function(e){
    e.preventDefault();
    var imageUrl = $("#imageUrl").val();
    var description = $("#imageDescription").val();
    $.ajax({
      method: "POST",
      url: "/api/images",
      data: '{"imageUrl":"' + imageUrl + '", "imageDescription":"' + description + '"}',
      contentType: "application/json",
    	dataType: 'json'
    })
      .done(function( data ) {
        console.log("Image Data Saved", data);
      });
    $("#imageUrl").val('');	
    $("#imageDescription").val('');
  });

  $("#showImages").on("click", function(e){
    e.preventDefault();
    $.ajax({
      method: "GET",
      url: "/api/images",        
    })
      .done(function( data ) {
        console.log("image data", data);
        image.toHtml(data);
      }); 
  })
};

image.toHtml = function(array) {
  var listItems = array.map(function(obj){
   
    var element = '<li><span>' + obj.imageDescription + '<img src="' + obj.imageUrl + '"></li>';
    return element;
  });
  console.log(listItems);
  $.each(listItems, function(i, item){
    $("#images ul").append(item);
  });
};

image.setup()

})();
