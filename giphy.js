var topics = ["dogs", "cats", "horses", "gerbals", "wolves", "stubborn", "celebrity"];


for (var a = 0; a<topics.length; a++) {
    function buttongenerator() {
        $("#buttons").append("<button id = 'button" + a + "'" + ">")
    }
    buttongenerator();

    $("#button" + a).html(topics[a]);
}

$("#submitButton").on("click", function () {
    console.log("you clicked me!");
   var userInput = $("input:text").val();

   if (userInput !== "") {
   topics.push(userInput) ;
   console.log("user typed " +userInput);
   console.log("topics are " +topics);
   buttongenerator();
   $("#button" + a).html(userInput);
   a++
   } else {
       console.log("please enter a valid input")
    }
})



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

    $("#image" + i).attr("src", response.data[i].images.original_still.url);
    $("#image" + i).attr("width", "250");
    $("#image" + i).attr("height", "250");
    console.log("yes");
    
  }

  $("#image0").on("click", function() {
    $("#image0").attr("src", response.data[0].images.preview_gif.url);
    console.log( "you clicked it!");

    
});

$("#image1").on("click", function() {
    $("#image1").attr("src", response.data[1].images.preview_gif.url);
    console.log( "you clicked it!");

    
});

$("#image2").on("click", function() {
    $("#image2").attr("src", response.data[2].images.preview_gif.url);
    console.log( "you clicked it!");

    
});

$("#image3").on("click", function() {
    $("#image3").attr("src", response.data[3].images.preview_gif.url);
    console.log( "you clicked it!");

    
});

$("#image4").on("click", function() {
    $("#image4").attr("src", response.data[4].images.preview_gif.url);
    console.log( "you clicked it!");

    
});

$("#image5").on("click", function() {
    $("#image5").attr("src", response.data[5].images.preview_gif.url);
    console.log( "you clicked it!");

    
});

$("#image6").on("click", function() {
    $("#image6").attr("src", response.data[6].images.preview_gif.url);
    console.log( "you clicked it!");

    
});

$("#image7").on("click", function() {
    $("#image7").attr("src", response.data[7].images.preview_gif.url);
    console.log( "you clicked it!");

    
});

$("#image8").on("click", function() {
    $("#image8").attr("src", response.data[8].images.preview_gif.url);
    console.log( "you clicked it!");

    
});

$("#image9").on("click", function() {
    $("#image9").attr("src", response.data[9].images.preview_gif.url);
    console.log( "you clicked it!");

    
});

 
});







