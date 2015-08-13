angular.module('angularjsApp')

    .directive('jbCrud', function() {
        return {
            restrict: 'E',
            templateUrl: 'directives/crud/crud.html',
            transclude:true,
            scope:{
                titulo: '@',
                exibirBotaoSalvar: '=?',
                exibirBotaoLimpar: '=?',
                exibirBotaoExcluir: '=?'
            },
            compile: function(element, attrs){
                return {
                    pre: function(scope, element, attrs){
                        if(!angular.isDefined(scope.exibirBotaoSalvar))
                            scope.exibirBotaoSalvar = true;

                        if(!angular.isDefined(scope.exibirBotaoLimpar))
                            scope.exibirBotaoLimpar = true;

                        if(!angular.isDefined(scope.ngDisabled))
                            scope.ngDisabled = true;

                        if(!angular.isDefined(scope.exibirBotaoExcluir))
                            scope.exibirBotaoExcluir = true;

                        scope.classColspan = 'col-sm-'+scope.colspan;
                    },
                    post: function(scope, element, attrs){
                        scope.salvar = function(){
                            scope.$emit('salvar');
                        };

                        scope.limpar = function(){
                            scope.$emit('limpar');
                        };

                        scope.excluir = function(){
                            scope.$emit('excluir');
                        };

                        scope.$on('imprimirMensagem', function(event, data){
                            //bp aqui
                            alert(data.msg);
                        });
                    }
                }
            },
        };
    });


