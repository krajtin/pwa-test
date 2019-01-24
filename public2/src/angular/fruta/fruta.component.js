(function() {
  'use strict';

  angular
    .module('fruta')
    .component('fruta', component());

  function component () {
    return {
      templateUrl: 'src/angular/fruta/fruta.template.html',
      controller: Controlador,
      controllerAs: 'fr'
    }
  }

  Controlador.$inject = ['listado', '$scope'];

  function Controlador (listado, $scope) {

    this.frutas = [];
    this.tempArray = []; //
    $scope.toDelete = {};

    this.orden = {
      valor: 'nombre',
      reverse: false
    }

    this.setOrdenar = listado.setOrdenar;

    this.copyArray = (arr) => {
      //Para copiar un array en angular es necesario usar su API
      //Si lo hacemos con JS está creando una referencia
      return angular.copy(arr);
    }
    this.deshCambios = () => {
      //Restablecemos el array
      this.frutas = angular.copy(this.tempArray);
    }

    listado.getDatos()
      .then( respuesta => {
        this.frutas = respuesta.data;
      })
      .catch(e => {
        console.log("Error: ===> ", e.statusText);
      })

    this.checkeados = () => {
      for (var prop in $scope.toDelete) {
        if ($scope.toDelete[prop]){
            return false;
        }
      }
      return true;
    }
    this.borrar = function () {

      //Copiamos el array por si se quiere deshacer los cambios
      this.tempArray = this.copyArray(this.frutas);

      var temp = this.copyArray(this.frutas);
      for(var prop in $scope.toDelete) {
        // Si esta checkeado asigna undefined al id
        if ($scope.toDelete[prop]){
            var indice = this.buscarByID(temp, prop)
            temp[indice].id = undefined;
        }

      }
      //Descheckea todos los inputs checks
      $scope.toDelete = {};
      this.frutas = temp.filter(function(fruta){ return fruta.id !== undefined; });

      console.log(this.tempArray);
    }

    this.buscarByID = (arreglo, id) => {
      var indice = -1;
      for (var i = 0; i < arreglo.length; i++) {
        if(arreglo[i].id == id) {
            indice = i;
            break;
          }
      }
      return indice;
    }

  }

}());
