angular.module('angularjsApp')

    .directive('jbInputText', function() {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'directives/input-text/input-text.html',
            scope:{
                ngModel: '=',
                ngRequired: '=?',
                ngDisabled: '=?',

                colspan: '@',
                label:'@',
                exibirLabel: '=?',
                placeholder: '@'
            },
            link: function(scope, element, attrs){
                scope.idAux = scope.$id;

                if(!angular.isDefined(scope.exibirLabel))
                    scope.exibirLabel = true;

                if(!angular.isDefined(scope.ngRequired))
                    scope.ngRequired = false;

                if(!angular.isDefined(scope.ngDisabled))
                    scope.ngDisabled = false;

                if(!angular.isDefined(scope.colspan))
                    scope.colspan = 3;

                scope.classColspan = 'col-sm-'+scope.colspan;
            }
        };
    });