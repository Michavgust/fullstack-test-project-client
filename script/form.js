
function validate() {
    let name = document.querySelector('.name');
    let phone = document.querySelector('.phone');
    let error_name = document.querySelector('.empty-error-name');
    let error_phone = document.querySelector('.empty-error-phone');
    if(name.value.trim() === '') {
        name.style.border = '1px solid #F87474';
        error_name.style.visibility = 'visible';
    }
    else {
        name.style.border = '1px solid #E6E6E6';
        error_name.style.visibility = 'hidden';
        
    }

    if(phone.value.trim() === '') {
        phone.style.border = '1px solid #F87474';
        error_phone.style.visibility = 'visible';
    }
    else {
        phone.style.border = '1px solid #E6E6E6';
        error_phone.style.visibility = 'hidden';
    }
}

// document.querySelector('.name').forEach(el => {
//     if(el.innerHTML.trim() === '') {
//         el.style.border = '1px solid red';
//         document.querySelector('.error').style.visibility = 'visible';
//     }
// })


let submit = document.querySelector('.submit');
let personal_data = document.querySelector('.personal_data');
let user_data = document.querySelector('.user-data');

personal_data.addEventListener('click', () => {
    if (personal_data.checked) {
        submit.style.background = 'rgba(24, 197, 118, 1)';
    }
    else {
        submit.style.background = 'rgba(24, 197, 118, 0.5)';
    }
});


user_data.addEventListener('change', validate);
submit.addEventListener('click', validate);
