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

.controller('VideosCtrl', function($scope, VideoService) {

  VideoService.getList().then(function(data){
    $scope.playlists = data;
  });

  $scope.addtoFavs = function(cenas) {
    console.log(cenas);
  };

})

.controller('VideoCtrl', function($scope, $stateParams, VideoService) {
  $scope.id = $stateParams.videoId;
  VideoService.getVideo($scope.id).then(function(data){
    $scope.title = data.name;
  });
})

.controller('ListCtrl', function($scope, FavoritesService, FavoritesLocal) {

  FavoritesService.getFavorites($scope.id).then(function(data){
    console.log(data);
    $scope.content = data;
  });

  $scope.title = 'Favoritos';
  /*$scope.content = [];
  var f = FavoritesLocal.get();
  for (var i = 0; i < f.length; i++) {
    VideoService.getVideo(f[i]).then(function(data){
      $scope.content.push(data);
    });
  }*/
});
