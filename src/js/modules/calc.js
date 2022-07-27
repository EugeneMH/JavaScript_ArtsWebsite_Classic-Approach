
const calculator = (size, material, options, promocode, price, calcData) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          priceBlock = document.querySelector(price);
    let sum = 0;

    // function updateObject(selector, key, data) {
    // }
    
    const calcPrice = () => {

       switch (sizeBlock.value) {
           case '1000': calcData.sizeBlock = '40x50';
           break;
           case '1500': calcData.sizeBlock = '50x70';
           break;
           case '2000': calcData.sizeBlock = '70x70';
           break;
           case '2500': calcData.sizeBlock = '70x100';
           break;
       }

       switch (materialBlock.value) {
        case '1': calcData.materialBlock = 'Холст из волокна';
        break;
        case '1.2': calcData.materialBlock = 'Льняной холст';
        break;
        case '1.7': calcData.materialBlock = 'Холст из натурального хлопка';
        break;
       }

       switch (optionsBlock.value) {
        case '500': calcData.optionsBlock = 'Покрытие арт-гелем';
        break;
        case '1000': calcData.optionsBlock = 'Экспресс-изготовление';
        break;
        case '800': calcData.optionsBlock = 'Доставка готовых работ';
        break;
       }

       promocodeBlock.value == 'IWANTPOPART' ? calcData.promocode = true : calcData.promocode = false;

        sum = Math.round(+sizeBlock.value * +materialBlock.value + (+optionsBlock.value));
        // console.log(sum);
        if (sizeBlock.value == '' || materialBlock.value == '') {
            priceBlock.textContent = 'Пожалуйста, выберите размер и материал';
        } else if (promocodeBlock.value == 'IWANTPOPART' && sizeBlock.value != '' && materialBlock.value != '0') {
            priceBlock.textContent = Math.round(sum * 0.7);
        } else {
            priceBlock.textContent = `${sum}`;
        }

        // console.log(calcData);
        
    };

    sizeBlock.addEventListener('change', calcPrice);
    materialBlock.addEventListener('change', calcPrice);
    optionsBlock.addEventListener('change', calcPrice);
    promocodeBlock.addEventListener('input', calcPrice);

};

export default calculator;
