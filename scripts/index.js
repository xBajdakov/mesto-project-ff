// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function creadeCard(data,deleteCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardTitle = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.setAttribute("src", data.link);
    cardImage.setAttribute("alt", data.name);
    cardTitle.textContent = data.name;
    const deleteButton = cardElement.querySelector('.card__delete-button')
    deleteButton.addEventListener("click",function() {
        deleteCard(cardElement);
    })
    return cardElement;
}
// @todo: Функция удаления карточки
function deleteCard(cardElement) {
    cardElement.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach(function(card) {
    cardList.append(creadeCard(card,deleteCard));
});