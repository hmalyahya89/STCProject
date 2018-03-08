angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.latest', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/latest.html',
        controller: 'latestCtrl'
      }
    }
  })

  .state('tabsController.search', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('tabsController.favorite', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/favorite.html',
        controller: 'favoriteCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.movieDetails'
      2) Using $state.go programatically:
        $state.go('tabsController.movieDetails');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page5
      /page1/tab2/page5
      /page1/tab3/page5
  */
  .state('tabsController.movieDetails', {
    url: '/page5',
	params: {
		movie_id: "{{movie.id}}"		
},
    views: {
      'tab1': {
        templateUrl: 'templates/movieDetails.html',
        controller: 'movieDetailsCtrl'
      },
      'tab2': {
        templateUrl: 'templates/movieDetails.html',
        controller: 'movieDetailsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/movieDetails.html',
        controller: 'movieDetailsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.similarMovies'
      2) Using $state.go programatically:
        $state.go('tabsController.similarMovies');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page6
      /page1/tab2/page6
      /page1/tab3/page6
  */
  .state('tabsController.similarMovies', {
    url: '/page6',
	params: {
		movie_id: ""		
},
    views: {
      'tab1': {
        templateUrl: 'templates/similarMovies.html',
        controller: 'similarMoviesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/similarMovies.html',
        controller: 'similarMoviesCtrl'
      },
      'tab3': {
        templateUrl: 'templates/similarMovies.html',
        controller: 'similarMoviesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')


});