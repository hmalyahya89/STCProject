

var app = angular.module('Movies', []);

app.factory('Movies', function ($http) {
    var baseUrl = 'https://api.themoviedb.org/3';
    var apiKey = 'api_key=055eef61f93dcfa56c85dca2d374a305';
    var favoriteMovies = [];

    function searchMovies(keyword, callback) {
        var mode = '/search/movie?',
            query = '&query=' + encodeURI(keyword);

        $http.get(baseUrl + mode + apiKey + query).success(function (data) {
            callback(data.results);
        });
    }

    function getLatestMovie(callback) {
        var mode = '/movie/latest?';

        $http.get(baseUrl + mode + apiKey).success(function (data) {
            callback(data);
        });
    }

    function getMovie(id, callback) {
        console.log("Movie ID: " + id);
        var mode = '/movie/' + id + '?';

        $http.get(baseUrl + mode + apiKey).success(function (data) {
            callback(data);
        });
    }

    function getSimilarMovies(id, callback) {
        var mode = '/movie/' + id + '/similar?';

        $http.get(baseUrl + mode + apiKey).success(function (data) {
            callback(data.results);
        });
    }

    function inFavoriteList(id) {
        var results = favoriteMovies.filter(function (m) {
                    console.log("id: " + id);
                    console.log("m.id: " + m.id);
                                        console.log(m.id == id);

            return m.id == id;
        });

        if (results.length === 0) {
            return false;
        } else {
            return true;
        }
    }
    
    function addToFavoriteList(movie) {
        favoriteMovies.push(movie);
    }
    
    function removeFromFavoriteList(movie) {
        id = movie.id 
        
        favoriteMovies = favoriteMovies.filter(function(movie) {
            return movie.id != id;
        });
    }
    
    function getFavoriteList() {
        return favoriteMovies;
    }

    function externalLinks(id, callback) {
        var mode = '/movie/' + id + '/external_ids?';

        $http.get(baseUrl + mode + apiKey).success(function (data) {
            callback(data);
        });
    }

    return {
        removeFromFavoriteList: removeFromFavoriteList,
        addToFavoriteList: addToFavoriteList,
        inFavoriteList: inFavoriteList,
        list: searchMovies,
        latest: getLatestMovie,
        find: getMovie,
        findSimilar: getSimilarMovies,
        getFavoriteList: getFavoriteList,
        externalLinks: externalLinks
    };
});

