angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $location) {
  $scope.width = window.innerWidth;
  $scope.alert = function() {
    console.log('cenas');
  };
  $scope.go = function (path,id) {
    $selected = id;
    $location.path(path);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Video 1', id: 1 },
    { title: 'Video 2', id: 2 },
    { title: 'Video 3', id: 3 },
    { title: 'Video 4', id: 4 },
    { title: 'Video 5', id: 5 },
    { title: 'Video 6', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  $scope.id = $stateParams.videoId;
});
