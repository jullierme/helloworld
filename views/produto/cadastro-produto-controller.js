angular.module('angularjsApp')
    .controller('CadastroProdutoController', CadastroProdutoController);

/*@ngInject*/
function CadastroProdutoController($scope, $stateParams){
    $scope.teste = 'teste cadastro produto';
}