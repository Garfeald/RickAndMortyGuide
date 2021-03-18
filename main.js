

// slider

$(document).ready(function(){
	$('.slider').slick({
    arrows:false,
		dots:false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    sliderToScroll: 3,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 850,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplaySpeed: 1000
        }
      },
      {
        breakpoint: 320,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 1000
        }
      }
    ]
  });
});


/// !!!! ///


// click по картинки - запрос информации

const inputEventPreventDefault = (event) => {
  event.preventDefault();
}

const infoClick = (id) => {
  $("#alive").empty();
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    $("#alive").append(
      `<div class="image__deteils">
        <img class="image__deteils-img" src='${data.image}' />
        <div class="image__deteils-text">
          <p>Name: ${data.name}</p>
          <p>Status: ${data.status}</p>
          <p>Species: ${data.species}</p>
          <p>Gender: ${data.gender}</p>
        </div>
      </div>`
      );
  })
  document.getElementById('datalistOptions').innerHTML = ''
}


// !!!!!  //

const getNamesList = (value) => {
  $('#datalistOptions').empty();
  if(value != ''){
    fetch(`https://rickandmortyapi.com/api/character?name=${value}`)
    .then((response) => {
      return response.json();
    })
    .then(data => {
      console.log(data)
      data.results.map((i) => {
        $('#datalistOptions').append(`<li onclick="infoClick(${i.id}, event)" class="listOfCharacters">${i.name}</li>`)
      })
    })
  }
  document.getElementById('alive').innerHTML = ''
}

const showNamesList = () => {
  const value = document.querySelector('#autocomlete').value;
  getNamesList(value)
}

const useEffect = document.getElementById('autocomlete').addEventListener(
     'input', 
       () => {showNamesList()}
)


