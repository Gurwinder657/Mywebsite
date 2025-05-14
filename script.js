const allMovies = [
  {
    title: 'Action Hero',
    image: 'images/movie1.jpg',
    genre: 'action'
  },
  {
    title: 'Drama Queen',
    image: 'images/movie2.jpg',
    genre: 'drama'
  },
  {
    title: 'Secret Spy',
    image: 'images/movie1.jpg',
    genre: 'thriller'
  },
  {
    title: 'Web War',
    image: 'images/movie2.jpg',
    genre: 'web-series'
  },
  {
    title: 'TV Blast',
    image: 'images/movie1.jpg',
    genre: 'tv-series'
  }
];

function renderMovies(containerId, filter = null) {
  const container = document.getElementById(containerId);
  const movies = filter ? allMovies.filter(m => m.genre === filter) : allMovies;

  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const categoryParam = new URLSearchParams(window.location.search).get('genre');

  if (document.getElementById('home-movies')) {
    renderMovies('home-movies');
  }

  if (document.getElementById('category-movies') && categoryParam) {
    renderMovies('category-movies', categoryParam);
  }
});
