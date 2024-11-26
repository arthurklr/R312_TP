document.querySelectorAll('.rectangle').forEach(e => {
    e.addEventListener('click', couleur)
    function couleur() {
        this.classList.toggle('noir')
    }
})

let firstRec = document.querySelector('.rectangle:first-child')
firstRec.addEventListener('click', bouge)
function bouge() {
    this.style.transform = `translate(${Math.random() * 1000}px)`
}

let scndRec = document.querySelector('.rectangle:nth-child(2)')
scndRec.addEventListener('click', autrecote)
function autrecote() {
    this.classList.toggle('autrecote')
}

let frthRec = document.querySelector('.rectangle:last-child')
frthRec.addEventListener('click', autrecote)
function autrecote() {
    this.classList.toggle('autrecote')
}
