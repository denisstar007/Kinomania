$(document).ready(function(){
   $('.header__burger').click(function(event){
      $('.header__burger,.menu__bar').toggleClass('active');
      $('body').toggleClass('lock');
   })
})