function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

const addEmployeeButton = document.querySelector('form input:last-child');
const removeEmployeesButton = document.querySelector('a')
const ul = document.querySelector('.employee-list');

addEmployeeButton.addEventListener('click', event => {
    addNewElementAsLi();
    document.querySelector('form input').value = "";
  })

  removeEmployeesButton.addEventListener('click', event => {
    let list = document.querySelectorAll('ul.employee-list li')
    list.forEach(function(element) {
      element.remove();
    });
  });

function retrieveEmployeeInformation() {
  return document.querySelector('form input').value;
}

function addNewElementAsLi() {
  let info = retrieveEmployeeInformation();
  let li = document.createElement('li');
  li.innerHTML = (info);
  ul.appendChild(li);
}


function addNewLiOnClick() {
  
}

function clearEmployeeListOnLinkClick() {

}