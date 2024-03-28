let nightLight = document.querySelector('.night-light'),
    body = document.querySelector('body')

nightLight.addEventListener('click', () => {
    body.classList.toggle('active')
})