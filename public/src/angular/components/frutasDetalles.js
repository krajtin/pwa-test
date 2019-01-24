(function() {
  'use strict';
  const controller = function ($http, $routeParams) {

    this.obj = {
      descripcion: "Este es el texto de una de las frutas"
    };

    // Simple GET request example:
    /*$http({
        method: 'GET',
        url: '/frutas/' + $routeParams.frutaID
    }).then( ({data}) =>  {
        this.frutas = data;
        console.log(data)
    }, (response) => {
        // Error
    });
    */

    console.log($routeParams);
  }
  controller.$inject = ['$http', '$routeParams'];

  angular.module('frutasDetalles', []); // Modulo para poder asignarlo al main
  angular
    .module('frutasDetalles')
    .component('frutasDetalles', {
      // Para crear la ruta de templateUrl es necesario fijarse la ruta fisica del index.html
      templateUrl: 'src/angular/templates/frutasDetalles.html',
      controller: controller
    });

}());
