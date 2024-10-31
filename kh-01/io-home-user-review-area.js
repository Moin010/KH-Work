const reviewAreaBTN = document.querySelector(
  ".io-user-review-area .review-toggle-btn button"
);
const hiddenReviewArea = document.querySelector(
  ".io-user-review-area .review-hidden-area"
);

reviewAreaBTN.addEventListener("click", () => {
  hiddenReviewArea.classList.toggle("__show");
});
