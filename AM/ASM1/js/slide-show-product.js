let listDivImg = document.querySelectorAll('.list-img-show .img-show-mini')
        let next = document.querySelector('.arrow-right')
        let prev = document.querySelector('.arrow-left')
        let imgWrap = document.querySelector('.image-show-product')

        let currentIndex = 0

        setCurrent(currentIndex)

        function setCurrent(index) {
            currentIndex = index
            imgWrap.style.backgroundImage = listDivImg[currentIndex].style.backgroundImage

            // remove all active img
            listDivImg.forEach((item) => {
                item.classList.remove('active-img-show')
            })

            // set active
            listDivImg[currentIndex].classList.add('active-img-show')
        }

        listDivImg.forEach((listDivImg, index) => {
            listDivImg.addEventListener('click', (e) => {
                setCurrent(index)
            })
        })

        next.addEventListener('click', () => {
            if (currentIndex == listDivImg.length - 1) {
                currentIndex = 0
            } else currentIndex++

            setCurrent(currentIndex)
        })

        prev.addEventListener('click', () => {
            if (currentIndex == 0) currentIndex = listDivImg.length - 1
            else currentIndex--

            setCurrent(currentIndex)
        })