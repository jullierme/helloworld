angular.module('angularjsApp')
    .controller('PesquisaProdutoController', PesquisaProdutoController);

/*@ngInject*/
function PesquisaProdutoController($scope, $stateParams){
    $scope.teste = 'teste pesquisa produto';
}