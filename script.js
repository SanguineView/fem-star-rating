const ratingBtns = document.querySelectorAll('.ratingSelect')

function ratingSelection(event) {
    let rating = 0
    const ratingContainer = document.getElementById('starsContainer')
    ratingContainer.innerHTML = ''
    ratingBtns.forEach((item) => {
        item.classList.remove('selected')
    })
    event.target.classList.add('selected')
    rating = event.target.innerText

    for (let i = 1; i <= rating; i++) {
        starEl = document.createElement('img')
        starEl.src = '/images/icon-star.svg'
        starEl.className = 'ratingSelect'
        ratingContainer.append(starEl)
    }
}

ratingBtns.forEach((button) => {
    button.addEventListener('click', ratingSelection)
})