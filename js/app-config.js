/***
 * Module: Local onde são adicionadas as diferentes partes do seu aplicativo
 */
angular.module('angularjsApp', [])

    .controller('IndexController', function($scope){
        $scope.nome = '';

        $scope.myStyle = {};
        $scope.myClass = '';

        $scope.imprimirMensagem = function(){
            alert('OlÁ ' + $scope.nome)
        }

        $scope.$watch('nome', function(newValue, oldValue){
            if(newValue == oldValue)
                return;

            console.log(newValue);

            if(angular.isDefined($scope.nome) && $scope.nome == 'maria'){
                $scope.myStyle.backgroundColor = 'red';
                $scope.myClass = 'green';
            }
            else{
                $scope.myStyle.backgroundColor = 'blue';
                $scope.myClass = 'yellow';
            }


        });
    })
;
