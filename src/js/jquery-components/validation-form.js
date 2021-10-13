export function validateForm() {
  let usernameValid = false;
  let phoneValid = false;
  let emailValid = false;
  let cityValid = false;
  let streetValid = false;

  $(".validation-form").submit(function (e) {
    e.preventDefault();
    const username = $(".username").val();
    const phone = $(".phone").val();
    const email = $(".email").val();
    const city = $(".city").val();
    const street = $(".street").val();

    if ($(".form-field:has(p)")) {
      $(".form-field").css("marginBottom", "27px");
    }

    if (username == "" || username.length < 2) {
      $(".username.form-input").css("borderColor", "red");

      $(".username")
        .parent()
        .append("<p class=err>This field is required</p>")
        .show(1000);

      usernameValid = false;
    } else if (username.length >= 2) {
      $(".err").hide(1000);
      $(".username.form-input").removeAttr("style");
      usernameValid = true;
    }

    if (phone == "") {
      $(".phone")
        .parent()
        .append("<p class=err>This field is required</p>")
        .show();

      $(".phone.form-input").css("borderColor", "red");
      phoneValid = false;
    } else {
      const regExPhone =
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

      const validatePhone = regExPhone.test(phone);

      if (!validatePhone) {
        $(".err").remove();
        $(".phone")
          .parent()
          .append("<p class=err>Enter phone number +380XXXXXXXXX</p>")
          .show(1000);

        $(".phone.form-input").css("borderColor", "red");
        phoneValid = false;
      } else {
        $(".err").hide(1000).remove();
        $(".phone.form-input").removeAttr("style");
        phoneValid = true;
      }
    }

    if (email == "" || email.length < 1) {
      $(".email")
        .parent()
        .append("<p class=err>This field is required</p>")
        .show(2000);

      $(".email.form-input").css("borderColor", "red");
      emailValid = false;
    } else {
      const regExEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
      const validateEmail = regExEmail.test(email);

      if (!validateEmail) {
        $(".err")
          .parent()
          .append("<p class=err>This field is required</p>")
          .show();
        $(".email.form-input").css("borderColor", "red");

        emailValid = false;
      } else {
        $(".err").hide(1000);
        $(".email.form-input").removeAttr("style");
        emailValid = true;
      }
    }

    if (city == "" || city.length < 1) {
      $(".city")
        .parent()
        .append("<p class=err>This field is required</p>")
        .show();

      $(".city.form-input").css("borderColor", "red");
      cityValid = false;
    } else {
      $(".err").hide(1000).remove();
      $(".city.form-input").removeAttr("style");
      cityValid = true;
    }

    if (street == "" || street.length < 1) {
      $(".street")
        .parent()
        .append("<p class=err>This field is required</p>")
        .show();

      $(".street.form-input").css("borderColor", "red");
      streetValid = false;
    } else {
      $(".err").hide(1000).remove();
      $(".street.form-input").removeAttr("style");
      streetValid = true;
    }

    if (
      (usernameValid == true,
      phoneValid == true,
      emailValid == true,
      cityValid == true,
      streetValid == true)
    ) {
      $(".validation-form").unbind("submit").submit();
    }
  });
}
