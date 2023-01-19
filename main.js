const hamMenu = document.querySelector(".ham-menu");

const mobilePhoneMenu = document.querySelector('.mobilePhoneMenu');




hamMenu.addEventListener('click',function(){
  hamMenu.classList.toggle('changeHamMenu');
});

hamMenu.addEventListener('click',function(){
  
  mobilePhoneMenu.classList.toggle('showMobileMenu');
})




