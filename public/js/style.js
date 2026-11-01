$(document).ready(function () {
  // Open Sidebar
  $("#Hamburger").click(function () {
    $(".SidebarResponsive").stop().animate(
      {
        left: "0px",
      },
      500,
    );

    $("html").css("overflow", "hidden");
  });

  // Close Sidebar
  $(".SidebarResponsive__close").click(function () {
    $(".SidebarResponsive").stop().animate(
      {
        left: "-100rem",
      },
      500,
    );

    $("html").css("overflow", "auto");
  });
});
