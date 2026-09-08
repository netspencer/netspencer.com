import './style.css'

const year = document.querySelector('[data-year]')
if (year) year.textContent = String(new Date().getFullYear())
