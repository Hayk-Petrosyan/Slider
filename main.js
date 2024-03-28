const currentPhoto = document.querySelector('#current-photo')
const prevBtn = document.querySelector('#prev-btn')
const nextBtn = document.querySelector('#next-btn')
const imageLine = document.querySelector('#imageLine')

const photos = [
    './image-1.jpg',
    './image-2.jpg',
    './image-3.jpg',
    './image-4.jpg',
    './image-5.jpg',
    './image-6.jpg'
]

let index = 0

const previousPhoto = () => {
    index--
    if (index < 0) {
        index = photos.length - 1
    }
    updateSlide()
}

prevBtn.addEventListener('click', () => {
    previousPhoto()
})


const nextPhoto = () => {
    index++
    if (index === photos.length) {
        index = 0
    }
    updateSlide()
}

nextBtn.addEventListener('click', () => {
    nextPhoto()
})


function updateSlide() {
    currentPhoto.src = photos[index]
    createImageBar()
}
updateSlide()

function createImageBar() {
    imageLine.innerHTML = ''
    photos.forEach((elem, idx) => {
        let image = document.createElement('img')
        image.className = 'imageBar'
        if (idx == index) {
            image.classList.add('active-photo')
        }

        image.addEventListener('click', () => {
            index = idx;
            updateSlide();
        })

        image.src = elem
        imageLine.append(image)
    })
}