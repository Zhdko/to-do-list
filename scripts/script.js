$(document).ready(function() {
	$('.header__burger').click(function(){
        $('.header__burger').toggleClass('open-menu');
        $('.header__navigation').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});

$(document).ready(function() {
	$('.claim-link').click(function(){
        $('.form').toggleClass('form_active');
        $('.page').toggleClass('page__shadow');
	});
});

const popup = document.querySelector('.popup');
const addTask = document.querySelector('.btn_action_add');
const closeButton = document.querySelector('.btn_action_close');
const taskName = document.querySelector('.add-tasks__input');
const taskTitle = document.querySelector('.popup__text_type_task');

taskTitle.value = taskName.value

function togglePopup() {
  popup.classList.toggle('popup_opened');
}

addTask.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);

let tasksContainer = document.querySelector('.tasks');
let addButton = document.querySelector('.form__submit-btn_action_add');
let submitButton = document.querySelector('.btn_action_submit')

