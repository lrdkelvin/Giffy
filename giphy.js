var beginurl = "https://api.giphy.com/v1/gifs/search?q="
var endurl = "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9"
var playing0 = true;
var playing1 = true;
var playing2 = true;
var playing3 = true;
var playing4 = true;
var playing5 = true;
var playing6 = true;
var playing7 = true;
var playing8 = true;
var playing9 = true;


searchTerm = "";

var queryURL = "&limit=10";

function removeDivs() {
    $("#images").html("");
};



function postPictures() {
removeDivs();

$.ajax({
  url: (beginurl + searchTerm + endurl),
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
    $("#image" + i).before("<div> rating: " + response.data[i].rating); + "</div>"
    $("#image" + i).attr("width", "250");
    $("#image" + i).attr("height", "250");
    console.log("yes");
    
  }

  $("#image0").on("click", function() {
    
    if (playing0 === true) {
$("#image0").attr("src", response.data[0].images.preview_gif.url);
console.log( "you clicked it!");
playing0 = false;
    } else { 
        $("#image7").attr("src", response.data[0].images.original_still.url);
        playing0 = true;
        console.log("it's not playing anymore")
        

    }


});

  $("#image1").on("click", function() {
    
    if (playing7 === true) {
$("#image1").attr("src", response.data[1].images.preview_gif.url);
console.log( "you clicked it!");
playing1 = false;
    } else { 
        $("#image1").attr("src", response.data[1].images.original_still.url);
        playing1 = true;
        console.log("it's not playing anymore")
        

    }


});



$("#image2").on("click", function() {
    
    if (playing2 === true) {
$("#image2").attr("src", response.data[2].images.preview_gif.url);
console.log( "you clicked it!");
playing2 = false;
    } else { 
        $("#image2").attr("src", response.data[2].images.original_still.url);
        playing2 = true;
        console.log("it's not playing anymore")
        

    }


});

$("#image3").on("click", function() {
    
    if (playing3 === true) {
$("#image3").attr("src", response.data[3].images.preview_gif.url);
console.log( "you clicked it!");
playing3 = false;
    } else { 
        $("#image3").attr("src", response.data[3].images.original_still.url);
        playing3 = true;
        console.log("it's not playing anymore")
        

    }


});

$("#image4").on("click", function() {
    
    if (playing4 === true) {
$("#image4").attr("src", response.data[4].images.preview_gif.url);
console.log( "you clicked it!");
playing4 = false;
    } else { 
        $("#image4").attr("src", response.data[4].images.original_still.url);
        playing4 = true;
        console.log("it's not playing anymore")
        

    }


});

$("#image5").on("click", function() {
    
    if (playing5 === true) {
$("#image7").attr("src", response.data[5].images.preview_gif.url);
console.log( "you clicked it!");
playing5 = false;
    } else { 
        $("#image5").attr("src", response.data[5].images.original_still.url);
        playing5 = true;
        console.log("it's not playing anymore")
        

    }


});

$("#image6").on("click", function() {
    
    if (playing6 === true) {
$("#image6").attr("src", response.data[6].images.preview_gif.url);
console.log( "you clicked it!");
playing6 = false;
    } else { 
        $("#image6").attr("src", response.data[6].images.original_still.url);
        playing6 = true;
        console.log("it's not playing anymore")
        

    }


});

$("#image7").on("click", function() {
    
    if (playing7 === true) {
$("#image7").attr("src", response.data[7].images.preview_gif.url);
console.log( "you clicked it!");
playing7 = false;
    } else { 
        $("#image7").attr("src", response.data[7].images.original_still.url);
        playing7 = true;
        console.log("it's not playing anymore")
        

    }


});

$("#image8").on("click", function() {
    
    if (playing8 === true) {
$("#image9").attr("src", response.data[8].images.preview_gif.url);
console.log( "you clicked it!");
playing8 = false;
    } else { 
        $("#image9").attr("src", response.data[8].images.original_still.url);
        playing8 = true;
        console.log("it's not playing anymore")
        

    }


});

$("#image9").on("click", function() {
    
        if (playing9 === true) {
    $("#image9").attr("src", response.data[9].images.preview_gif.url);
    console.log( "you clicked it!");
    playing9 = false;
        } else { 
            $("#image9").attr("src", response.data[9].images.original_still.url);
            playing9 = true;
            console.log("it's not playing anymore")
            

        }

    
});

 
});

}//end function postpictures

postPictures();






var topics = ["dogs", "cats", "horses", "funny", "wolves", "stubborn", "celebrity"];


for (var a = 0; a<topics.length; a++) {
    function buttongenerator() {
        $("#buttons").append("<button id = 'button" + a + "' " + "onClick='reply_click(this.id)'>")
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

function reply_click(clicked_id)
  {
     searchTerm = $("#" + clicked_id).html();
     postPictures();
  }












