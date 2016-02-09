angular.module('ngl.form', [])

.constant('NGL_KEYCODE', {
    ENTER: 13,
    SPACE: 32
})

.directive('nglFormSubmit', function ($parse, NGL_KEYCODE) {
    'use strict';

    var link = function (scope, element, attrs) {
        var submit = function () {
            scope.$apply(function () {
                $parse(attrs.nglFormSubmit)(scope);
            });
         };

        // Pressing enter in a text field
        angular.element(element[0].querySelectorAll('input,textarea'))
        .on('keypress', function (event) {
            if (event.keyCode !== NGL_KEYCODE.ENTER) { return; }
            submit();
        });

        // Pressing space or enter in an input or button with type=submit
        angular.element(element[0].querySelectorAll('[type="submit"]'))
        .on('keypress', function (event) {
            if (event.keyCode !== NGL_KEYCODE.SPACE &&
                event.keyCode !== NGL_KEYCODE.ENTER) { return; }
            submit();
        });

        // Clicking a button or input with type=submit
        angular.element(element[0].querySelectorAll('[type="submit"]'))
        .on('click', submit);
    };

    return {
        link: link
    };
})

.directive('nglFormPassword', function () {
    'use strict';

    var link = function (scope, element, attrs) {
        element.on('focus', function () {
            attrs.$set('type', 'password');
        });
    };

    return {
        link: link
    };
});
