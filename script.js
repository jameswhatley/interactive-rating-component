const submitBtn = document.getElementById('submitBtn');
const ratingList = document.getElementById('ratingList');
const userScore = document.getElementById('userScore');
const ratingComp = document.querySelector('.rating');
const thanksComp = document.querySelector('.thanks');
const ratingOptions = document.querySelectorAll('.rating-number');

submitBtn.addEventListener('click', () => {
    ratingComp.classList.add('hide');
    thanksComp.classList.remove('hide');
});

ratingList.addEventListener('click', (e) => {
    if (e.target.classList.contains("rating-number")) {
        for(const btn of ratingOptions) {
            if (btn.classList.contains('active')) {
                btn.classList.remove('active')
            }
        }
        e.target.classList.add('active')
        userScore.textContent = e.target.textContent;
    }
});