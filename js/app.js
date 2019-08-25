document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  initialGenreList = document.querySelector('#genre');
  createGenreList();

  // newGenre = document.querySelector('add-new-genre');
  // newGenre.addEventListener('click', addNewGenre)

  const movieForm = document.querySelector('#new-item-form');
  movieForm.addEventListener('submit', addNewMovie);

  // const deleteAllButton = document.querySelector('#delete-all-button');
  // deleteButton.addEventListener('submit', deleteAllMovies);

});

// Creates an empty array for us to add review objects to.
// This will allow us to filter and sort the reviews that are added.
reviewsList = [];

// Creates an array of genres which can be added to by the user.
genreList = ["Horror", "Sci-Fi", "Action"];

// Allows us to enter text and choose its element in one line.
const addEntryElement = function(text, element) {
  entry = document.createElement(element);
  entry.textContent = text;
  return entry
};

// Renders the initial list of genres on the page.
const createGenreList = function() {
  for (let genre of genreList) {
    let option = document.createElement("option");
    option.value = genre;
    option.text = genre;
    initialGenreList.appendChild(option);
  };
};

// Needs fixed.
const addNewGenre = function(event) {
  console.log(this);
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

// Needs to be made more dry.
const addNewMovie = function(event) {
  event.preventDefault();
  const review = {
    title: this.title.value,
    director: this.director.value,
    year: this.year.value,
    genre: this.genre.value,
    rating: [this.gold.value, this.heart.value],
    reviewText: this.reviewText.value
  };
  reviewsList.push(review);

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

  //  event.target.reset();
}
