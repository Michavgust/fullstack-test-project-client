import "../pages/form.html";
// import "../style/scss/form.scss";
import '../style/scss/styles.scss'

function validate() {
    let input = document.querySelector('.form__input');
    // let phone = document.querySelector('.phone');
    let error = document.querySelector('.form__error');
    // let error_phone = document.querySelector('.empty-error-phone');

    if(input.value.trim() === '') {
        // input.style.border = '1px solid #F87474';
        error.style.visibility = 'visible';
    }
    else {
        // input.style.border = '1px solid #E6E6E6';
        error.style.visibility = 'hidden';
        
    }

    // if(phone.value.trim() === '') {
    //     phone.style.border = '1px solid #F87474';
    //     error_phone.style.visibility = 'visible';
    // }
    // else {
    //     phone.style.border = '1px solid #E6E6E6';
    //     error_phone.style.visibility = 'hidden';
    // }
}

// document.querySelector('.name').forEach(el => {
//     if(el.innerHTML.trim() === '') {
//         el.style.border = '1px solid red';
//         document.querySelector('.error').style.visibility = 'visible';
//     }
// })


let submit = document.querySelector('.form__footer-submit');
let checkbox = document.querySelector('.form__footer-checkbox');
let field = document.querySelector('.form__data');

checkbox.addEventListener('click', () => {
    submit.disabled = !checkbox.checked;
});


// field.addEventListener('change', validate);
submit.addEventListener('click', validate);
