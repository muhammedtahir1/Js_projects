// let eye = document.getElementById('eye')
// let main = document.querySelector('main')

// document.querySelector('body').addEventListener('mousemove', (event) => {
//   // console.log(event.x, event.y);

//   // eye.style.top = `${event.y}px`
//   // eye.style.left = `${event.x}px`
//   eye.style.top = `${event.clientY}px`
//   eye.style.left = `${event.clientX}px`
// })


let eyeball1 = document.getElementById("eyeball1")
let body = document.querySelector('body')

body.addEventListener('mousemove', (event) => {
  // console.log(event.x)
  eyeball1.style.top = `${event.y}px`
  eyeball1.style.left = `${event.x}px`
})

// let eyeball2 = document.getElementById("eyeball2")

// document.querySelector('body').addEventListener('mousemove', (event) => {
//   // console.log(event.x)
//   eyeball1.style.left = `${event.x}px`
//   eyeball1.style.top = `${event.y}px`
// })