angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $location, $interval, VideoService, UpdateService, VideosLocal) {

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
      }
    });
    VideoService.getList().then(function(data) {
      $scope.playlists = data;
      $scope.imgDef= 'http://www.fct.unl.pt/sites/default/files/imagens/noticias/noticias.jpg';
    });
  };

  apdete();

  $interval(apdete,10000);

})

.controller('VideosCtrl', function($scope, VideoService, FavoritesService) {

  $scope.addtoFavs = function(cenas) {
    FavoritesService.addFavorite(cenas.value);
  };

})

.controller('VideoCtrl', function($scope, $stateParams, VideoService) {
  $scope.id = $stateParams.videoId;
  VideoService.getId($scope.id).then(function(data) {
    $scope.data = data[0];
    console.log($scope.data);
  });
})

.controller('ListCtrl', function($scope, FavoritesService) {
  FavoritesService.getFavorites($scope.id).then(function(data){
    console.log(data);
    $scope.content = data;
  });

  $scope.title = 'Favoritos';
});
