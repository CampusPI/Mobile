angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $location, $interval, MainService, UpdateService, VideosLocal, $timeout) {

  $scope.width = window.innerWidth;

  $scope.go = function (path,id) {
    console.log(path);
    $selected = id;
    $location.path(path);
  };
  $scope.fav = [];

  var apdete = function() {
    UpdateService.new().then(function(data) {
      if (JSON.stringify($scope.new) !== JSON.stringify(data[0])) {
        $scope.new = data[0];
        // console.log($scope.new);
      }
    });
    MainService.getList().then(function(data) {
      $scope.playlists = data;
      // console.log(data);
      $scope.imgDef= 'http://www.fct.unl.pt/sites/default/files/imagens/noticias/noticias.jpg';
    });
  };

  apdete();

  $interval(apdete,10000);

  $scope.cext = function(url) {
    console.log(url);
    window.open(encodeURI(url), '_system', 'location=yes');
    return false;
  };

})

.controller('MainCtrl', function($scope, FavoritesService) {

  $scope.addtoFavs = function(cenas) {
    console.log(cenas);
    FavoritesService.addFavorite(cenas.value);
  };

})

.controller('NewsCtrl', function($scope, $stateParams, NewsService) {

  NewsService.get().then(function(data) {
    $scope.news = data.data;
  });

})

.controller('EventsCtrl', function($scope, $stateParams, EventsService) {

  EventsService.get().then(function(data) {
    $scope.events = data.data;
  });

})

.controller('VideosCtrl', function($scope, $stateParams, VideosService) {

  VideosService.get().then(function(data) {
    $scope.videos = data.data;
  });

})

.controller('ContentCtrl', function($scope, $stateParams, ContentService, FavoritesService) {
  $scope.id = $stateParams.id;
  ContentService.get($scope.id).then(function(data) {
    console.log(data);
    $scope.data = data;
  });
  
  var isfav = function () {
    FavoritesService.isFav($scope.id).then(function(res){
      if (res.length > 0) {
        $scope.isFav = true;
      }
      else {
        $scope.isFav = false;
      }
    });
  };

  isfav();

  $scope.rem = function(id) { FavoritesService.removeFavorite(id).then(function(res) { isfav(); }); };
  $scope.add = function(id) { FavoritesService.addFavorite(id).then(function(res) { isfav(); }); };
})


.controller('ListCtrl', function($scope, FavoritesService) {
  FavoritesService.getFavorites($scope.id).then(function(data){
    $scope.content = data;
  });

  $scope.title = 'Favoritos';
});
