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

const inputToDo = document.querySelector('[name="name-todo"]');
const toDoTemplate = document.querySelector('#todo-item').content.querySelector('.tasks__item');
const tasks = document.querySelector('.tasks');
const addTaskButton = document.querySelector('[name="add-new-task"]')
const addTaskForm = document.querySelector('[name="add-task"]')

const toDoList = [
  {
    title: 'Work BITCH!'
  },
]

const createElement = (item) => {
  const toDoItem = toDoTemplate.cloneNode(true);
  const toDoTitle = toDoItem.querySelector('.tasks__title');
  const toDoCheck = toDoItem.querySelector('.btn_action_check')
  const deleteButton = toDoItem.querySelector('.btn_action_delete');
  console.log(toDoTitle);
  toDoTitle.textContent = item.title

  toDoCheck.addEventListener('click', function () {
    toDoCheck.classList.toggle('btn_complete')
  })
  deleteButton.addEventListener('click', () => {
    deleteButton.closest('.tasks__item').remove()
  })

  return toDoItem;
}



const renderItem = (item) => {
  const element = createElement(item);
  tasks.prepend(element);
}

const handlerAddButton = (evt) => {
  evt.preventDefault()

  const toDoItem = {
    title: inputToDo.value,
  }

  renderItem(toDoItem);

  addTaskForm.reset();
}

toDoList.forEach(renderItem);

addTaskForm.addEventListener('submit', handlerAddButton);

const handleDeleteButton = (evt) => {
  evt.target.closest('.card').remove()
}
