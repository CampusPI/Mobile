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
})

.controller('VideosCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Video 1', id: 1 },
    { title: 'Video 2', id: 2 },
    { title: 'Video 3', id: 3 },
    { title: 'Video 4', id: 4 },
    { title: 'Video 5', id: 5 },
    { title: 'Video 6', id: 6 }
  ];
})

.controller('VideoCtrl', function($scope, $stateParams) {
  $scope.id = $stateParams.videoId;
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
