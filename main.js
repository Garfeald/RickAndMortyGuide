

// slider

$(document).ready(function(){
	$('.slider').slick({
    arrows:false,
		dots:false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // centerPadding: '60px',
    slidesToShow: 5,
    sliderToScroll: 1,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          arrows: false,
          centerMode: true,
          // centerPadding: '60px',
          slidesToShow: 3,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 850,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 1,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          // centerPadding: '60px',
          slidesToShow: 2,
          slidesToShow: 1,
          touchThreshold: 10
        }
      },
      {
        breakpoint: 320,
        settings: {
          arrows: false,
          centerMode: true,
          // centerPadding: '60px',
          slidesToShow: 1,
          slidesToShow: 1,
          touchThreshold: 10
        }
      }
    ]
  });
});


/// !!!! ///


// click по картинки - запрос информации

const infoClick = (id) => {
  $("#alive").empty();
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data)
    $("#alive").append(
      `<div class="image__deteils">
        <img class="image__deteils-img" src='${data.image}' />
        <div class="image__deteils-text">
          <p>Name: ${data.name}</p>
          <p>Status: ${data.status}</p>
          <p>Species: ${data.species}</p>
        </div>
      </div>`
      );
  })
}


// !!!!!  //


// !!!!! api request function !!!!! //

function selectRequest(classCharacter, url, event){
  $(classCharacter).click((event) => {
    $("#alive").empty();
    fetch(url)
.then((response) => {
  return response.json();
})
                          
.then((data) => {
  data.results.map((i) => {
    $("#alive").append(`<div #="image" class="aliveRicks-item" onclick="infoClick(${i.id})" style='background-image: url(${i.image})'><p #="name" class="aliveRicks-names">${i.name}</p></div>`);
  })

})
  })
}

// !!!!! //

// опция запроса на вывод живых риков
selectRequest('.aliveRicks_select', 'https://rickandmortyapi.com/api/character?name=rick&status=alive');

// опция запроса на вывод живых морти
selectRequest('.aliveMortys_select', 'https://rickandmortyapi.com/api/character?name=morty&status=alive');

// опция запроса на вывод живых Jerry
selectRequest('.aliveJerrys_select', 'https://rickandmortyapi.com/api/character?name=jerry&status=alive');

// опция запроса на вывод мёртвых риков
selectRequest('.deadRicks_select', 'https://rickandmortyapi.com/api/character?name=rick&status=dead');

// опция запроса на вывод мёртвых риков
selectRequest('.deadMortys_select', 'https://rickandmortyapi.com/api/character?name=morty&status=dead');

// опция запроса на вывод мёртвых риков
selectRequest('.deadJerrys_select', 'https://rickandmortyapi.com/api/character?name=jerry&status=dead');




