if(screen.availWidth > 768){
  let swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
else{
  let swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    // spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}


const navHamburger= () =>{
  const pizza =document.querySelector('.burger');
  const nav=document.querySelector('.list');
  pizza.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
  });
}
navHamburger();