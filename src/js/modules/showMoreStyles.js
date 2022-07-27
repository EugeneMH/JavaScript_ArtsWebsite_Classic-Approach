// import browserSync from "browser-sync";
import {requestData} from '../services/requests';

const showMoreStyles = (triggerSelector, cardsSelector, wrapperSelector) => {
    const btn = document.querySelector(triggerSelector),
          cards = document.querySelectorAll(cardsSelector),
          wrapper = document.querySelector(wrapperSelector);
           
    //version without the server - commented out
    // cards.forEach(card => {
    //     card.classList.add('animated', 'fadeInUp');
    // });

    // btn.addEventListener('click', () => {
    //     cards.forEach( card => {
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //     });
    //     btn.remove();
    // });
    btn.addEventListener('click', ()=> {
        requestData('http://localhost:3000/styles')
        .then(res => createCards(res));
    });


    function createCards(responses) {
        responses.forEach(item => {
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
            <div class="styles-block">
                <img src=${item.src} alt="styles">
                <h4>${item.title}</h4>
                <a href=${item.link}>Подробнее</a>
            </div>
            `;

            wrapper.appendChild(card);
        });
    }

};

export default showMoreStyles;

