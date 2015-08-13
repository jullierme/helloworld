angular.module('angularjsApp')

.directive('jbHelloWorld', function() {
    return {
        restrict: 'E',
        template: '<h1>Olá mundo...Essa é minha primeira directive</h1>'
    };
});