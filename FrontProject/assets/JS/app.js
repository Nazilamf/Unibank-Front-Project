// hamburger menu

function Showmenu() {
    var mylinks = document.querySelector(".mylinks");
    mylinks.classList.toggle("active");
    document.body.classList.toggle("fixed-position");
   

  }

// darkmode function

  function Darkmode() {
    var moon = document.body;
    let darkmoon = document.querySelector('.darkmoon');
    let whitemoon = document.querySelector('.whitemoon');
    moon.classList.toggle("dark-mode");
    darkmoon.classList.toggle('d-none');
    whitemoon.classList.toggle('d-none');
  
  }

  function WhiteMode(){
    var moon = document.body;
    let darkmoon = document.querySelector('.darkmoon');
    let whitemoon = document.querySelector('.whitemoon');
    moon.classList.toggle("dark-mode");
    darkmoon.classList.toggle('d-none');
    whitemoon.classList.toggle('d-none');
  }





// ================================================
//  slider 

$('.slider').slick({
  dots: true,
  arrows:true,
  infinite: true,
  autoplay:true,
  speed: 700,
  pauseOnHover:false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// modal-js

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.querySelector('#icon')

 
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//basket


if (localStorage.getItem('cardslist') === null) {
  localStorage.setItem('cardslist', JSON.stringify([]));
}

let buttonsss = document.querySelectorAll('a button')

for (btn of buttonsss) {
  btn.onclick = function (e) {
      e.preventDefault();
      let id = this.parentElement.parentElement.parentElement.id;
      let src = this.parentElement.parentElement.parentElement.children[0].src;
      let card_name = this.parentElement.parentElement.children[0].innerHTML;
      let card_price = this.parentElement.nextElementSibling.children[0].innerHTML


      let cards = JSON.parse(localStorage.getItem('cardslist'));

      let existCard = cards.find(item => item.Id === id);

      if (existCard == undefined) {
          cards.push({
              Id: id,
              Image: src,
              Name: card_name,
              Price: card_price,
              Count: 1
          })
          
          document.querySelector('.alertbox').innerHTML = 'Məhsul əlavə olundu..'
          document.querySelector('.alertbox').style.right = '5%'
      }
      else {
          existCard.Count += 1;
     
          document.querySelector('.alertbox').innerHTML = 'Məhsulun sayı artılırdı'
          document.querySelector('.alertbox').style.right = '5%'
      }

      localStorage.setItem('cardslist', JSON.stringify(cards));
     
      setTimeout(() => {
          document.querySelector('.alertbox').style.right = '-15%';
      }, 1000);
      ShowCount();
  }
}


function ShowCount() {
  let cards = JSON.parse(localStorage.getItem('cardslist'));
  document.querySelector('#count').innerHTML = cards.length;
}

ShowCount();