const accordion = (triggerSelector) => {
    const btns = document.querySelectorAll(triggerSelector);


    btns.forEach(button => {
        button.addEventListener('click', function () {
            btns.forEach(item => {
                item.classList.remove('active-header');
                item.nextElementSibling.classList.remove('active');
                item.nextElementSibling.style.maxHeight = '0px';
            });

            this.classList.toggle('active-header');
            this.nextElementSibling.classList.toggle('active');

            
            if (this.classList.contains('active-header')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });

};

export default accordion;