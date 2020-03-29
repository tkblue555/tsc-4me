// Import stylesheets
import './style.css';

function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

//document.body.textContent = greeter(user);

//Compiling your code # 

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
//appDiv.innerHTML = '<h1>' + greeter(user) + '</h1>';
appDiv.innerHTML =  greeter(user) ;

//appDiv.innerHTML = '<h1>Hello World</h1>';