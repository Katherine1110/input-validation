import './styles'
const refs = {
    listItemCash: document.querySelector('.list-item.cash'),
    listItemCard: document.querySelector('.list-item.card'),
    inputCash: document.querySelector('#cash'),
    inputCard: document.querySelector('#card'),
    listItemTakeAway: document.querySelector('.list-item.delivery-type-takeAway'),
    listItemCourier: document.querySelector('.list-item.delivery-type-courier'),
    listItemNewPostDepartment: document.querySelector('.list-item.delivery-type-newPostDepartment'),
    listItemNewPostCourier: document.querySelector('.list-item.delivery-type-newPostCourier'),
    inputTakeAway: document.querySelector('#takeAway'),
    inputCourier: document.querySelector('#courier'),
    inputNewPostDepartment: document.querySelector('#newPostDepartment'),
    inputNewPostCourier: document.querySelector('#newPostCourier'),
    validationForm: document.querySelector('.validation-form'),
    submitBtn: document.querySelector('.submitBtn'),
    formInput: document.querySelectorAll('.form-input'),
}

refs.inputCash.addEventListener('change', onInputPaymentChange)
refs.inputCard.addEventListener('change', onInputPaymentChange)
refs.inputNewPostDepartment.addEventListener('change', onInputDeliveryChange)
refs.inputNewPostCourier.addEventListener('change', onInputDeliveryChange)
refs.inputCourier.addEventListener('change', onInputDeliveryChange)
refs.inputTakeAway.addEventListener('change', onInputDeliveryChange)
refs.validationForm.addEventListener('submit', onSubmitBtnClick)

function onInputPaymentChange(event){
    let target = event.target;
    switch(target.id){
        case 'cash':
            refs.listItemCash.classList.add('chosen')
            refs.listItemCard.classList.remove('chosen')
            break;
        case 'card':
            refs.listItemCard.classList.toggle('chosen')
            refs.listItemCash.classList.remove('chosen')
            break;
    }
    console.log(target);
}

function onInputDeliveryChange(event){
let target = event.target;
switch(target.id){
    case 'newPostDepartment':
            refs.listItemNewPostDepartment.classList.add('chosen');
            refs.listItemNewPostCourier.classList.remove('chosen');
            refs.listItemCourier.classList.remove('chosen');
            refs.listItemTakeAway.classList.remove('chosen');
            break;
        case 'newPostCourier':
            refs.listItemNewPostCourier.classList.add('chosen');
            refs.listItemNewPostDepartment.classList.remove('chosen');
            refs.listItemCourier.classList.remove('chosen');
            refs.listItemTakeAway.classList.remove('chosen');
            break;
        case 'courier':
            refs.listItemCourier.classList.add('chosen');
            refs.listItemTakeAway.classList.remove('chosen');
            refs.listItemNewPostDepartment.classList.remove('chosen');
            refs.listItemNewPostCourier.classList.remove('chosen');
            break;
        case 'takeAway':
            refs.listItemTakeAway.classList.add('chosen');
            refs.listItemCourier.classList.remove('chosen');
            refs.listItemNewPostDepartment.classList.remove('chosen');
            refs.listItemCourier.classList.remove('chosen');
            break;
}
}

function onSubmitBtnClick(event){
    // event.preventDefault()

    for (let i = 0; i < refs.formInput.length; i++) {
        if(!refs.formInput[i].value){
            refs.formInput[i].setAttribute("placeholder", 'Это поле должно быть заполнено')
            refs.formInput[i].style.borderColor="red"
        }   
    }

    return
}
