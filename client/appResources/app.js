var app = angular.module('story',['ngRoute']);


app.config(function($routeProvider,$locationProvider) {
        $routeProvider

            // route for the home page
            .when('/story', {
                templateUrl : '../views/story.html',
                controller  : 'storyController'
            })
            .when('/', {
                templateUrl : '../views/home.html',
                controller  : 'homeController'
            })
            .when('/add', {
                templateUrl : '../views/addStory.html',
                controller  : 'addController'
            })
            .when('/404', {
                templateUrl : 'views/404.html',
                controller  : 'errorController'
            })
            .otherwise({redirectTo:'/404'});
            
            $locationProvider.html5Mode(true);

        });


app.controller('indexController', function($scope,$http,$location){

        $scope.goToStory = function(){
            $location.path('/story');
        };
        $scope.goToAddStory = function(){
            $location.path('/add');
        };
});


app.controller('storyController', function($scope){

    console.log("inside story Controller");

    $http.get('/story').success(function(data){
            console.log(data);

            $scope.storyValue = data;

        }).error(function(data){

        })

    //$scope.stories = {name:'bhabhi ko choda',content:'sdfgsdfgsdfgsdfgsdfgsdfgdsfgsdfgsdf s fgsadg sadg sad safdas fds adf sadfas fd'}
    $scope.title = $scope.storyValue.name;
    $scope.content = $scope.storyValue.content;
});

app.controller('homeController', function($scope,$http){

        $http.get('/storyList').success(function(data){
            console.log(data);

            $scope.stories = data.name;

        }).error(function(data){

        })
})

app.controller('addController', function($scope,$http){
    $scope.story = {}
    $scope.postStory = function(){

           console.log($scope.story);
        $http.post('/postData', $scope.story).success(function(data){
            console.log(data);

        }).error(function(data){

        })
    }
});

app.controller('errorController', function($scope){

});
