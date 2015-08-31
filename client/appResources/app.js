var app = angular.module('story',['ngRoute']);


app.config(function($routeProvider,$locationProvider) {
        $routeProvider

            // route for the home page
            .when('/story/:id', {
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


app.controller('indexController', function($scope,$http,$location,$routeParams){

        
        $scope.goToAddStory = function(){
            $location.path('/add');
        };

        $scope.goToStory = function(story){
           $scope.getStory = story._id;
           $scope.storyID = '/story/'+$scope.getStory;
           console.log($scope.storyID);
            $location.path($scope.storyID);

    };

});


app.controller('storyController', function($scope,$http,$rootScope,$routeParams){

  storyID = '/sex/'+$routeParams.id;

  console.log(storyID);

  $scope.waiting = true;

    $http.get(storyID).success(function(data){

        console.log(data);
        $scope.waiting = false;

        $scope.title = data;

        }).error(function(data){

        });
    
});

app.controller('homeController', function($scope,$http,$location,$rootScope,$routeParams){

        $scope.waiting = true;
        $http.get('/storyList').success(function(data){
            console.log(data);
            $scope.waiting = false;
            $scope.stories = data;

        }).error(function(data){

        });

        

})

app.controller('addController', function($scope,$http){
    $scope.story = {}
    $scope.valid = true;
    $scope.postStory = function(){

           console.log($scope.story.name);

           if ($scope.story.name === null || angular.isUndefined($scope.story.name)) {
                 $scope.valid = false;
           }
           else
           if ($scope.story.content === null || angular.isUndefined($scope.story.content)) {
                 $scope.valid = false;
           }else{
                 $scope.valid = true;
                 console.log($scope.valid);
           }

        if( $scope.valid ){
            $scope.waiting = true;
            $http.post('/postData', $scope.story).success(function(data){
                console.log(data);
                $scope.waiting = false;
                $scope.story = null; 
            }).error(function(data){
    
            })
        }
    }
});

app.controller('errorController', function($scope){

});

