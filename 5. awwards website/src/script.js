// Smooth scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('body'),
  smooth: true
});

// Custom cursor

const cursor = document.querySelector('#cursor');

function customCursor() {
  window.addEventListener('mousemove', (event) => {
    // console.log(event.clientX, event.clientY);
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`
  })
}

customCursor();