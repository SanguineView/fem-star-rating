// you are now declared
const ratingBtns = document.querySelectorAll('.ratingSelect')
const submitRatingBtn = document.getElementById('submit')
const ratingContainer = document.getElementById('starsContainer')
const ratingWindow = document.getElementById('ratingWindow')
const messageWindow = document.getElementById('messageWindow')

let rating = 0

// so...how'd we do on a scale of 1 - 5?
function ratingSelection(event) {
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

    return rating
}

// thank you, come again
function ratingSubmit() {
    // move rating window
    ratingWindow.classList.add('hide')
    // populate message in message window
    document.getElementById('choiceMessage').innerText = `You selected ${rating} out of 5`
    // move message window
    messageWindow.classList.add('show')
}

// heads up for anything pushed
ratingBtns.forEach((button) => {
    button.addEventListener('click', ratingSelection)
})

submitRatingBtn.addEventListener('click', ratingSubmit)