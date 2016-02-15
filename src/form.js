angular.module('ngl.form', [
  'ngl.gator'
])

.constant('NGL_KEYCODE', {
  ENTER: 13,
  SPACE: 32
})

.directive('nglFormSubmit', function ($injector) {
  'use strict';

  var $parse = $injector.get('$parse');
  var NGL_KEYCODE = $injector.get('NGL_KEYCODE');

  var controller = function ($scope, $element, $attrs) {
    var submitExpr = $parse($attrs.nglFormSubmit);

    var submit = function () {
      $scope.$apply(function () {
        submitExpr($scope);
      });
    };

    $element.gator('keyup', 'input,textarea', function (event) {
      if (event.keyCode === NGL_KEYCODE.ENTER) { submit(); }
    });

    $element.gator('keyup', '[type="submit"]', function (event) {
      if (event.keyCode === NGL_KEYCODE.SPACE) { submit(); }
      if (event.keyCode === NGL_KEYCODE.ENTER) { submit(); }
    });

    $element.gator('click', '[type="submit"]', submit);
  };

  return {
    scope: true,
    controller: controller
  };
})

.directive('nglFormPassword', function () {
  'use strict';

  var controller = function ($element, $attrs) {
    $element.on('focus', function () {
      $attrs.$set('type', 'password');
    });
  };

  return {
    scope: true,
    controller: controller
  };
});
