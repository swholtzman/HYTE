
// window.addEventListener('scroll', () => {
//     const navbar = document.getElementById('followerPage');
//     const scrollThreshold = 800;

//     if (window.scrollY > scrollThreshold) {
//         navbar.classList.add('black-text');
//     } else {
//         navbar.classList.remove('black-text');
//     }
// });



  document.addEventListener('DOMContentLoaded', function() {
    const svgMenu = document.querySelector('.boxMenu');
    svgMenu.addEventListener('click', function() {
      svgMenu.classList.toggle('active');
    });
  });

