import { galleryItems } from './gallery-items.js';
// Change code below this line


const paletteContainer = document.querySelector(`.gallery`);
const imgGallery = createImgGallery(galleryItems);

paletteContainer.insertAdjacentHTML(`beforeend`, imgGallery);

function createImgGallery(galleryItems) {
  return galleryItems
    .map(({preview, original, description}) => {
      return `
        <div class ="gallery__item ">
        <a class="gallery__link" href = "">
      <img
  class="gallery__image"
  src="${preview}"
  data-src="${original}"
  alt="${description}"
/>
</a>
</div>
`;
    })
    .join('');
}
