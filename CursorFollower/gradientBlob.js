

const blob = document.getElementById("blob");
document.body.onpointermove = e => {
const { clientX, clientY } = e;

  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, {
    duration: 3000,
    fill: "forwards"
  })

}
