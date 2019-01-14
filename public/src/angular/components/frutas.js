(function() {

  const controller = function ($http) {

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

    $http({
        method: 'POST',
        url: '/frutas',
        headers: {
           'Content-Type': 'application/json'
        },
        data: {id:9, nombre: 'melocoton', stock: 5, colorHEX: '#f3c08d'}
    }).then( ({data}) =>  {
        console.log(data)
    }, (response) => {
        // Error
    });

    $http({
        method: 'PUT',
        url: '/frutas',
        headers: {
           'Content-Type': 'application/json'
        },
        data: {id:1, nombre: 'naranja', stock: 50, colorHEX: '#c2940e'}
    }).then( ({data}) =>  {
        console.log(data)
    }, (response) => {
        // Error
    });

    $http({
        method: 'DELETE',
        url: '/frutas',
        headers: {
           'Content-Type': 'application/json'
        },
        data: { id:1 }
    }).then( ({data}) =>  {
        console.log(data)
    }, (response) => {
        // Error
    });

  }
  controller.$inject = ['$http'];

  angular.module('frutas', []); // Modulo para poder asignarlo al main
  angular
    .module('frutas')
    .component('frutas', {
      // Para crear la ruta de templateUrl es necesario fijarse la ruta fisica del index.html
      templateUrl: 'src/angular/templates/frutas.html',
      controller: controller
    })
    .filter('checkFiltro', () => {
      return (input) => (input > 0)  ? 'Disponible' : 'Sin existencias'

    });

}());
