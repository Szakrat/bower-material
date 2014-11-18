/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.5.1-master-8458926
 */
goog.provide('ng.material.components.textField');
goog.require('ng.material.core');
!function(){"use strict";function t(t,e,n){return{restrict:"E",replace:!0,scope:{fid:"@?mdFid",label:"@?",value:"=ngModel"},compile:function(i,u){return angular.isUndefined(u.mdFid)&&(u.mdFid=e.nextUid()),{pre:function(t,e,i){var u=n(i.ngDisabled);t.isDisabled=function(){return u(t.$parent)},t.inputType=i.type||"text"},post:t}},template:'<md-input-group tabindex="-1"> <label for="{{fid}}" >{{label}}</label> <md-input id="{{fid}}" ng-disabled="isDisabled()" ng-model="value" type="{{inputType}}"></md-input></md-input-group>'}}function e(){return{restrict:"CE",controller:["$element",function(t){this.setFocused=function(e){t.toggleClass("md-input-focused",!!e)},this.setHasValue=function(e){t.toggleClass("md-input-has-value",e)}}]}}function n(){return{restrict:"E",replace:!0,template:"<input >",require:["^?mdInputGroup","?ngModel"],link:function(t,e,n,i){function u(t){return t=angular.isUndefined(t)?e.val():t,angular.isDefined(t)&&null!==t&&""!==t.toString().trim()}if(i[0]){var a=i[0],r=i[1];t.$watch(t.isDisabled,function(t){e.attr("aria-disabled",!!t),e.attr("tabindex",!!t)}),e.attr("type",n.type||e.parent().attr("type")||"text"),r&&r.$formatters.push(function(t){return a.setHasValue(u(t)),t}),e.on("input",function(){a.setHasValue(u())}).on("focus",function(){a.setFocused(!0)}).on("blur",function(){a.setFocused(!1),a.setHasValue(u())}),t.$on("$destroy",function(){a.setFocused(!1),a.setHasValue(!1)})}}}}angular.module("material.components.textField",["material.core"]).directive("mdInputGroup",e).directive("mdInput",n).directive("mdTextFloat",t),t.$inject=["$mdTheming","$mdUtil","$parse"],n.$inject=["$mdUtil"]}();