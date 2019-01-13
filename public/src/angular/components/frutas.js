const frutasController = function ($http) {
  this.frutas = [];
  this.orderBy = "nombre";

  // Simple GET request example:
  $http({
      method: 'GET',
      url: '/frutas'
  }).then( ({data}) =>  {
      this.frutas = data;
      console.log(data)
  }, (response) => {
      // Error
  });
}
frutasController.$inject = ['$http'];

angular.module('frutas', []); // Modulo para poder asignarlo al main
angular
  .module('frutas')
  .component('frutas', {
    // Para crear la ruta de templateUrl es necesario fijarse la ruta fisica del index.html
    templateUrl: 'src/angular/templates/frutas.html',
    controller: frutasController
  });
