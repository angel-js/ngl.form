ngl.form
========

Angular 1.x directives to avoid "remember password" dialog

Mimic `<form>` behavior wihtout using the `<form>` tag, allowing to create forms
without native autocompletion support

Install
-------

    bower install ngl.form

Include the sources

```html
<script src="bower_components/gator/gator.js"></script>
<script src="bower_components/ngl.gator/src/gator.js"></script>
<script src="bower_components/ngl.form/src/form.js"></script>
```

Add `ngl.form` to your app dependencies

```js
angular.module('app', [
  'ngl.form'
]);
```

Usage
-----

```html
<div ngl-form="login(user)">
  <input type="text" ng-model="user.name" />
  <input ngl-form-password ng-model="user.password" />
  <button ngl-form-submit>Submit</button>
</div>
```

`<ngl-form="callback()">` is a replacement to the `<form>` element.
Evals `expr` when the proper events are emitted from its child inputs

`<ngl-form-password>` is a replacement to `type="password"` attribute.
It changes the type of the input to password once the input gets focus,
preventing the browser to detect it as a password input

`<ngl-form-submit>` attribute is a replacement to `type="submit"`.
It is not a registered directive: `<ngl-form>` will listen to events from
elements having `ngl-form-submit` attribute

Proof of concept
----------------

  * <http://plnkr.co/edit/tSE2wq?p=preview>
  * <http://github.com/pfraces-poc/ngl.form.examples>

How to reproduce "remember password" dialog
-------------------------------------------

### Firefox

 1. Fill the fields and click on the "login" button

### Chrome

 1. Fill the fields and click on the "login" button
 2. Refresh the page

Events causing form submission
------------------------------

  * Pressing enter in a text field
  * Pressing space or enter in an input or button with `type=submit`
  * Clicking a button or input with `type=submit`

References
----------

  * <http://stackoverflow.com/questions/32369/disable-browser-save-password-functionality>
  * <https://github.com/angular/angular.js/issues/2513#issuecomment-29454622>
  * <https://github.com/mcpDESIGNS/ngForm-handle-Enter-Keypress/blob/master/ngFormFixes.directive.js>
