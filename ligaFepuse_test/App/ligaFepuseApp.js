var vLaboralApp = angular.module('vLaboralApp', ['ngResource', 'ngMdIcons', 'ui.router', 'ngCookies', 'ngTable',
  'ngSanitize', 'ngAnimate', 'ngAria', 'ct.ui.router.extras', 'angular-loading-bar', 'daypilot', 'LocalStorageModule', 'angular-jwt', 'ngMaterial', 
  'oc.lazyLoad', 'ng-mfb', 'ngAutocomplete', 'angular-input-stars'])
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $stickyStateProvider, cfpLoadingBarProvider) {
        $stateProvider
        .state('equipos', {
            abstract: true,
            url: '/equipos',
            views: {
                '': {
                    templateUrl: ''
                },
                'aside': {
                    templateUrl: ''
                },
                'content': {
                    templateUrl: ''
                }
            }
        })

        .state('equipos.carga')

    })