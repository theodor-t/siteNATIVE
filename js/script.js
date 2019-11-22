$(document).ready(function(){
    animatedNavigate();
    initCarousel();
    showPosts();
});


function animatedNavigate() {
  $('a[href^="#"]').click(function(){ //берем все ссылки атрибут href которых начинается с #
      if(document.getElementById($(this).attr('href').substr(1)) != null) { //на странице есть элемент с нужным нам id
         $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500); // анимируем скролл к элементу
      }     
      return false;
    });
}

function initCarousel() {
  $(".owl-carousel").owlCarousel({
      items:8,
      autoWidth: true
    });
}



/*$(window).resize(function(){
  console.log($(document).width());

  if($(document).width() < 700){
    $(".owl-carousel").owlCarousel({
      items:3
    });
  } else {
    $(".owl-carousel").owlCarousel({
      items:8
    });
  }
});*/
function showPosts(){
  $('.toggles button').click(function(){
    const get_id = this.id;
    const get_current = $('.posts .' + get_id);

    $('.posts div').not(get_current).hide(500);
    get_current.show(500);
  });

  $('#showall').click(function() {
    $('.posts div').show(500);
  });
}



/*$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:8
  });
});*/




  var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });

  