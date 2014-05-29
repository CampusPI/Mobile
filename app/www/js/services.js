angular.module('app.services', [])

.factory('VideoService', function ($http) {
  return {
    getVideo: function(id) {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/api/web/video/'+id
      }).then(function(response) {
        return response.data;
      });
    },
    getList: function() {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/api/web/videos'
      }).then(function(response) {
        return response.data;
      });
    }
  };
})

.factory('FavoritesService', function ($http) {
  return {
    getFavorites: function(id) {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/api/web/favorites',
        params: {id: id}
      }).then(function(response) {
        return response.data;
      });
    },
    addFavorite: function(userid, videoid) {
      return $http({
        method: 'POST',
        url: 'http://localhost:8080/api/web/favorites',
        data: {userid: userid, videoid: videoid}
      }).then(function(response) {
        return response.data;
      });
    }
  };
});