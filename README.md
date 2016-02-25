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
  <input ngl-form-input ng-model="user.name" />
  <input ngl-form-input="password" ng-model="user.password" />
  <input ngl-form-input="submit">Submit</button>
</div>
```

Proof of concept
----------------

  * <http://github.com/pfraces-poc/ngl.form.examples>

### How to reproduce "remember password" dialog

**Firefox:**

 1. Fill the fields and click on the "login" button

**Chrome:**

 1. Fill the fields and click on the "login" button
 2. Refresh the page

API
---

### `<ngl-form="expr">`

It is a replacement to the `<form>` element.

Its controller exposes a method evaluating `expr` when called

### `<ngl-form-input="type">`

Requires a `<ngl-form>` as ancestor element and uses its exposed controller
method when the right events are fired from the element depending on `type`

**Available types:**

  * `text` _(default)_ is a replacement to `type="text"`

  * `password` is a replacement to `type="password"`.
    Sets the `type="password"` attribute once focused preventing the browser to
    detect it as a password input

  * `"submit"` is a replacement to `type="submit"`.

**Events causing form submission:**

  * Pressing enter in a text field
  * Pressing space or enter in an input or button with `type=submit`
  * Clicking a button or input with `type=submit`

References
----------

  * <http://stackoverflow.com/questions/32369/disable-browser-save-password-functionality>
  * <https://github.com/angular/angular.js/issues/2513#issuecomment-29454622>
  * <https://github.com/mcpDESIGNS/ngForm-handle-Enter-Keypress/blob/master/ngFormFixes.directive.js>
