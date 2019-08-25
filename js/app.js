document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  initialGenreList = document.querySelector('#genre');
  createGenreList();

  // const movieForm = document.querySelector('#new-item-form');
  // movieForm.addEventListener('submit', addNewMovie);
  //
  // const deleteAllButton = document.querySelector('#delete-all-button');
  // deleteButton.addEventListener('submit', deleteAllMovies);

});

reviewsList = [];

genreList = ["Horror", "Sci-Fi", "Action"];

const createGenreList = function() {
  for (let genre of genreList) {
    let option = document.createElement("option");
    option.value = genre;
    option.text = genre;
    initialGenreList.appendChild(option);
    console.log(this);
  };
};
