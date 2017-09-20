var bookStoreApp = angular.module('bookStoreApp', [
    'ngRoute',
    'ngAnimate',
    'bookStoreCtrls',
    'bookStoreFilters',
    'bookStoreServices',
    'bookStoreDirectives'
]);

bookStoreApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/hello', {
            templateUrl: 'tpls/hello.html',
            controller: 'HelloCtrl',
            template: '这是首页页面'
        })
        .when('/list', {
            templateUrl: 'tpls/bookList.html',
            controller: 'BookListCtrl',
            template: '这里是列表页面'
        })
        .otherwise({
            redirectTo: '/hello'
        })
}]);