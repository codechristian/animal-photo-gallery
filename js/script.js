function createImage(src) {
  const image = document.createElement('img');
  image.src = src;
  return image;
}

//populate album view by looping through photoList array from photo-list.js
const albumView = document.querySelector('#album-view');
for(let i = 0; i < photoList.length; i++) {
  const photoSrc = photoList[i];
  const image = createImage(photoSrc);
  image.addEventListener('click', onThumbnailClick);
  albumView.appendChild(image);
}

//when user clicks a thumbnail we unhide #modal-view and append an img with the same src
const modalView = document.querySelector('#modal-view');
function onThumbnailClick(event) {
  const image = createImage(event.currentTarget.src);
  //disable scroll on page while modal is active
  document.body.classList.add('no-scroll');
  //set modal box to the top of viewport not the screen
  modalView.style.top = window.pageYOffset + 'px';
  modalView.appendChild(image);
  modalView.classList.remove('hidden');
}

//when user clicks on modal we close the modal
function onModalClick() {
  document.body.classList.remove('no-scroll');
  modalView.classList.add('hidden');
  modalView.innerHTML = '';
}

modalView.addEventListener('click', onModalClick);