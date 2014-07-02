angular.module('app.services', [])

.factory('MainService', function ($http, endpoint) {
  return {
    getId: function(id) {
      return $http({
        method: 'GET',
        url: endpoint+'/api/tv/schedule'
      }).then(function(response) {
        console.log(id);
        return response.data.filter(function(element){
          console.log(element._id);
          return element._id === id;
        });
      });
    },
    getList: function() {
      return $http({
        method: 'GET',
        url: endpoint+'/api/tv/lastContent'
      }).then(function(response) {
        var a = response.data.reverse().slice(1);
        return a;
      });
    },
  };
})

.factory('NewsService', function ($http, endpoint) {
  return {
    get: function() {
      return $http({
        method: 'GET',
        url: endpoint+'/api/web/news'
      }).then(function(response) {
        console.log(response);
        return response;
      });
    }
  };
})

.factory('EventsService', function ($http, endpoint) {
  return {
    get: function() {
      return $http({
        method: 'GET',
        url: endpoint+'/api/web/biblio'
      }).then(function(response) {
        return response;
      });
    }
  };
})

.factory('VideosService', function ($http, endpoint) {
  return {
    get: function() {
      return $http({
        method: 'GET',
        url: endpoint+'/api/web/videos'
      }).then(function(response) {
        return response;
      });
    }
  };
})

.factory('ContentService', function ($http, endpoint) {
  return {
    get: function(id) {
      console.log(id);
      return $http({
        method: 'GET',
        url: endpoint+'/api/web/content/'+id
      }).then(function(response) {
        return response.data;
      });
    }
  };
})

.factory('UpdateService', function ($http, endpoint) {
  return{
    new: function() {
      return $http({
        method: 'GET',
        url: endpoint+'/api/tv/currentContent'
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
    addFavorite: function(videoid) {
      return $http({
        method: 'POST',
        url: endpoint+'/api/web/favorites',
        headers: {
          'Authorization': 'Bearer '+'109029607727800353127'
        },
        data: {id: videoid}
      }).then(function(response) {
        return response.data;
      });
    },
    removeFavorite: function(id) {
      return $http({
        method: 'DELETE',
        url: endpoint+'/api/web/favorites',
        headers: {
          'Authorization': 'Bearer '+'109029607727800353127'
        },
        data: {id: id}
      }).then(function(response) {
        return response.data;
      });
    },
    isFav: function(id) {
      return $http({
        method: 'GET',
        url: endpoint+'/api/web/favorites',
        headers: {
          'Authorization': 'Bearer '+'109029607727800353127'
        }
      }).then(function(response) {
        console.log(response.data);
        console.log(id);
        return response.data.filter(function(element){
          return element._id === id;
        });
      });
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