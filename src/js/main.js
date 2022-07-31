import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import showMoreStyles from './modules/showMoreStyles';
import calculator from './modules/calc';
import filter from './modules/filter';
import imageHover from './modules/imageHover';
import accordion from './modules/accordion';

window.addEventListener('DOMContentLoaded', () => {

    let calcData = {
        sizeBlock: '',
        materialBlock: '',
        optionsBlock: '',
        promocode: false
    };

    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms(calcData);
    mask('[name="phone"]');
    showMoreStyles('.button-styles', '.styles-2', '.styles .row');
    calculator('#size', '#material', '#options', '.promocode', '.calc-price', calcData);
    filter();
    imageHover('.sizes-block');
    accordion('.accordion-heading');
    
});