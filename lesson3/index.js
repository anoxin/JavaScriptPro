/* # Заключительное задание.

Создайте две html-страницы:

1. Страница добавления отзыва о продукте.
Должна содержать форму с полем для ввода названия продукта и текстовое поле 
для текста отзыва.
Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в localstorage.
Необходимо реализовать проверку, оба поля должны быть заполнены, если это не 
так, необходимо выводить ошибку пользователю.

2. Страница просмотра отзывов.
Показывает список всех продуктов, на которые были оставлены отзывы.
Рядом с каждым продуктом должна быть кнопка "показать отзывы" / "скрыть отзывы" 
(надпись кнопки меняется), при нажатии на которую показываются / скрываются 
отзывы продукта.
После текста отзыва должна быть кнопка "удалить", которая удаляет данный отзыв 
из localstorage и со страницы. 
Если удалены все отзывы продукта, то продукта вовсе должен быть удален, как из 
localstorage, так и со страницы. */

const nameProduct = document.querySelector(".name-product");
const feedback = document.querySelector(".feedback");
const saveFeedback = document.querySelector(".save-feedback");
const errorMessage = document.querySelector(".error-message");
const content = document.querySelector(".content");

const feedbackKey = "feedback";


function saveFeedbackInLocalStorage(nameProductInput, feedbackInput) {
  if (localStorage.getItem(feedbackKey)) {
    const feedbackArray = JSON.parse(localStorage.getItem(feedbackKey));
    if (feedbackArray.find((el) => el.nameProduct === nameProductInput)) {
      for (let i = 0; i < feedbackArray.length; i++) {
        if (feedbackArray[i].nameProduct === nameProductInput) {
          feedbackArray[i].feedback.push(feedbackInput);
        }

      }

    }
    else {
      feedbackArray.push({ nameProduct: nameProductInput, feedback: [feedbackInput] });
    }
    localStorage.setItem(
      feedbackKey,
      JSON.stringify(feedbackArray)
    );

  } else {
    localStorage.setItem(
      feedbackKey,
      JSON.stringify([{ nameProduct: nameProductInput, feedback: [feedbackInput] }])
    );
  }
}

saveFeedback.addEventListener("click", () => {
  if (nameProduct.value && feedback.value) {
    errorMessage.textContent = "";
    saveFeedbackInLocalStorage(nameProduct.value, feedback.value);
    nameProduct.value = ""; feedback.value = "";
    errorMessage.textContent = "Товар добавлен";
    setTimeout(() => {
      errorMessage.textContent = ""
    }, 1000);
  } else {
    errorMessage.textContent = "Поля не должны быть пустыми";
  }

});