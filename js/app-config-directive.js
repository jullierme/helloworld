angular.module('angularjsApp', ['ngMaterial'])

    .controller('IndexController', function($scope){
        $scope.entidade = {};

        $scope.$on('salvar', function salvar(){
            alert('clicou em salvar');
        });

        $scope.$on('excluir', function excluir(){
            alert('clicou em excluir');
        });

        $scope.$on('limpar', function limpar(){
            alert('clicou em limpar');
        });

        $scope.onDispararEvento = function(){
            $scope.$broadcast('imprimirMensagem', {msg: 'deu certo!!!!!!!!!!!!!!!!!!'});
        };
    })

app.config(['$compileProvider', function ($compileProvider) {
    // disable debug info
    $compileProvider.debugInfoEnabled(false);
}]);

;