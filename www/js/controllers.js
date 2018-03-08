angular.module('app.controllers', [])
  
.controller('latestCtrl', ['$scope', '$stateParams', 'Movies', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Movies) {
    Movies.latest(function(movie) {
        $scope.movie = movie;
    });
}
])
   
.controller('searchCtrl', ['$scope', '$stateParams', 'Movies', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Movies) {

    $scope.movie = {
        name: ''
    }
    

var db = null;

document.addEventListener('deviceready', function() {
  db = window.sqlitePlugin.openDatabase({name: 'demo.db', location: 'default'});
        console.log('vvvvhjhvjhgjhgjhgjhgjhgjhg');
});

    $scope.searchMovieDB = function() {
        Movies.list($scope.movie.name, function(movies){
            $scope.movies = movies;
        })
    };

}
])
   
.controller('favoriteCtrl', ['$scope', '$stateParams', 'Movies', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Movies) {
    $scope.movies = Movies.getFavoriteList();
}
])
      
.controller('movieDetailsCtrl', ['$scope', '$stateParams', 'Movies', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Movies) {
    var movie_id;

    if ($stateParams.movie_id === "{{movie.id}}" || $stateParams.movie_id === null || $stateParams.movie_id ===  undefined) {
        movie_id = 9360;
    } else {
        movie_id = $stateParams.movie_id;
    }
    

    Movies.find(movie_id, function (movie) {
        $scope.movie = movie;
    });

    $scope.addToFavoriteList = function () {
        Movies.addToFavoriteList($scope.movie);
        $scope.isFavorite = !$scope.isFavorite;
    };

    $scope.notInFavoriteList = function () {
        return !Movies.inFavoriteList(movie_id);
    };

    $scope.removeFromFavoriteList = function () {
        Movies.removeFromFavoriteList($scope.movie);
        $scope.isFavorite = !$scope.isFavorite;
    };

    $scope.isInFavoriteList = function () {
        return Movies.inFavoriteList(movie_id);
    };
    
    $scope.isFavorite = Movies.inFavoriteList(movie_id);
    
    Movies.externalLinks(movie_id, function(data) {
        console.log(data);
        $scope.externalLinks = data;
    });
}
])
   
.controller('similarMoviesCtrl', ['$scope', '$stateParams', 'Movies', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Movies) {
    Movies.findSimilar($stateParams.movie_id, function(movies) {
        $scope.movies = movies;
    });
}
])
 