const config = function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/frutas', {
      template: '<fruta></fruta>'
    })
    .when('/calculadora', {
      template: '<calculadora></calculadora>'
    })
    /*.when('/frutas/:frutaID', {
      template: '<frutas-detalles></frutas-detalles>'
    })
    */
    //.otherwise('/');


  //$locationProvider.html5Mode(true); // Si se especifica es necesario poner en el <head><base href="/"></head>
  //$locationProvider.hashPrefix('caracter'); // Si se especifica los enlaces href deberan escribirse seguido de # el caracter especificado. E.g. $locationProvider.hashPrefix('qq') href="#qq/home"
}


angular.module('appAngular', [
  'ngRoute',
  'fruta',
  'calculadora',
  'etiquetas'
])
.config(['$routeProvider', '$locationProvider', config])

.controller('appController',  ($scope, $http) => {

});
angular.element(function() {
  angular.bootstrap(document, ['appAngular']);
});
