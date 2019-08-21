import http from './httpService';

const apiEndpoint = '/reviews';

function reviewUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getReviews() {
  return http.get(apiEndpoint);
}

export function getRecentReviews() {
  return http.get(apiEndpoint + '/recent');
}

export function getBestReviews() {
  return http.get(apiEndpoint + '/best');
}

export function getReview(reviewId) {
  return http.get(reviewUrl(reviewId));
}

export function saveReview(review) {
  if (review._id) {
    const body = { ...review };
    delete body._id;
    return http.put(reviewUrl(review._id), body);
  }

  return http.post(apiEndpoint, review);
}

export function deleteReview(reviewId) {
  console.log(reviewUrl(reviewId));
  return http.delete(reviewUrl(reviewId));
}
