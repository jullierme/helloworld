angular.module('angularjsApp')
    .controller('CadastroPessoaController', CadastroPessoaController);

/*@ngInject*/
function CadastroPessoaController($scope, $stateParams){
    $scope.teste = 'cadastro pessoa' + $stateParams.id;
}