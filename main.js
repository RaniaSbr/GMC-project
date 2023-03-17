const arrow = document.querySelectorAll(".arrow");
const filmlist = document.querySelectorAll(".movie-list-wrap");
arrow.forEach((arrow, i) => {
  const itlenght = 7;
  let clickcounter = 0;
  arrow.addEventListener("click", () => {
    clickcounter++;
    if (itlenght - (4 + clickcounter) > 0) {
      filmlist[i].style.transform = `translateX(${
        filmlist[i].computedStyleMap().get("transform")[0].x.value - 400
      }px)`;
    } else {
      filmlist[i].style.transform = "translateX(0)";
      clickcounter = 0;
    }
  });
});
