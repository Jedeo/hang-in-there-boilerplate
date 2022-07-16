// query selector variables go here 👇
// article class = "poster"
var posterImg = document.querySelector('.poster-img');
var posterTitle = document.querySelector('.poster-title');
var posterQuote = document.querySelector('.poster-quote');
//******************************************************//
//homepage buttons
var savePosterButton = document.querySelector('.save-poster');
var showSavedButton = document.querySelector('.show-saved');
var randomPosterButton = document.querySelector('.show-random');
var makeNewButton = document.querySelector('.show-form');
//******************************************************//
//sections
var mainPosterSection = document.querySelector('.main-poster');
var posterFormSection = document.querySelector('.poster-form');
var savedPosterSection = document.querySelector('.saved-posters');
//******************************************************//
// section buttons
var nevermindButton = document.querySelector('.show-main');
var backToMainButton = document.querySelector('.back-to-main');
var showMyPosterButton = document.querySelector('.make-poster');
// articles
var savedPostersGrid = document.querySelector('.saved-posters-grid');

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];

var savedPosters = [];

// what is being displayed currently on the main page;

// event listeners go here 👇
// window event listeners
window.addEventListener('load', displayRandomPoster); //random poster per refresh

// main page event listeners
randomPosterButton.addEventListener('click', displayRandomPoster); // random poster per button click
makeNewButton.addEventListener('click', showForm); // when clicked, make new button hides main page, displays form page
showSavedButton.addEventListener('click', function() { // show saved posters
    // displayMiniPosters();
    mainPosterSection.classList.toggle('hidden');
    savedPosterSection.classList.toggle('hidden');
    displayMiniPosters();
    //alert("this is posters");
});

// section event listeners
nevermindButton.addEventListener('click', formToMain);
backToMainButton.addEventListener('click', savedToMain);
showMyPosterButton.addEventListener('click', function(event) { // display user poster
  formToMain();
  collectUserInput();
  posterImg.src = images[images.length - 1];
  posterTitle.innerText = titles[titles.length - 1];
  posterQuote.innerText = quotes[quotes.length - 1];
  event.preventDefault();
});


// When a user clicks the “Save This Poster” button
savePosterButton.eventListener('click', function() {
// the current main poster will be added to the savedPosters array
  var currentImageUrl = posterImg.src;
  var currentTitle = posterTitle.innerText;
  var currentQuote = posterQuote.innerText;
  var currentPoster = new Poster(currentQuote, currentTitle, currentImageUrl);
  for (var i = 0; i < savedPosters.length; i++) {
    // no duplicates
    // if (currentPoster.id !== savedPosters[i].id) {
      savedPosters.push(currentPoster);
    // }
  }
});

// functions and event handlers go here 👇
// (we've provided one for you to get you started)!

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//adds functionality to random poster button and window load & reload;
function displayRandomPoster(){
  //random images
  var randomImgNum = getRandomIndex(images);
  posterImg.src = images[randomImgNum];
  //random titles
  var randomTitleNum = getRandomIndex(titles);
  posterTitle.innerText = titles[randomTitleNum];
  //random quotes
  var randomQuoteNum = getRandomIndex(quotes);
  posterQuote.innerText = quotes[randomQuoteNum];
}
//section change functions
function showForm() {
  mainPosterSection.classList.toggle('hidden'); // add CSS property hidden to main poster section
  posterFormSection.classList.toggle('hidden'); // toggle CSS property hidden on poster form section
}

//back to main page functions
function formToMain() {
  posterFormSection.classList.toggle('hidden');
  mainPosterSection.classList.toggle('hidden');
}

function savedToMain() {
  mainPosterSection.classList.toggle('hidden');
  savedPosterSection.classList.toggle('hidden');
}

//show my poster functionality
function collectUserInput() {
  //collecting userInputs
  let userUrlInput = document.getElementById('poster-image-url').value;
  let userTitleInput = document.getElementById('poster-title').value;
  let userQuoteInput = document.getElementById('poster-quote').value;
  // instantiating a new Poster object instance, called userPoster
  let userPoster = new Poster(userUrlInput, userTitleInput, userQuoteInput);
  //pushing userInputs to respective arrays
  images.push(userPoster.imageURL);
  titles.push(userPoster.title);
  quotes.push(userPoster.quote);
}
///save poster to saved poster section

// All the posters in the savedPosters array should be displayed
//in the saved posters grid section

// savedPostersGrid = article
function displayMiniPosters() {
// the JS variables of our HTML elements of interest
  var miniPosterDiv = document.createElement('div');
  var miniPosterImg = document.createElement('img');
  var miniPosterH2 = document.createElement('h2');
  var miniPosterH4 = document.createElement('h4');

// make the div a child of the correct article section,
// assigned the proper class to our DOM div element
  savedPostersGrid.appendChild(miniPosterDiv);
  miniPosterDiv.classList.add('mini-poster');

// put our miniPosterImg, miniPosterH2, miniPosterH4
// inside of our miniPosterDiv - how to I access inbetween the tags
// of my miniPosterDiv? with its children!

  miniPosterDiv.appendChild(miniPosterImg);
  miniPosterDiv.appendChild(miniPosterH2);
  miniPosterDiv.appendChild(miniPosterH4);

/* need to set the img.src = to our URL of interest,
set the h2.innerText = title of interest,
set the h4.innerText = quote of interest; */

// this was a test we ran to see if our syntax was buggy
miniPosterImg.src = savedPosters[0].imageURL;
miniPosterH2.innerText = savedPosters[0].title;
miniPosterH4.innerText = savedPosters[0].quote;

// this was our original thought to update the savedPosters array
// with the current poster image;
//   for (var i = 0; i < savedPosters.lenth; i++) {
//     miniPosterImg.src = savedPosters[i].imageURL; // currentPoster.imageURL;
//     miniPosterH2.innerText = savedPosters[i].title;
//     miniPosterH4.innerText = savedPosters[i].quote;
//   }
}

/*
use the CSS classes, '.mini-poster img',
.'mini-poster h2', and '.mini-poster h4' to
change the style of the saved posters in the
saved posters array
<article class="saved-posters-grid">
  <div class="mini-poster">
    <img src="url of interest">
    <h2>This is the title</h2>
    <h4>This is the quote</h4>
  </div>
</article>
*/
