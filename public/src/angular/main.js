const config = function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/parrafos', {
      template: '<parrafos></parrafos>'

    })
    .when('/frutas', {
      template: '<frutas></frutas>'
    })
    .when('/frutas/:frutaID', {
      template: '<frutas-detalles></frutas-detalles>'
    })
    .otherwise('/');

  $locationProvider.html5Mode(true);
  //$locationProvider.hashPrefix('!');
}

angular.module('appAngular', [
  'ngRoute',
  'ngResource',
  'parrafosModule',
  'frutas',
  'frutasDetalles',
  'todoList',
  'lenguajes'
])
.config(['$routeProvider', '$locationProvider', config])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  console.log("Otra configuracion")
}])
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

})
.controller("controlador_2", ['$http', '$scope', 'asyncGreeter', function ($http, $scope, asyncGreeter) {
  $scope.info = "Soy una informacion";
  asyncGreeter.say("Daniel", 2000);
  asyncGreeter.sayPromise().then( texto => console.log(texto));
  asyncGreeter.resourcePrueba();
}])
.factory('asyncGreeter', ['$timeout', '$log', '$q','$resource', function ($timeout, $log, $q, $resource) {

  return {
    say: function (name, timeout) {
      $timeout(function(){
        $log.info("Hello, " + name + "!");
      }, timeout)
    },

    sayPromise : function () {
      return $q((resolve, reject) => {
        resolve("Diciendo promesa");
      });
    },

    resourcePrueba : function () {
      var CreditCard = $resource('http://localhost:3000/users/:userId',
      {userId: 123}, {
        usarPOST: {method: 'POST', params: {charge: true}}
      });
      var cards = CreditCard.query();
      cards.$promise.then(function() {
        var card = cards[0];
        console.log(card);

      });
    }

  };
}]);
