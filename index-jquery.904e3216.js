parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"X3xw":[function(require,module,exports) {
"use strict";function e(){$('.payment-form input[type="radio"]').on("click",function(){$("input.cash:checked").val()?($(".cashRadioBtn").addClass("chosen"),$(".cardRadioBtn").removeClass("chosen")):($(".cardRadioBtn").addClass("chosen"),$(".cashRadioBtn").removeClass("chosen"))})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.paymentForm=e;
},{}],"qwst":[function(require,module,exports) {
"use strict";function e(){$('.delivery-form input[type="radio"]').on("click",function(){$("input.takeAway:checked").val()?($(".takeAway-radioBtn").addClass("chosen"),$(".courier-radioBtn").removeClass("chosen"),$(".newPostDepartment-radioBtn").removeClass("chosen"),$(".newPostCourier-radioBtn").removeClass("chosen")):$("input.courier:checked").val()?($(".courier-radioBtn").addClass("chosen"),$(".takeAway-radioBtn").removeClass("chosen"),$(".newPostDepartment-radioBtn").removeClass("chosen"),$(".newPostCourier-radioBtn").removeClass("chosen")):$("input.newPostDepartment:checked").val()?($(".newPostDepartment-radioBtn").addClass("chosen"),$(".takeAway-radioBtn").removeClass("chosen"),$(".courier-radioBtn").removeClass("chosen"),$(".newPostCourier-radioBtn").removeClass("chosen")):($(".newPostCourier-radioBtn").addClass("chosen"),$(".takeAway-radioBtn").removeClass("chosen"),$(".courier-radioBtn").removeClass("chosen"),$(".newPostDepartment-radioBtn").removeClass("chosen"))})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.deliveryForm=e;
},{}],"gx6c":[function(require,module,exports) {
"use strict";function e(){var e=!1;$(".validation-form").submit(function(r){r.preventDefault();var s=$(".username").val(),t=$(".phone").val(),i=$(".email").val(),o=$(".city").val(),p=$(".street").val();if($(".form-field:has(p)")&&$(".form-field").css("marginBottom","27px"),""===s||s.length<2?($(".username.form-input").css("borderColor","red"),$(".username").parent().append("<p class=err>This field is required</p>").show(1e3),!1):""!==s&&s.length>=2&&($(".err").hide(1e3),$(".username.form-input").removeAttr("style"),!0),""===t){if($(".phone").parent().append("<p class=err>This field is required</p>").show(),$(".phone.form-input").css("borderColor","red"),!1,""===i)$(".email").parent().append("<p class=err>This field is required</p>").show(2e3),$(".email.form-input").css("borderColor","red"),!1;else{var n=/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i.test(i);n?n&&($(".err").hide(1e3),$(".email.form-input").removeAttr("style"),!0):($(".err").parent().append("<p class=err>This field is required</p>").show(),$(".email.form-input").css("borderColor","red"),!1)}""===o||o.length<1?($(".city").parent().append("<p class=err>This field is required</p>").show(),$(".city.form-input").css("borderColor","red"),!1):($(".err").hide(1e3),$(".city.form-input").removeAttr("style"),!0),""===p||p.length<1?($(".street").parent().append("<p class=err>This field is required</p>").show(),$(".street.form-input").css("borderColor","red"),e=!1):($(".err").hide(1e3),$(".street.form-input").removeAttr("style"),e=!0),1==e&&$(".validation-form").unbind("submit").submit()}else{var a=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(t);a?a&&($(".err").hide(1e3),$(".phone.form-input").removeAttr("style"),!0):($(".err").remove(),$(".phone").parent().append("<p class=err>Enter phone number +380XXXXXXXXX</p>").show(1e3),$(".phone.form-input").css("borderColor","red"),!1)}})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.validateForm=e;
},{}],"eIoD":[function(require,module,exports) {
"use strict";var e=require("./jquery-components/payment-form"),r=require("./jquery-components/delivery-form"),o=require("./jquery-components/validation-form");$(function(){(0,e.paymentForm)(),(0,r.deliveryForm)(),(0,o.validateForm)()});
},{"./jquery-components/payment-form":"X3xw","./jquery-components/delivery-form":"qwst","./jquery-components/validation-form":"gx6c"}]},{},["eIoD"], null)
//# sourceMappingURL=/input-validation/index-jquery.904e3216.js.map