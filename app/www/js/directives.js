angular.module('starter.directives', [])

.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  };
})

.directive('swipetowin', function($ionicGesture) {
  return function($scope, $element, $attr) {

    var width;

    $ionicGesture.on('dragstart', function(e) {
      doDragStart(e);
    }, $element);

    $ionicGesture.on('drag', function(e) {
      doDrag(e);
    }, $element);

    $ionicGesture.on('dragend', function(e) {
      doDragEnd(e);
    }, $element);

    function doDragStart(e) {
      width = $element[0].offsetWidth;
      initTouch = (e.gesture.touches[0].pageX);
    }

    function doDrag(e) {
      if (e.gesture.deltaX > 0)
        $element.attr('style', '-webkit-transform: translate3d(' + e.gesture.deltaX + 'px, ' + '0, 0);');
    }

    function doDragEnd(e) {
      if (e.gesture.deltaX > width/4) {
        $element.addClass('animated slideOutRight');
        setTimeout(function(){$element.parent().addClass("animated fadeOutUp");}, 500);
        setTimeout(function(){$element.parent().remove();}, 700);
        $scope.addtoFavs($element[0].attributes.swipetowin);
      }
      else {
        $element.attr('style', '-webkit-transition:all .2s linear;');
      }
    }
  };
})

.directive('youtube', function() {
  return function (scope, element) {
    scope.$watch('id', function() {
      var el = '<iframe id="vidz" src="http://www.youtube.com/embed/'+scope.data.videoId+'?end=100&modestbranding=0&autoplay=1&showinfo=0&enablejsapi=1&version=3&rel=0" frameborder="0"></iframe>';
      element.html('').append(el);
    });
  };
})

.directive('lf', function() {
  return function (scope, element, attrs) {
    console.log(element);
    var a = element.children();
    for (var i = 0; i < a.length; i++) {
      angular.element(a[i]).bind('click', function(a) {
        var url =this.attributes.bref.value;
        url = 'http://facebook.com/sharer.php?u=' + scope.data.link;
        window.open(url, '_system', 'location=yes');
      });
    }
  };
});
