angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $location) {
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

.controller('VideosCtrl', function($scope, VideoService) {
  VideoService.getList().then(function(data){
    $scope.playlists = data;
  });
})

.controller('VideoCtrl', function($scope, $stateParams, VideoService) {
  $scope.id = $stateParams.videoId;
  VideoService.getVideo($scope.id).then(function(data){
    $scope.title = data[0].name;
  });
})

.controller('ListCtrl', function($scope) {
  $scope.title = 'Favoritos';
  $scope.content = [
    { title: 'Video 1', id: 1 },
    { title: 'Video 2', id: 2 },
    { title: 'Video 3', id: 3 },
    { title: 'Video 4', id: 4 },
    { title: 'Video 5', id: 5 },
    { title: 'Video 6', id: 6 }
  ];
});
