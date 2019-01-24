(function () {
  "use strict"
  angular
    .module('calculadora')
    .component('calculadora', component())


    function component () {
      return {
        templateUrl: 'src/angular/calculadora/calculadora.template.html',
        controllerAs: 'cl',
        controller: controller
      }
    }

    function controller ($scope) {
      this.calculo = () => {
        return eval($scope.caja)
      }
    }

    controller.$inject = ['$scope'];
})();
