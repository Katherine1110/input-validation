// import './styles'
// const refs = {
//     listItemCash: document.querySelector('.list-item.cash'),
//     listItemCard: document.querySelector('.list-item.card'),
//     inputCash: document.querySelector('#cash'),
//     inputCard: document.querySelector('#card'),
//     listItemTakeAway: document.querySelector('.list-item.delivery-type-takeAway'),
//     listItemCourier: document.querySelector('.list-item.delivery-type-courier'),
//     listItemNewPostDepartment: document.querySelector('.list-item.delivery-type-newPostDepartment'),
//     listItemNewPostCourier: document.querySelector('.list-item.delivery-type-newPostCourier'),
//     inputTakeAway: document.querySelector('#takeAway'),
//     inputCourier: document.querySelector('#courier'),
//     inputNewPostDepartment: document.querySelector('#newPostDepartment'),
//     inputNewPostCourier: document.querySelector('#newPostCourier'),
//     validationForm: document.querySelector('.validation-form'),
//     submitBtn: document.querySelector('.submitBtn'),
//     formInput: document.querySelectorAll('.form-input'),
//     formLabel: document.querySelectorAll('.form-label'),
//     inputPhone: document.querySelector('.phone'),
//     inputEmail: document.querySelector('.email'),
//     inputCity: document.querySelector('.city'),
//     inputStreet: document.querySelector('.street'),
//     inputUsername: document.querySelector('.username'),
// }

// refs.inputCash.addEventListener('change', onInputPaymentChange)
// refs.inputCard.addEventListener('change', onInputPaymentChange)
// refs.inputNewPostDepartment.addEventListener('change', onInputDeliveryChange)
// refs.inputNewPostCourier.addEventListener('change', onInputDeliveryChange)
// refs.inputCourier.addEventListener('change', onInputDeliveryChange)
// refs.inputTakeAway.addEventListener('change', onInputDeliveryChange)
// refs.validationForm.addEventListener('submit', onSubmitBtnClick)

// function onInputPaymentChange(event){
//     let target = event.target;
//     switch(target.id){
//         case 'cash':
//             refs.listItemCash.classList.add('chosen')
//             refs.listItemCard.classList.remove('chosen')
//             break;
//         case 'card':
//             refs.listItemCard.classList.add('chosen')
//             refs.listItemCash.classList.remove('chosen')
//             break;
//     }
//     console.log(target.value);
// }

// function onInputDeliveryChange(event){
// let target = event.target;
// switch(target.id){
//     case 'newPostDepartment':
//             refs.listItemNewPostDepartment.classList.add('chosen');
//             refs.listItemNewPostCourier.classList.remove('chosen');
//             refs.listItemCourier.classList.remove('chosen');
//             refs.listItemTakeAway.classList.remove('chosen');
//             break;
//         case 'newPostCourier':
//             refs.listItemNewPostCourier.classList.add('chosen');
//             refs.listItemNewPostDepartment.classList.remove('chosen');
//             refs.listItemCourier.classList.remove('chosen');
//             refs.listItemTakeAway.classList.remove('chosen');
//             break;
//         case 'courier':
//             refs.listItemCourier.classList.add('chosen');
//             refs.listItemTakeAway.classList.remove('chosen');
//             refs.listItemNewPostDepartment.classList.remove('chosen');
//             refs.listItemNewPostCourier.classList.remove('chosen');
//             break;
//         case 'takeAway':
//             refs.listItemTakeAway.classList.add('chosen');
//             refs.listItemCourier.classList.remove('chosen');
//             refs.listItemNewPostDepartment.classList.remove('chosen');
//             refs.listItemCourier.classList.remove('chosen');
//             break;
// }
// }

// function onSubmitBtnClick(event){
//     event.preventDefault()

//     for (let i = 0; i < refs.formInput.length; i++) {
//         if(!refs.formInput[i].value){
//             refs.inputEmail.setAttribute("placeholder", 'Введите email')
//             refs.inputCity.setAttribute("placeholder", 'Введите название города')
//             refs.inputStreet.setAttribute("placeholder", 'Название улмцы, № дома, № квартиры')
//             refs.inputUsername.setAttribute("placeholder", 'Введите имя')
//             refs.inputPhone.setAttribute("placeholder", 'Введите номер телефона (123)-456-78-90')
//             refs.formInput[i].style.borderColor="red"
//             refs.formLabel[i].style.visibility="hidden"
//         }
//         if(refs.formInput[i].value){
//             refs.formInput[i].style.borderColor="#87B9E7"
//         }
//     }

// }
