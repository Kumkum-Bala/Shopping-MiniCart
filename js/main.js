$(document).ready(function () {
  $("#cart_open").click(function () {
    $(".overlay").show();
    $("#cart_flyout").fadeIn();
  });
  $(document).on("click", ".close_btn", function () {
    $(".overlay").hide();
    $("#cart_flyout").hide();
  });

  $(document).mouseup(function (e) {
    var cart = $("#cart_flyout");
    if (!cart.is(e.target) && cart.has(e.target).length === 0) {
      $(".overlay").hide();
      $("#cart_flyout").hide();
    }

    var drp = $(".leftMenuCont");
    if (!drp.is(e.target) && drp.has(e.target).length === 0) {
      $(".leftMenuCont").hide();
    }
  });

  $(".drpdn").on("click", function () {
    $(this).parent().find(".leftMenuCont").toggle();
  });
  $(document).on("click", ".leftMenuCont li a", function () {
    $(".leftMenuCont li a").removeClass(".selected");
    $(this).addClass(".selected");
    var a = $(this).text();
    $(".drpdn .selectedVal").text(a);
  });
});
