Form directives
===============

Mimic `<form>` behavior wihtout using the `<form>` tag, allowing to create forms
without native autocompletion support

Usage
-----

Two directives are required to prevent the browsers from showing the
_"remember password"_ dialog: `<submit>` and `<password>`

```html
<div submit="login(user)">
  <input type="text" ng-model="user.name" />
  <input password ng-model="user.password" />
</div>
```

`<submit>` adds key and click handlers to its child inputs. Its a
replacement to the `<form>` element

`<password>` changes the type of the input to password once the input has
focus, so the browser cannot detect it as password. Its a replacement to
`type="password"` attribute

### Avoid `ng-if` in fields

This directive creates bindings on its children so you need to preserve them
in the DOM. To control element visibility use `ng-show` instead

Events causing form submission
------------------------------

  * Pressing enter in a text field
  * Pressing space or enter in an input or button with `type=submit`
  * Clicking a button or input with `type=submit`

How to reproduce autocompletion dialog
--------------------------------------

Proof of concept at: <http://plnkr.co/edit/tSE2wq?p=preview>

### Firefox

 1. Fill the fields and click on the "login" button

### Chrome

 1. Fill the fields and click on the "login" button
 2. If the page has not changed its url, refresh the page

References
----------

  * <http://stackoverflow.com/questions/32369/disable-browser-save-password-functionality>
  * <https://github.com/angular/angular.js/issues/2513#issuecomment-29454622>
  * <https://github.com/mcpDESIGNS/ngForm-handle-Enter-Keypress/blob/master/ngFormFixes.directive.js>
  * <https://css-tricks.com/snippets/javascript/javascript-keycodes/>
