angular.module("swapiPractice").service("swapiService", function($http){

this.getCharacters = function(){
  return $http({
    method: "GET",
    url: "http://swapi.co/api/people/"
  }).then(function(response){
    console.log("service log", response);
    return response.data;
  });
};


});
