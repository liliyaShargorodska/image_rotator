// let images=["images/dog.jpeg","images/tiger.jpeg","images/panda.jpeg","images/cat.jpeg"];
let images = document.querySelectorAll('.gallery-image');
let i=0;

function updateGallery() {
  for (let image of images) {
    image.classList.remove('active');
  }
  images[i].classList.add('active');
}

function next(){
  if (i == images.length - 1) {
    i = 0;
  } else {
    i++;
  }
  document.getElementById('main-img').src = images[i].querySelector('img').src;
  updateGallery();
}
function prev(){
  if (i == 0) {
    i = images.length - 1;
  } else {
    i--;
  }
  document.getElementById('main-img').src = images[i].querySelector('img').src;
  updateGallery();
}
let to;
function change(){
  to = setInterval(next, 1000);
}
function stop(){
  clearInterval(to);
}
updateGallery();
