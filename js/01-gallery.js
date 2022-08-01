import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const pictures = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", pictures);

gallery.addEventListener("click", openPicture);

function openPicture(event) {
  event.preventDefault();
  const imgUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${imgUrl}" width="800" height="600">
`);

  const imageClose = (event) => {
    if (event.key === "Escape")
      instance.close(() => {
        document.removeEventListener("keydown", imageClose);
      });
  };

  document.addEventListener("keydown", imageClose);

  instance.show();
}
