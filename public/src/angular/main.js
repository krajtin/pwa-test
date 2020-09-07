const config = function ($routeProvider, $locationProvider) {
  $routeProvider
    .otherwise('/');

  $locationProvider.html5Mode(true);
  //$locationProvider.hashPrefix('!');
}

angular.module('appAngular', [
  'ngRoute',
  'ngResource',
 
])
.config(['$routeProvider', '$locationProvider', config])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  
}])
.controller('appController',  ($scope, $http) => {

  const SRC_MOTORES = "../recursos/motores/";
  $scope.motoresJuegos = [
      {
        name: 'Unity',
        src: SRC_MOTORES + "unity.png"
      },
      {
        name: 'Unreal Engine',
        src: SRC_MOTORES + "unreal.png"
      },
      {
        name: 'Game Maker',
        src: SRC_MOTORES + "gamemaker.png"
      },
      {
        name: 'Godot',
        src: SRC_MOTORES + "godot.png"
      },
    ];


});
