angular.module('angularjsApp', ['ngMaterial', 'ui.router', 'oc.lazyLoad'])

    .config(/*@ngInject*/function($stateProvider, $urlRouterProvider){

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html'
            })
            .state('pessoa', {
                abstract:true,
                url:'/pessoa',
                template: '<ui-view/>'
            })
            .state('pessoa.cadastro', {
                url: '/cadastro/:id',
                templateUrl: 'views/pessoa/cadastro-pessoa.html',
                resolve: {
                    /* @ngInject */
                    deps: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: [
                                'views/pessoa/cadastro-pessoa-controller.js'
                            ]
                        });
                    }
                }
            })
            .state('pessoa.pesquisa', {
                url: '/pesquisa',
                templateUrl: 'views/pessoa/pesquisa-pessoa.html',
                resolve: {
                    /* @ngInject */
                    deps: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: [
                                'views/pessoa/pesquisa-pessoa-controller.js'
                            ]
                        });
                    }
                }
            })
            .state('produto', {
                url: '/produto',
                templateUrl: 'views/produto/cadastro-produto.html',
                resolve: {
                    /* @ngInject */
                    deps: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: [
                                'views/produto/cadastro-produto-controller.js'
                            ]
                        });
                    }
                }
            })
            .state('produto.pesquisa', {
                url: '/pesquisa',
                templateUrl: 'views/produto/pesquisa-produto.html',
                resolve: {
                    /* @ngInject */
                    deps: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: [
                                'views/produto/pesquisa-produto-controller.js'
                            ]
                        });
                    }
                }
            });

        $urlRouterProvider.otherwise("/home");
    })
    /*@ngInject*/
    .controller('MaterialController', function($scope, $mdSidenav){

        $scope.close = function () {
            $mdSidenav('left').close();
        };

        $scope.open = function(){
            $mdSidenav('left').toggle();
        }

    })
;