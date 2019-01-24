(function () {
  angular.module('etiquetas')
    .component('etiquetas', {
      /*
      templateUrl: function($element, $attrs) {
          return 'src/angular/template.html';
      }
      */
      template : '<span style="display:block;"><ng-transclude>Por defecto</ng-transclude></span>',
      /*bindings : {
        texto: '@'
      },
      */
      transclude: true,
      //scope: { title:'@' }
    })
})();
