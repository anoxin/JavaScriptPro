const content = document.querySelector(".content");

const feedbackKey = "feedback";



function showProduct() {
  const feedbackList = JSON.parse(localStorage.getItem(feedbackKey));
  const contentHtml = feedbackList.map(
    (el) => `<article>
               <h1>${el.nameProduct}</h1>
               <ul class="feedbackList" style="display: none;">${el.feedback
        .map((i) => `<li>${i}</li>`)
        .join(" ")}</ul>
               <button class="feedbackList-btn">Показать отзывы</button>
            </article>`
  )
    .join(" ");

  content.innerHTML = contentHtml;

}
showProduct();
const feedbackListBtnAll = document.querySelectorAll(".feedbackList-btn");
const feedbackListAll = document.querySelectorAll(".feedbackList");


for (let i = 0; i < feedbackListBtnAll.length; i++) {
  feedbackListBtnAll[i].addEventListener("click", () => {
    if (feedbackListAll[i].style.display === "none") {
      feedbackListAll[i].style.display = "block";
      feedbackListBtnAll[i].innerHTML = "Скрыть отзывы";
    } else {
      feedbackListAll[i].style.display = "none";
      feedbackListBtnAll[i].innerHTML = "Показать отзывы";
    }
  });
}

// с удалением не разобрался!!!