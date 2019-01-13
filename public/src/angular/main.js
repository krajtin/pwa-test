const config = function ($routeProvider) {
  $routeProvider
    .when('/parrafos', {
      template: '<parrafos></parrafos>'
    })
    .when('/frutas', {
      template: '<frutas></frutas>'
    })
    //otherwise('/phones');
}

angular.module('appAngular', [
  'ngRoute',
  'parrafos',

])
.config(['$routeProvider', config])
.controller('appController',  ($scope, $http) => {

  $scope.texto = 'Soy un texto muy chulo';
  $scope.phones = [
      {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.'
      }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.'
      }, {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.'
      }
    ];

    // Simple GET request example:
    /*$http({
        method: 'GET',
        url: '/coins'
    }).then( ({data}) =>  {
        console.log(data);
    }, (response) => {
        // Error
    });
    */

});
