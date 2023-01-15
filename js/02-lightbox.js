import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function createImgMarkup() {
  galleryItems.map((img) =>
    galleryEl.insertAdjacentHTML(
      "beforeend",
      `
        <a class="gallery__item" href="${img.original}">
            <img
                class="gallery__image"
                src="${img.preview}"
                alt="${img.description}"
                title="${img.description}"
            />
        </a>
        `
    )
  );
}

createImgMarkup();

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionPosition: "bottom",
  captionDelay: 250,
});
