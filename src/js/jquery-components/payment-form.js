export function paymentForm() {
  $('.payment-form input[type="radio"]').on("click", function () {
    if ($("input.cash:checked").val()) {
      $(".cashRadioBtn").addClass("chosen");
      $(".cardRadioBtn").removeClass("chosen");
    } else {
      $(".cardRadioBtn").addClass("chosen");
      $(".cashRadioBtn").removeClass("chosen");
    }
  });
}
