parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TSA1":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";require("./styles");var e={listItemCash:document.querySelector(".list-item.cash"),listItemCard:document.querySelector(".list-item.card"),inputCash:document.querySelector("#cash"),inputCard:document.querySelector("#card"),listItemTakeAway:document.querySelector(".list-item.delivery-type-takeAway"),listItemCourier:document.querySelector(".list-item.delivery-type-courier"),listItemNewPostDepartment:document.querySelector(".list-item.delivery-type-newPostDepartment"),listItemNewPostCourier:document.querySelector(".list-item.delivery-type-newPostCourier"),inputTakeAway:document.querySelector("#takeAway"),inputCourier:document.querySelector("#courier"),inputNewPostDepartment:document.querySelector("#newPostDepartment"),inputNewPostCourier:document.querySelector("#newPostCourier"),validationForm:document.querySelector(".validation-form"),submitBtn:document.querySelector(".submitBtn"),formInput:document.querySelectorAll(".form-input")};function t(t){var s=t.target;switch(s.id){case"cash":e.listItemCash.classList.add("chosen"),e.listItemCard.classList.remove("chosen");break;case"card":e.listItemCard.classList.toggle("chosen"),e.listItemCash.classList.remove("chosen")}console.log(s)}function s(t){switch(t.target.id){case"newPostDepartment":e.listItemNewPostDepartment.classList.add("chosen"),e.listItemNewPostCourier.classList.remove("chosen"),e.listItemCourier.classList.remove("chosen"),e.listItemTakeAway.classList.remove("chosen");break;case"newPostCourier":e.listItemNewPostCourier.classList.add("chosen"),e.listItemNewPostDepartment.classList.remove("chosen"),e.listItemCourier.classList.remove("chosen"),e.listItemTakeAway.classList.remove("chosen");break;case"courier":e.listItemCourier.classList.add("chosen"),e.listItemTakeAway.classList.remove("chosen"),e.listItemNewPostDepartment.classList.remove("chosen"),e.listItemNewPostCourier.classList.remove("chosen");break;case"takeAway":e.listItemTakeAway.classList.add("chosen"),e.listItemCourier.classList.remove("chosen"),e.listItemNewPostDepartment.classList.remove("chosen"),e.listItemCourier.classList.remove("chosen")}}function r(t){for(var s=0;s<e.formInput.length;s++)e.formInput[s].value||(e.formInput[s].setAttribute("placeholder","Это поле должно быть заполнено"),e.formInput[s].style.borderColor="red")}e.inputCash.addEventListener("change",t),e.inputCard.addEventListener("change",t),e.inputNewPostDepartment.addEventListener("change",s),e.inputNewPostCourier.addEventListener("change",s),e.inputCourier.addEventListener("change",s),e.inputTakeAway.addEventListener("change",s),e.validationForm.addEventListener("submit",r);
},{"./styles":"TSA1"}]},{},["Focm"], null)
//# sourceMappingURL=/src.42526bd6.js.map