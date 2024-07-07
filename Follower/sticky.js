
// window.addEventListener('scroll', () => {
//     const navbar = document.getElementById('followerPage');
//     const scrollThreshold = 800;

//     if (window.scrollY > scrollThreshold) {
//         navbar.classList.add('black-text');
//     } else {
//         navbar.classList.remove('black-text');
//     }
// });



// document.addEventListener('DOMContentLoaded', function() {
//   const svgMenu = document.querySelector('.boxMenu');
//   svgMenu.addEventListener('click', function() {
//     svgMenu.classList.toggle('active');
//   });
// });


// test for backdrop filter support
document.addEventListener('DOMContentLoaded', function () {
  var testElement = document.createElement('div');
  testElement.style.backdropFilter = 'blur(3px)';

  if (testElement.style.backdropFilter !== 'blur(3px)') {
    document.body.classList.add('no-backdrop-filter');
  }
});


// play video
document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementsByClassName('landingPageVideo')[0];
  if (video) {
    video.play();
  }
});

document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'visible') {
    var video = document.getElementsByClassName('landingPageVideo')[0];
    if (video) {
      video.play();
    }
  }
});

document.getElementsByClassName('landingPageVideo')[0].addEventListener('touchstart', function(e) {
  e.preventDefault();
  this.play();
});



