$(function(){

// var $locatons = $('#locations');

    $.ajax({
      type: 'GET',
      url: 'place the URL HERE'
      //once the url is in place.  Just check response tab
      success: function(data){
        // console.log('success', data);
        $each(data, function(i, item){
          $data.push
          // $data.append('<li>name: '+ order.name', drink: '+ order.drink + '</li>')
        });
      }
   });

});
// ADD YOUR CODE HERE
// var searchbutton = $("#searchButton")
//    // console.log(searchbutton)
// searchbutton.click(function(event){
//    event.preventDefault();  // prevent the default Action
//    movies.length = 0;  // reset the website....
//     // console.log("Does the click works")
//    if ($("#search").val()) {
//     //console.log("My if statement works.....")
//    $.get("http://www.omdbapi.com/?s=" + $("#search").val() + "&apikey=702b3bb5", function(data) {
//       // console.log(data);
//    var searchDataArray = data["Search"];
//      //console.log(data["Search"]);
//      for (var i = 0; i < searchDataArray.length; i++) {   //push movies in to array.
//        movies.push(searchDataArray[i]);
//       renderMovies();  //renders the movie image on the website.
//      }
//    })
//  }
// })
