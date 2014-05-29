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
})

.factory('FavoritesLocal', function ($http) {
  var a = [];
  return {
    add: function(id) {
      a.push(id);
    },
    get: function() {
      return a;
    }
  };
})

.factory('VideosLocal', function ($http) {
  var a = [];
  return {
    add: function(array) {
      a = array;
    },
    remove: function(id) {
      for (var i = 0; i < a.length; i++) {
        if (a[i].id == id) {
          a.splice(i, 1);
          return a;
        }
      }
    },
    get: function() {
      return a;
    }
  };
});