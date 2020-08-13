$(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled1", $(this).scrollTop() > $nav.height());
  });
});
