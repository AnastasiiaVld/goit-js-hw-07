import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

function createImgMarkup() {
  galleryItems.map((img) =>
    galleryEl.insertAdjacentHTML(
      "beforeend",
      `<div class="gallery__item">
                <a class="gallery__link" href="${img.original}">
                <img
                    class="gallery__image"
                    src="${img.preview}"
                    data-source="${img.original}"
                    alt="${img.description}"
                />
                </a>
            </div>`
    )
  );
}

createImgMarkup();

const handleModalClick = (e) => {
  e.preventDefault();

  const modal = basicLightbox.create(`
    <div class="modal">
        <img src="${e.target.dataset.source}"></img>
    </div>
  `);

  modal.show();

  document
    .querySelector(".modal")
    .addEventListener("click", () => modal.close());

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.close();
    }
  });
};

galleryEl.querySelectorAll(".gallery__image").forEach((image) => {
  image.addEventListener("click", handleModalClick);
});
