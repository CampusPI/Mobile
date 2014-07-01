angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $location, VideoService, VideosLocal) {

  $scope.width = window.innerWidth;

  $scope.go = function (path,id) {
    console.log(path);
    $selected = id;
    $location.path(path);
  };
  $scope.fav = [];

})

.controller('VideosCtrl', function($scope, VideoService, FavoritesService) {

  VideoService.getList().then(function(data){
    $scope.playlists = data;
  });

  $scope.addtoFavs = function(cenas) {
    FavoritesService.addFavorite(cenas.value);
  };

})

.controller('VideoCtrl', function($scope, $stateParams, VideoService) {
  $scope.id = $stateParams.videoId;
  VideoService.getVideo($scope.id).then(function(data){
    $scope.title = data.name;
  });
})

.controller('ListCtrl', function($scope, FavoritesService) {
  FavoritesService.getFavorites($scope.id).then(function(data){
    console.log(data);
    $scope.content = data;
  });

  $scope.title = 'Favoritos';
});
