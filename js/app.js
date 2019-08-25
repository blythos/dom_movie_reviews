document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  createGenreList();

  // newGenre = document.querySelector('add-new-genre');
  // newGenre.addEventListener('click', addNewGenre)

  const movieForm = document.querySelector('#new-item-form');
  movieForm.addEventListener('submit', addNewMovie);

  const deleteAllButton = document.querySelector('#delete-all-button');
  deleteAllButton.addEventListener('submit', deleteAllMovies);

});

///////// MODEL

// Creates an empty array for us to add review objects to.
// This will allow us to filter and sort the reviews that are added.
const reviewsList = [];

// Creates an array of genres which can be added to by the user.
const genreList = ["Horror", "Sci-Fi", "Action"];

// Creates a review object and adds it to the array.
// Returns the review object as its value.
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

// Allows us to enter text and choose its element in one line.
const addEntryElement = function(text, element) {
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

const clearPageOfMovies = function() {
  const readingList = document.querySelector('#movie-list');
  readingList.innerHTML = "";
}

////////// CONTROLLER

// Needs fixed.
const addNewGenre = function(event) {
  console.log(this);
};

// Needs to be made more dry.
const addNewMovie = function(event) {
  event.preventDefault();

  // When I run this in here, it works fine.
  // When I try to make it more MVC-compatible by making
  // it its own review object function, the radion
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
    titleEntry = addEntryElement(review.title, 'h2');
    directorEntry = addEntryElement(review.director, 'h3');
    yearEntry = addEntryElement(review.year, 'h4');
    genreEntry = addEntryElement(review.genre, 'h4');
    goldRating = addEntryElement(ratingVisual('⭐', review.rating[0]), 'p');
    heartRating = addEntryElement(ratingVisual('💖', review.rating[1]), 'p');
    reviewTextEntry = addEntryElement(review.reviewText, 'p');
    movieEntry.appendChild(titleEntry);
    movieEntry.appendChild(directorEntry);
    movieEntry.appendChild(genreEntry);
    movieEntry.appendChild(goldRating);
    movieEntry.appendChild(heartRating);
    movieEntry.appendChild(reviewTextEntry);
    movieEntry.classList.add('entry');
    movieList.appendChild(movieEntry);
  };
  // event.target.reset();
}

// Adds a delete-all function
const deleteAllMovies = function() {
  event.preventDefault();
  clearPageOfMovies();
  clearAllMovies();
};
