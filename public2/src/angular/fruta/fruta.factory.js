(function() {
    'use strict';

    angular
        .module('fruta')
        .factory('listado', listado);

    listado.$inject = ['$http'];

    /* @ngInject */
    function listado($http) {
        return {
          getDatos : (url) => $http.get('/frutas'),
          setOrdenar : function (valor) {

            // Es false siempre que se pulse una nueva categoria
            // De false a true y viceversa cuando se pulsa sobre la misma categoria
            var reverse = (this.orden.valor === valor) ? !this.orden.reverse : false;

            return {
              valor: valor,
              reverse: reverse
            }

          }
        }
    }
})();
