export function deliveryForm() {
  $('.delivery-form input[type="radio"]').on("click", function () {
    if ($("input.takeAway:checked").val()) {
      $(".takeAway-radioBtn").addClass("chosen");
      $(".courier-radioBtn").removeClass("chosen");
      $(".newPostDepartment-radioBtn").removeClass("chosen");
      $(".newPostCourier-radioBtn").removeClass("chosen");
    } else if ($("input.courier:checked").val()) {
      $(".courier-radioBtn").addClass("chosen");
      $(".takeAway-radioBtn").removeClass("chosen");
      $(".newPostDepartment-radioBtn").removeClass("chosen");
      $(".newPostCourier-radioBtn").removeClass("chosen");
    } else if ($("input.newPostDepartment:checked").val()) {
      $(".newPostDepartment-radioBtn").addClass("chosen");
      $(".takeAway-radioBtn").removeClass("chosen");
      $(".courier-radioBtn").removeClass("chosen");
      $(".newPostCourier-radioBtn").removeClass("chosen");
    } else {
      $(".newPostCourier-radioBtn").addClass("chosen");
      $(".takeAway-radioBtn").removeClass("chosen");
      $(".courier-radioBtn").removeClass("chosen");
      $(".newPostDepartment-radioBtn").removeClass("chosen");
    }
  });
}
