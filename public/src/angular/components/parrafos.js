angular.module('parrafosModule', []);

angular
  .module('parrafosModule')
  .component('parrafos', {
    // Para crear la ruta de templateUrl es necesario fijarse la ruta fisica del index.html
    templateUrl: 'src/angular/templates/parrafos.html',
    controller: function () {
      this.usuario = 'Daniel';
    }
  });
