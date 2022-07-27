const sliders = (slidesSelector, dir, prevArrow, nextArrow) => {
    const slides = document.querySelectorAll(slidesSelector);

    let slideCounter = 0;

    function resetAnimations(item) {
        item.style.display = 'none';  
        item.classList.remove('animated', 'fadeInLeft');
        item.classList.remove('animated', 'fadeInRight');
    }

    function changeSlidesLeft () {

        if (slideCounter < 0) {
            slideCounter = (slides.length - 1);
        }

        slides.forEach(slide => {
            resetAnimations(slide);
        });
        
        slides[slideCounter].classList.add('animated', 'fadeInLeft');
        slides[slideCounter].style.display = 'block';
        
    }

    function changeSlidesRight () {
        if (slideCounter >= slides.length) {
            slideCounter = 0;
        }

        slides.forEach(slide => {
            resetAnimations(slide); 
        });
        if (dir == 'vertical') {
            slides[slideCounter].classList.add('animated', 'fadeInUp');
            slides[slideCounter].style.display = 'block';
        } else {
            slides[slideCounter].classList.add('animated', 'fadeInRight');
            slides[slideCounter].style.display = 'block';
        }
        

    }
    //initialize slider
    slides.forEach(slide => {
        resetAnimations(slide);
    });
    slides[slideCounter].style.display = 'block';

    //slider on repeat + stops when mouse enters the parent div's zone
    function interval () {
            slideCounter += 1;
            changeSlidesRight();
    }

    let timer = setInterval(interval, 4000);

    slides.forEach(slide => {

        slide.parentNode.addEventListener('mouseenter', () => {
            clearInterval(timer);
            timer = null;
        });
        slide.parentNode.addEventListener('mouseleave', () => {
            // if (!timer) {
                clearInterval(timer);
                timer = null;
                timer = setInterval(interval, 3000);
            // }
        });
    });


    try {
        const prev = document.querySelector(prevArrow),
              next = document.querySelector(nextArrow);

              prev.addEventListener('click', () => {
                slideCounter -= 1;
                changeSlidesLeft();
        
              });
              next.addEventListener('click', () => {
                slideCounter += 1;
                changeSlidesRight();
              });
    } catch (e) {}

};

export default sliders;