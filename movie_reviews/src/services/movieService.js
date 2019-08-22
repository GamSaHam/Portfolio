import http from './httpService';

export function getMovies() {
  return http.get('/movies');
}

export function getBestMovies() {
  return http.get('/movies/best');
}
