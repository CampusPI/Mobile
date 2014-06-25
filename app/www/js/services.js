angular.module('app.services', [])

.factory('VideoService', function ($http, endpoint) {
  return {
    getVideo: function(id) {
      return $http({
        method: 'GET',
        url: endpoint+'/api/web/video/'+id
      }).then(function(response) {
        return response.data;
      });
    },
    getList: function() {
      return $http({
        method: 'GET',
        url: endpoint+'/api/tv/videos'
      }).then(function(response) {
        return response.data;
      });
    }
  };
})

.factory('FavoritesService', function ($http, endpoint) {
  return {
    getFavorites: function(id) {
      return $http({
        method: 'GET',
        url: endpoint+'/api/web/favorites',
        headers: {
          'Authorization': 'Bearer '+'109029607727800353127'
        },
        params: {
          id: id
        }
      }).then(function(response) {
        return response.data;
      });
    },
    addFavorite: function(userid, videoid) {
      return $http({
        method: 'POST',
        url: endpoint+'/api/web/favorites',
        data: {userid: userid, videoid: videoid}
      }).then(function(response) {
        return response.data;
      });
    }
  };
})

.factory('FavoritesLocal', function ($http, endpoint) {
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

.factory('VideosLocal', function ($http, endpoint) {
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