//var access= require("./keys.js")
var searchomdb= ""
var searchrotten= ""

if (process.argv[2]==="my-tweets"){

var access= require("./keys.js")

var client = access.twitterKeys
console.log(client);

var params = {screen_name: 'YogashriPradhan'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
    console.log(response);
  }

  else{console.log(error)}
});

}
if (process.argv[2]==="spotify-this-song"){}
if (process.argv[2]==="movie-this" && process.argv.length>3){

	// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");

// Then run a request to the OMDB API with the movie specified
for(i=3; i<process.argv.length; i++){

if(i===process.argv.length-1 && process.argv.length>3){
searchomdb=searchomdb+process.argv[i];
searchrotten=searchrotten+process.argv[i]
break
}
searchomdb=searchomdb+process.argv[i]+"+"
searchrotten=searchrotten+process.argv[i]+"_"

}
request("http://www.omdbapi.com/?t=" +searchomdb+"&y=&plot=short&apikey=40e9cece", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    //console.log(body);
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Movie Title: " + JSON.parse(body).Title);
    console.log("Release year: " + JSON.parse(body).Year);
    console.log("Country of prodution: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    console.log("Plot of Movie: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
    console.log("Rotten Tomatoes Link: " + "https://www.rottentomatoes.com/m/" + searchrotten);
  }
});
}

if (process.argv[2]==="movie-this" && process.argv.length===3){

var request = require("request")

request("http://www.omdbapi.com/?t=" +"Mr.+nobody"+"&y=&plot=short&apikey=40e9cece", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    //console.log(body);
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Movie Title: " + JSON.parse(body).Title);
    console.log("Release year: " + JSON.parse(body).Year);
    console.log("Country of prodution: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    console.log("Plot of Movie: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
    console.log("Rotten Tomatoes Link: " + "https://www.rottentomatoes.com/m/Mr_Nobody");
  }
})

}
console.log(searchomdb);
console.log(searchrotten);


if (process.argv[2]==="do-what-it-says"){}