$(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled2", $(this).scrollTop() > $nav.height());
  });
});
