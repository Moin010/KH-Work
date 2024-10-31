const reviewAreaBTN = document.querySelector(
  ".io-home-user-review-area .io-home-user-review-toggle-btn button"
);
const hiddenReviewArea = document.querySelector(
  ".io-home-user-review-area .io-home-user-review-hidden-area"
);

reviewAreaBTN.addEventListener("click", () => {
  hiddenReviewArea.classList.toggle("__show");
});
