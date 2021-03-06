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
      }
      else {
        $element.attr('style', '-webkit-transition:all .2s linear;');
      }
    }
  };
});