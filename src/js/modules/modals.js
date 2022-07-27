const modal = () => {

    let ifShown = false;

    function modalTrigger(buttonSelector, modalSelector, closeButtonSelector, deleteTrigger = false) {
        
        const buttonsModal = document.querySelectorAll(buttonSelector),
          modalEngineer = document.querySelector(modalSelector),
          close = document.querySelectorAll(closeButtonSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scroll = calcScroll();
        
        function modalOff() {
            windows.forEach(window => {
                window.style.display='none';
            });

            modalEngineer.style.display='none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `${scroll}px`;            
        }
        
        buttonsModal.forEach( btn => {
            btn.addEventListener('click', (e) => {

                ifShown = true;

                e.preventDefault();

                windows.forEach(window => {
                    window.style.display='none';
                    window.classList.add('animated', 'fadeIn');
                });

                modalEngineer.style.display='block';
                document.body.style.overflow = 'hidden';   
                document.body.style.marginRight = `${scroll}px`;    


                if (deleteTrigger == true) {
                    btn.remove();
                }
            });
        });
        
        close.forEach(item => {
            item.addEventListener('click', () => {
                modalOff();
                document.body.style.marginRight = '0px';
            });
        });
        
        modalEngineer.addEventListener('click', (e) => {
            if (e.target === modalEngineer) {
                modalOff();
                document.body.style.marginRight = '0px';
            }
        });

        


    }

    function showModalByTime (modalSelector, time) {

        function checkModal () {
            document.querySelectorAll('[data-modal]').forEach(item => {
                if (window.getComputedStyle(item).display != 'none') {
                    clearTimeout(timeout);   
                }
            });
        }
        setTimeout(checkModal, time - 1);
        
        let timeout = setTimeout( () => {
            document.querySelector(modalSelector).style.display='inline-block';
            document.querySelector(modalSelector).style.overflow = 'hidden';


        }, time);

    }

    function calcScroll () {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';

        document.body.append('div');

        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();
        return scrollWidth;
    }

    function openModalInTheEnd (triggerSelector, modalSelector) {
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight
          );
        
        function handleScroll() {
            if (!ifShown && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
                document.querySelector(modalSelector).style.display='block';
                document.body.style.overflow = 'hidden';   
                document.body.style.marginRight = `${scroll}px`; 
                window.removeEventListener('scroll', handleScroll);
                document.querySelector(triggerSelector).remove();
            }
            
        }

        window.addEventListener('scroll', handleScroll);

    }


    openModalInTheEnd('.fixed-gift', '.popup-gift');
    modalTrigger('.button-design', '.popup-design', '.popup-close');
    modalTrigger('.button-consultation', '.popup-consultation', '.popup-close');
    modalTrigger('.fixed-gift', '.popup-gift', '.popup-close', true);
    // showModalByTime('.popup-consultation', 5000);
};

export default modal;