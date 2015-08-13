angular.module('angularjsApp', ['ngMessages', 'ui.growl'])

    .controller('BootstrapController', function($scope, $growl){
        $scope.pessoa = {};
        $scope.pessoas = [];

        $scope.msgValidacao = undefined;

        $scope.salvar = function(){
            if($scope.myForm.$invalid) {
                $growl.box("Atenção", "Erros encontrados no formuário.", {
                    class: 'warning',
                    timeout: 4000
                }).open();

                return;
            }

            if($scope.pessoas.indexOf($scope.pessoa) == -1)
                $scope.pessoas.push($scope.pessoa);

            $growl.box("Ok", "Registro salvo com sucesso", {
                class: 'sucess',
                timeout: 4000
            }).open();

            $scope.limpar();
        }

        $scope.limpar = function(){
            $scope.pessoa = {};
            $scope.myForm.$pristine = true;
        }

        $scope.excluir = function(){
            $scope.pessoas.splice($scope.pessoas.indexOf($scope.pessoa),1);

            $scope.limpar();
        }

        $scope.editar = function(pessoa){
            $scope.pessoa = pessoa;
        }
    })

    .controller('BootstrapTableController', function ($scope){
        $scope.carros = [
            {nome:'Gol', cor:'black', marca:'Volks'},
            {nome:'Palio', cor:'red', marca:'Fiat'},
            {nome:'Uno', cor:'black', marca:'Fiat'},
            {nome:'HB20', cor:'white', marca:'Hyundai'},
            {nome:'Gol', cor:'black', marca:'Volks'},
            {nome:'Palio', cor:'red', marca:'Fiat'},
            {nome:'Uno', cor:'black', marca:'Fiat'},
            {nome:'HB20', cor:'white', marca:'Hyundai'},
            {nome:'Gol', cor:'black', marca:'Volks'},
            {nome:'Palio', cor:'red', marca:'Fiat'},
            {nome:'Uno', cor:'black', marca:'Fiat'},
            {nome:'HB20', cor:'white', marca:'Hyundai'},
            {nome:'Gol', cor:'black', marca:'Volks'},
            {nome:'Palio', cor:'red', marca:'Fiat'},
            {nome:'Uno', cor:'black', marca:'Fiat'},
            {nome:'HB20', cor:'white', marca:'Hyundai'}
        ];
    })



;