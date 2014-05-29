angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $location, VideoService, VideosLocal) {
  console.log('dafuck');
  VideoService.getList().then(function(data){
    VideosLocal.add(data);
  });
  $scope.width = window.innerWidth;
  $scope.alert = function() {
    console.log('cenas');
  };
  $scope.go = function (path,id) {
    console.log(path);
    $selected = id;
    $location.path(path);
  };
  $scope.fav = [];
})

.controller('VideosCtrl', function($scope, VideosLocal, FavoritesLocal) {

  $scope.playlists = VideosLocal.get();

  $scope.addtoFavs = function(id) {
    FavoritesLocal.add(id.value);
    VideosLocal.remove(id.value);
  };
})

.controller('VideoCtrl', function($scope, $stateParams, VideoService) {
  $scope.id = $stateParams.videoId;
  VideoService.getVideo($scope.id).then(function(data){
    $scope.title = data.name;
  });
})

.controller('ListCtrl', function($scope, VideoService, FavoritesLocal) {
  $scope.title = 'Favoritos';
  $scope.content = [];
  var f = FavoritesLocal.get();
  for (var i = 0; i < f.length; i++) {
    VideoService.getVideo(f[i]).then(function(data){
      $scope.content.push(data);
    });
  }
});
