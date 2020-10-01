$(function () {
    $(document).scroll(function () {
      var $nav = $("#mainNav");
      var $navLink = $(".nav-link");
     
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
      $navLink.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });


  });

  $('.navbar-nav li a').on('click', function () {
    if (!$(this).hasClass('dropdown-toggle')) {
      $('.navbar-collapse').collapse('hide');
    }
  });