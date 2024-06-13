

document.addEventListener("DOMContentLoaded", () => {
  const blob = document.getElementById("blob");

  document.body.onpointermove = event => {
      const { clientX, clientY } = event;

      // Use requestAnimationFrame for smooth animation
      requestAnimationFrame(() => {
          blob.style.left = `${clientX}px`;
          blob.style.top = `${clientY}px`;
      });
  };
});

