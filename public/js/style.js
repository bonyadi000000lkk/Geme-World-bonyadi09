$(document).ready(function () {
  // باز کردن منو
  $("#Hamburger").on("click", function (e) {
    e.preventDefault();

    $(".SidebarResponsive").stop(true).animate(
      {
        left: "0px",
      },
      500,
    );

    $("html").css("overflow", "hidden");
  });

  // بستن منو
  $(".SidebarResponsive__close").on("click", function (e) {
    e.preventDefault();

    $(".SidebarResponsive").stop(true).animate(
      {
        left: "-100rem",
      },
      500,
    );

    $("html").css("overflow", "auto");
  });
});
