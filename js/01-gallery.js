import {galleryItems} from './gallery-items.js';
// Change code below this line

// 1
const paletteContainer = document.querySelector(`.gallery`);
const imgGallery = createImgGallery(galleryItems);

function createImgGallery(galleryItems) {
  return galleryItems
    .map(({preview, original, description}) => {
      return `
        <div class ="gallery__item lazyload ">
        <a class="gallery__link" href="${original}">
      <img
  class="gallery__image"
  loading="lazy"
  src="${preview}"
  alt="${description}"
  data-source ="${original}"

/>
</a>
</div>
`;
    })
    .join('');
}

paletteContainer.insertAdjacentHTML(`beforeend`, imgGallery);

// 2
paletteContainer.addEventListener('click', onImgClick);

function onImgClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== `IMG`) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  window.addEventListener('keydown', onEscKeyPress);

  function onEscKeyPress(evt) {
    if (evt.code === 'Escape') {
      window.removeEventListener('keydown', onEscKeyPress);
      instance.close();
    }
  }
}
