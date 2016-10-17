angular.module("swapiPractice").controller("mainCtrl", function($scope, swapiService){

$scope.getCharacters = function(){
  swapiService.getCharacters().then(function(response){
    console.log("ctrl log", response);
    $scope.characters = response.results;
  });
};

$scope.getCharacters();

});
