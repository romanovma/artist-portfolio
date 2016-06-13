// Define the `artistPortfolio` module
var artistPortfolio = angular.module('artistPortfolio', []);

// Define the `ArtistController` controller on the `phonecatApp` module
artistPortfolio.controller('ArtistController',
  function ArtistController($scope) {
    $scope.artistName = 'Stina Persson';
    $scope.menu = [
      {
        name: 'News'
      },
      {
        name: 'Collage'
      },
      {
        name: 'Drawing'
      },
      {
        name: 'About & Contact'
      },
      {
        name: 'Home'
      }
    ];
  }
);
