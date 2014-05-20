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
  return {
    // Other directive stuff ...

    link: function($scope, $element, $attr) {

      var width;

      $ionicGesture.on('dragstart', function(e) {
        doDragStart(e);
        console.log('start');
      }, $element);

      $ionicGesture.on('drag', function(e) {
        doDrag(e);
        console.log('drag');
      }, $element);

      $ionicGesture.on('dragend', function(e) {
        doDragEnd(e);
        console.log('end');
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

      /*

    _doDrag: function(e) {
      var o = e.gesture.deltaY / 3;

      this.rotationAngle = Math.atan(o/this.touchDistance) * this.rotationDirection;

      if(e.gesture.deltaY < 0) {
        this.rotationAngle = 0;
      }

      this.y = this.startY + (e.gesture.deltaY * 0.4);

      this.el.style[ionic.CSS.TRANSFORM] = 'translate3d(' + this.x + 'px, ' + this.y  + 'px, 0) rotate(' + (this.rotationAngle || 0) + 'rad)';
    },
    _doDragEnd: function(e) {
      this.transitionOut(e);
    }
  });
      */

    }
  };
});