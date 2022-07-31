import {postData} from '../services/requests';

function forms (calcData) {
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]');
    // onlyNumbers('input[name="user_phone"]');

    //appending the calc results into the form - variable for calc result
    let price = document.querySelector('.calc-price');

    const message = {
        success: 'Ваши данные успешно отправлены',
        loading: 'Ваши данные загружаются',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    function clearInputs () {
        inputs.forEach(input => {
            input.value = '';
        });
    }

    upload.forEach(item => {
        item.addEventListener('input', () => {
            let dots;
            let arr = item.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.';
            let result = arr[0].substring(0, 6) + dots + arr[1];


            item.previousElementSibling.textContent = result;
        }); 
    });

    forms.forEach( form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.parentNode.appendChild(statusMessage);

            form.classList.add('animated', 'fadeOutUp');
            setTimeout( ()=> {
                form.style.display = 'none';
            }, 400);

            let statusImage = document.createElement('img');
            statusImage.setAttribute('src', message.spinner);
            statusImage.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImage);

            let statusText = document.createElement('div');
            statusText.textContent = message.loading;
            statusMessage.append(statusText);


            const data = new FormData (form);

            if (form.classList.contains('calc_form')) {
                for (let key in calcData) {
                    data.append(key, calcData[key]);
                }
            }

            let api;
            form.closest('.popup-design') || form.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);

            postData(api, data)
                .then(response => {
                    console.log(response);
                    statusText.textContent = message.success;
                    statusImage.setAttribute('src', message.ok);
                })
                .catch( ()=> {
                    statusText.textContent = message.failure;
                    statusImage.setAttribute('src', message.fail);
                })
                .finally( ()=> {
                    clearInputs();
                    setTimeout( () => {
                        statusMessage.remove();
                        form.style.display = 'block';
                        form.classList.remove('fadeOutUp');

                        form.classList.add('fadeInUp');
                    }, 5000);
                });
        });
    });    
}


export default forms;