angular.module('ngl.form', [
  'ngl.gator'
])

.constant('NGL_KEYCODE', {
  ENTER: 13,
  SPACE: 32
})

.directive('nglForm', function ($injector) {
  'use strict';

  var $parse = $injector.get('$parse');
  var NGL_KEYCODE = $injector.get('NGL_KEYCODE');

  var controller = function ($scope, $element, $attrs) {
    var submitExpr = $parse($attrs.nglForm);

    var submit = function () {
      $scope.$apply(function () {
        submitExpr($scope);
      });

      return false; // gator preventDefault and stopPropagation
    };

    $element.gator('keydown', 'input', function (event) {
      if (event.keyCode === NGL_KEYCODE.ENTER) { return submit(); }
    });

    $element.gator('keydown', '[ngl-form-submit]', function (event) {
      if (event.keyCode === NGL_KEYCODE.ENTER) { return submit(); }
    });

    $element.gator('keyup', '[ngl-form-submit]', function (event) {
      if (event.keyCode === NGL_KEYCODE.SPACE) { return submit(); }
    });

    $element.gator('click', '[ngl-form-submit]', submit);
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
