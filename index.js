import greetFullName from './src/greetFullName.js';

const firstNameInput = document.getElementById('first-name');
const middleNameInput = document.getElementById('middle-name');
const lastNameInput = document.getElementById('last-name');
const greeter = document.getElementById('greeter');
const button = document.getElementById('greet-me');

function greetVisitor() {   
    const firstName = firstNameInput.value;
    const middleName = middleNameInput.value;
    const lastName = lastNameInput.value;
    
    const greeting = greetFullName(firstName, middleName, lastName);

    greeter.textContent = greeting;
}

button.addEventListener('click', function(event) {
    event.preventDefault();
    
    greetVisitor();
});







