import './style.css'

const year = document.querySelector('[data-year]')
if (year) year.textContent = String(new Date().getFullYear())

const place = document.querySelector('.place')
if (place) {
  document.addEventListener('click', (event) => {
    if (place.open && !place.contains(event.target)) place.open = false
  })
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && place.open) {
      place.open = false
      place.querySelector('summary')?.focus()
    }
  })
}
