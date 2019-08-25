document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  createGenreList();

  // newGenre = document.querySelector('add-new-genre');
  // newGenre.addEventListener('click', addNewGenre)

  const movieForm = document.querySelector('#new-item-form');
  movieForm.addEventListener('submit', addNewMovie);

  const deleteAllButton = document.querySelector('#delete-all-button');
  deleteAllButton.addEventListener('submit', deleteAllMovies);

  const nightModeButton = document.querySelector('#nightmode-button')
  nightModeButton.addEventListener('click', toggleNightMode);

});

///////// MODEL

// Creates an empty array for us to add review objects to.
// This will allow us to filter and sort the reviews that are added.
// Sort and filter to be implemented.
const reviewsList = [];

// Creates an array of genres which can be added to by the user.
// User additions still to be implemented.
const genreList = ["Horror", "Sci-Fi", "Action"];

// Creates a review object and adds it to the array.
// Returns the review object as its value.
// Not current functional. Radio buttons are unhappy here.
// They appear to work just fine if they're included in the addNewMovie
// function though.
// const createReview = function() {
//
//   const review = {
//     title: this.title.value,
//     director: this.director.value,
//     year: this.year.value,
//     genre: this.genre.value,
//     gold: this.gold.value,
//     heart: this.heart.value,
//     reviewText: this.reviewText.value
//   };
//   reviewsList.push(review);
//   return review;
// };

const clearAllMovies = function() {
  reviewsList.length = 0;
}

////////// VIEW

// Toggles Night Mode
// Should be able to do this by toggling it in the CSS somehow...
// It's functional but could definitely be neater.
const toggleNightMode = function() {
  const nightMode = event.target;
  if (nightMode.href.match('off')) {
    document.getElementById('body').style.backgroundColor = 'black';
    document.getElementById('body').style.color = 'white';
    nightMode.href = "#on";
  } else {
    document.getElementById('body').style.backgroundColor = 'white';
    document.getElementById('body').style.color = 'black';
    nightMode.href = "#off";
  }
};

// Allows us to enter text and choose its element. Adds DRYness.
const addElementToText = function(text, element) {
  entry = document.createElement(element);
  entry.textContent = text;
  return entry
};

// Renders the initial list of genres on the page, with a view to
// allowing users to add to and remove from the list.
const createGenreList = function() {
  const genreSelect = document.querySelector('#genre')
  for (let genre of genreList) {
    let option = document.createElement("option");
    option.value = genre;
    option.text = genre;
    genreSelect.appendChild(option);
  };
};

// Creates an emoji-based visual representation
// of the given rating.
const ratingVisual = function(emoji, number) {
  emojiVisual = "";
  for (var i = 0; i < number; i++) {
    emojiVisual += emoji
  };
  return emojiVisual;
};

// Breaks delete all function out into MVC components.
const clearPageOfMovies = function() {
  const readingList = document.querySelector('#movie-list');
  readingList.innerHTML = "";
};

// Adds an 'are you sure you want to delete everything? confirmation form'
// Still to be implemented.
const deleteAllConfirm = function() {
  const deleteAllDiv = document.querySelector('#delete-all');
  youSure = addElementToText('Are you sure you want to delete everything?', 'p');
  deleteAllDiv.appendChild(youSure);
}

////////// CONTROLLER

// Still to be implemented. Research how events work in drop downs.
const addNewGenre = function(event) {
  console.log(this);
};

// Needs to be made more DRY and MVC. Preferably the object creation would
// be in the model section. The logic would be broken down into more helper
// functions in the controller and view section.
// I'm not thrilled about having emoji in the code either but I'm not sure
// how to handle that appropriately. Probably better to use an image.
const addNewMovie = function(event) {
  event.preventDefault();

  // When I run this in here, it works fine.
  // When I try to make it more MVC  by making
  // it its own review object function, the radio
  // buttons cause it to break.
  const review = {
    title: this.title.value,
    director: this.director.value,
    year: this.year.value,
    genre: this.genre.value,
    rating: [this.gold.value, this.heart.value],
    reviewText: this.reviewText.value
  };

  reviewsList.push(review);

  // review = createReview();

  const movieList = document.querySelector('#movie-list');
  movieList.textContent = "";

  for (let review of reviewsList) {
    const movieEntry = document.createElement('div');
    movieEntry.textContent = "";
    titleEntry = addElementToText(review.title, 'h2');
    directorEntry = addElementToText(review.director, 'h3');
    yearEntry = addElementToText(review.year, 'h4');
    genreEntry = addElementToText(review.genre, 'h4');
    goldRating = addElementToText(ratingVisual('⭐', review.rating[0]), 'p');
    heartRating = addElementToText(ratingVisual('💖', review.rating[1]), 'p');
    reviewTextEntry = addElementToText(review.reviewText, 'p');
    movieEntry.appendChild(titleEntry);
    movieEntry.appendChild(directorEntry);
    movieEntry.appendChild(genreEntry);
    movieEntry.appendChild(goldRating);
    movieEntry.appendChild(heartRating);
    movieEntry.appendChild(reviewTextEntry);
    movieEntry.classList.add('entry');
    movieList.appendChild(movieEntry);
  };
  event.target.reset();
};

// Adds a delete-all function
// Extra functionality would be to ensure the button needs to be pressed twice
// to work, so you can't accidentally delete all your work.
const deleteAllMovies = function() {
  event.preventDefault();
  // deleteAllConfirm();
  clearPageOfMovies();
  clearAllMovies();
};
