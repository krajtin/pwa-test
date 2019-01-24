(function(appComponent) {
  'use strict';
  appComponent.component('lenguajes', {

    // Para crear la ruta de templateUrl es necesario fijarse la ruta fisica del index.html
    templateUrl: 'src/angular/templates/lenguajes.html',
    controller : ['$scope', function ($scope) {
      this.lenguajes = [
        {
          nombre: 'JS',
          anno: '1997',
          tipo: 'Font-end'
        }
      ]
      this.haPulsado = false;
      this.annadir = function () {
        this.haPulsado = true;
        // Creamos el obj
        const unLenguaje = Object.assign($scope.lenguaje);
        // Lo añadimos
        this.lenguajes.push(unLenguaje);
        console.log(this.lenguajes)
        this.haPulsado = false;
      }
    }]
  });
}(lenguajes));
