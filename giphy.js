var topics = ["dogs", "cats", "horses", "gerbals", ];



var baseurl = "https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9"

var queryURL = "&limit=10";

$.ajax({
  url: (baseurl),
  method: "GET"
}).then(function(response) {

  var imageNumber = "";

  for (var i=0; i < 10; i++) {
    function createimg() {
        $("#images").append("<img id = 'image" + i + "'" + "class = 'images'" + ">")
        $("#img" + i).attr("id", i)
    }

    createimg();

    $("#image" + i).attr("src", response.data[i].images.preview_gif.url);
    $("#image" + i).attr("width", "250")
    $("#image" + i).attr("height", "250")
    $("#image" + i)
    console.log("yes");
    
  }

 
});









