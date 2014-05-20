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
      $element.attr('style', '-webkit-transform: translate3d(' + e.gesture.deltaX + 'px, ' + '0, 0)');
    }

    function doDragEnd(e) {
      $element.attr('style', '-webkit-transition:all .2s linear;');
    }
  };
});