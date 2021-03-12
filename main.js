

// slider

$(document).ready(function(){
	$('.slider').slick({
    arrows:false,
		dots:false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: '60px',
    slidesToShow: 5,
    sliderToScroll: 1,
    speed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });
});


/// !!!! ///

function selectRequest(classCharacter, url, event){
  $(classCharacter).click((event) => {
    $("#alive").empty();
    fetch(url)
.then((response) => {
  return response.json();
})
                          
.then((data) => {
  data.results.map((i) => {
    $("#alive").append(`<div class="aliveRicks-item" style='background-image: url(${i.image})'><p class="aliveRicks-names">${i.name}</p></div>`);
  })

})
  })
}

// опция запроса на вывод живых риков
selectRequest('.aliveRicks_select', 'https://rickandmortyapi.com/api/character?name=rick&status=alive');

// опция запроса на вывод живых морти
selectRequest('.aliveMortys_select', 'https://rickandmortyapi.com/api/character?name=morty&status=alive');

// опция запроса на вывод живых Jerry
selectRequest('.aliveJerrys_select', 'https://rickandmortyapi.com/api/character?name=jerry&status=alive');


