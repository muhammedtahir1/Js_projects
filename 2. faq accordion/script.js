// Hard coded by King
// let btn = document.getElementById('arrow')
// let hide = document.getElementById('answer')

// let close = document.getElementById('close')

// btn.addEventListener('click', () => {
//   hide.style.display = 'block'
//   btn.style.display = 'none'
//   close.style.display = 'block'
// })

// close.addEventListener('click', () => {
//   hide.style.display = 'none'
//   close.style.display = 'none'
//   btn.style.display = 'block'
// })



const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active')
  })
})