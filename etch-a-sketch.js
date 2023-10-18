console.log("`Let's build an awesome project!!!`");

//create div
const container = document.querySelector('#grid-container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the content!';

container.appendChild(content);

//make click function 
// add 64x64 grid