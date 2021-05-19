
$('.js-testimonials').slick({
    arrows:  true,
    /*dots: true,*/
    fade: true,
});


$('.js-carousel').slick({        
//   dots: true,
  arrows:  true,
  infinite: false, 
  variableWidth: true,       
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    
    {
      breakpoint: 1024,
      settings: {
        // infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows:  false
      }
    },
    {
      breakpoint: 767,
      settings: {
        variableWidth: false,             

        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows:  false
      }
    }
    
  ]
});


const body = document.querySelector('body');
const modalMenu = document.createElement('div');
modalMenu.classList.add('header__modl-menu');
modalMenu.innerHTML = `
    <div class="header__modl-menu-container">
      <div class="header__modl-menu-inner">
        <a href="#gallery" class="header__menu-link js-link js-link-modal">Design Gallery</a>
        <a href="#list" class="header__menu-link js-link js-link-modal">List of Architect</a>
        <a href="#articles" class="header__menu-link js-link js-link-modal">Articles</a>
        <a href="#work" class="header__menu-link js-link js-link-modal">How it Works</a>
      </div>
      <div class="header__group-right">
          <div class="header__search">
              <input class="input-search" type="text" id="search" name="search" required>
              <button class="header__search-btn"></button>
          </div>
          <div class="header__authorization">
              <a href="#" class="button-signin">Sign In</a>
              <a href="#" class="button-signup">Sign Up</a>
          </div>                         
      </div> 
    </div>              
    `;
body.append(modalMenu);

document.querySelector('.js-burger').addEventListener('click', (e) => {
  document.querySelector('.js-burger').classList.toggle('is-open');
  document.querySelector('.header__modl-menu').classList.toggle('is-open');
  if(document.querySelector('.header__modl-menu').classList.contains('is-open')) {
    document.documentElement.style.overflow = 'hidden'; 
  }else {
    document.documentElement.style.overflow = ''; 
  }
});

document.querySelectorAll('.js-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const linkHref = link.getAttribute('href').substr(1);
    const section = document.getElementById(linkHref);
    const sectionTop = section.getBoundingClientRect().top;
    window.scrollBy ({
      top: sectionTop,
      behavior: 'smooth'
    }); 
    
    
  });
});

document.querySelectorAll('.js-link-modal').forEach(link => {
  link.addEventListener('click', (e) => {
  document.querySelector('.js-burger').click();
});

});

console.log('2');
