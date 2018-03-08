var app = angular.module('Sessions',[])

app.factory('Sessions', function($http) {
    var baseUrl = 'https://api.themoviedb.org/3';
    var apiKey = 'api_key=055eef61f93dcfa56c85dca2d374a305';
    var guestSessionId;

    function createSession() {
        if (guestSessionId != null) {
            var endpoint = '/authentication/guest_session/new?';
            var url = baseUrl + endpoint + apiKey;
    
            $http.get(url).success(function(data) {
                guestSessionId =  data.guest_session_id;
            });
        }
        
        console.log(guestSessionId);
    }
    
    return {
        create: createSession
    };
});