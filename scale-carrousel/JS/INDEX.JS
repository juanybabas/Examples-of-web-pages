// VARIABLES
var $carrousel = $('.carrousel');
var $slides = $('.slides', $carrousel);
var $firstSlide = $('li:first', $slides);
var $lastSlide = $('li:last', $slides);
var $currentSlide = $firstSlide;
var $nextSlide;
var $puces = $('.puces', $carrousel);
var $indic = $('.indic');
var slideLength = $('li', $slides).length;
var currentIndex = 0;
var nextIndex = 0;
var autoRota;
var autoSpeed = 4000; // VITESSE AUTOMATIQUE DES SLIDES
var buttonPuce = '<li><button></button></li>';
var animating = false;

// AJOUT DES PUCES POUR CHAQUE SLIDE
for (var i=0;i<slideLength;i++) {
  $puces.append(buttonPuce);
}
// INIT
$currentSlide.addClass('anime current').show();
posIndic();
if ($carrousel.hasClass('auto')) {
  launchRota();
}
setTimeout(function(){
  $indic.addClass('anime');
},10);

// POSITIONNE LE MARQUEUR SUR LES PUCES
function posIndic() {
  var posNextPuce = $('li:eq('+ nextIndex + ') button', $puces).position();
  $indic.css({top: posNextPuce.top + $carrousel.height() + 22, left: posNextPuce.left});
}

// TRANSITION DES SLIDES
function transition() {
  animating = true;
  $nextSlide.addClass('shrink').show();
  setTimeout(function(){
    $nextSlide.addClass('anime').removeClass('shrink');
    $currentSlide.addClass('scale');
    nextIndex = $nextSlide.index('.slides li');
    posIndic();
  },10);
  setTimeout(function(){
    $currentSlide.removeClass('anime scale current').hide();
    $nextSlide.addClass('current');
    $currentSlide = $nextSlide;
    changeIndex();
    animating = false;
  },300);
}

// AUTOMATIQUE
function launchRota() {
  autoRota = setInterval(function(){
    verifDirection('next');
  },autoSpeed);
}

// CHANGE L'INDEX DU SLIDE COURANT
function changeIndex() {
  currentIndex = $currentSlide.index('.slides li');
}

// VERIFICATION SI DEBUT OU FIN DE LISTE
function verifDirection(direction) {
  if (direction == 'next') {
    if (currentIndex == slideLength - 1) {
      $nextSlide = $firstSlide;
    } else {
      $nextSlide = $currentSlide.next();
    }
  } else {
    if (currentIndex == 0) {
      $nextSlide = $lastSlide;
    } else {
      $nextSlide = $currentSlide.prev();
    }
  }
  transition();
}

// BOUTONS DE NAVIGATION ET PUCES
$('.prev, .next, .puces button').click(function(){
  if (animating ==false) {
    clearInterval(autoRota);
    if ($(this).hasClass('prev')) {
      verifDirection('prev');
    } else if ($(this).hasClass('next')) {
      verifDirection('next');
    } else {
      var puceIndex = $(this).parent().index('.puces li');
      $nextSlide = $('li:eq(' + puceIndex + ')', $slides);
      transition();
    }
    if ($carrousel.hasClass('auto')) {
      launchRota();
    }
  }
});