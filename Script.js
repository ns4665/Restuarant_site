window.addEventListener('scroll', function(){
  const header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu(){
  const menuToggle = document.querySelector('.menuToggle');
  const navigation =  document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}
(function (){

  'use strict';

  $('ul.navigation >li').on('click', function(e){

    e.preventDefualt();

    $('ul.navigation >li').removeClass('active');
    $(this).addClass('active');


  });
});(jQuery)