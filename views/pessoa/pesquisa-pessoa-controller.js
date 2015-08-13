angular.module('angularjsApp')
    .controller('PesquisaPessoaController', PesquisaPessoaController);

/*@ngInject*/
function PesquisaPessoaController($scope, $stateParams){
    $scope.teste = 'teste pesquisa pessoa';
}