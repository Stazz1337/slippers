// таймер

function countdown() {
  const endDate = new Date("2023-09-29");
  const now = new Date();
  const timeLeft = endDate - now;

  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(
    seconds
  )}`;
  document.querySelector(".promo__timer-counter").textContent = formattedTime;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}

setInterval(countdown, 1000);

// слайдер

const purchaseListItems = document.querySelectorAll(".purchase__list-item");
const listSelectedImages = document.querySelectorAll(".purchase__selected img");

purchaseListItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    purchaseListItems.forEach((item) => {
      item.classList.remove("active");
    });

    item.classList.add("active");

    listSelectedImages.forEach((image) => {
      image.style.display = "none";
    });

    listSelectedImages[index].style.display = "block";
  });
});
