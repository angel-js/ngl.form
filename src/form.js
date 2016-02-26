angular.module('ngl.form', [])

.constant('NGL_KEYCODE', {
  ENTER: 13,
  SPACE: 32
})

.directive('nglForm', function ($injector) {
  'use strict';

  var $parse = $injector.get('$parse');

  var controller = function ($scope, $element, $attrs) {
    var expr = $parse($attrs.nglForm);

    var submit = function (event) {
      event.preventDefault();
      event.stopPropagation();

      $scope.$apply(function () {
        expr($scope);
      });
    };

    return {
      submit: submit
    };
  };

  return {
    scope: true,
    controller: controller
  };
})

.directive('nglFormInput', function ($injector) {
  'use strict';

  var $timeout = $injector.get('$timeout');
  var NGL_KEYCODE = $injector.get('NGL_KEYCODE');

  var controller = function ($element, $attrs) {
    var nglFormController = $element.controller('nglForm');
    var submit = nglFormController.submit;
    var type = $attrs.nglFormInput || 'text';

    var setType = function () { $attrs.$set('type', type); };

    if (type === 'password') { $timeout(setType); }
    else { setType(); }

    $element.on('keydown', function (event) {
      if (event.keyCode === NGL_KEYCODE.ENTER) { submit(event); }
    });

    if (type === 'submit') {
      $element.on('keyup', function (event) {
        if (event.keyCode === NGL_KEYCODE.SPACE) { submit(event); }
      });

      $element.on('click', submit);
    }
  };

  return {
    scope: true,
    require: '^nglForm',
    controller: controller
  };
});
