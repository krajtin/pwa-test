var todoList = angular.module('todoList', []);
todoList.service('getDatos', ['$http', function ($http) {
   this.getPersonas = function (success) {
      $http.get('http://localhost:3000/personas')
      .then( ({data}) => {
        success(data);
      });
    };
}]);
todoList.constant('HOLA', 400);
todoList.factory('pruebaFactory', function (HOLA) {
  return {
    saludar : () => { console.log("Hola que tal" + HOLA) }
  }
})

todoList.component('todoList', {

    // Para crear la ruta de templateUrl es necesario fijarse la ruta fisica del index.html
    templateUrl: 'src/angular/templates/todoList.html',
    controller : ['$scope','getDatos','pruebaFactory', function ($scope, getDatos, pruebaFactory) {

      this.random = (n) => {
        return Math.floor(Math.random() * n);
      }

      this.checkMaxLength = (name) => {
        const valueInput = this.persona[name].toString() || '';
        const longitud = valueInput.length;
        return (longitud > this.inputLength[name]);
      }

      this.inputLength = {
        nombre: 9,
        id: 5,
        edad: 3
      }

      this.persona = {
        nombre: 'Godofredo',
        edad: this.random(120),
        id: this.random(200)
      }
      this.personas = [];

      this.orderBy = "nombre";
      getDatos.getPersonas( (data) => {
        this.personas = data;
      });
      this.eliminar =  (id) => {

        const indice = this.buscarIndicePersona(id);
        //Borramos el registro
        this.personas.splice(indice, 1);
      }

      this.buscarIndicePersona = (id) => {

        //Obtenemos el indice del array
        for (let i = 0; i < this.personas.length; i++) {
          const persona = this.personas[i];
          if( persona.id === id) {
              return i;
          }
        }
        return -1;
      }

      this.eliminarMenosEste = (id) => {
        this.personas = this.personas.filter( (persona) => {
          return persona.id === id;
        });
      }

      this.insertar = (persona) => {

        // IMPORTANTE :
        // Para poder insertar nuevos datos a través de inputs
        // es necesario crear un nuevo JSON y no pasarle la referencia
        // miarray.push({prop1: 'xx', prop2:'xxxx'}) o bien usando Object.assign o bien {...obj}
        // De lo contrario creariamos un nuevo registro que estaría apuntando a una referencia
        const nuevaPersona = Object.assign({}, persona);
        this.personas.push(nuevaPersona);
      }
      /*
      this.insertar_con_scope = () => {
        console.log($scope)
        // Obtenemos los datos desde la vista
        const { id, nombre, edad } = $scope.persona;
        this.personas.push({id: id, nombre: nombre, edad: edad});

        //Generamos datos aletorio
        $scope.persona = {
          id: this.random(9000),
          edad: this.random(90),
          nombre: 'Godofredo'
        }
      }
      */

      this.hasMinValidLength = () => {
        const MIN_VALUE = 5;
        const lengthValue = this.persona.nombre.length;
        return lengthValue > MIN_VALUE;
      }


    }]
  })
