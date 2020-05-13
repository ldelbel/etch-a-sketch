// variables and divs
var body = document.querySelector('body');
var container = document.createElement('div');
container.className = 'container';
var content = document.createElement('div');
content.className = 'content';
var sidePanel = document.createElement('div');
sidePanel.className = 'sidepanel';
var title = document.createElement('div');
title.className = 'title';
var clearDiv = document.createElement('div');
clearDiv.className = 'clear';
var numberButtonDiv = document.createElement('div');
numberButtonDiv.className = 'number';
var optionButtonDiv = document.createElement('div');
optionButtonDiv.className = 'option';
var titleContent = document.createTextNode('Etch-a-Sketch');
var squareNumber = 2070; //initial value to number of squares on the board
var textLeftP = document.createElement('p');
var textRightP = document.createElement('p');
var textLeft = document.createTextNode('Gray \n Scale');
var textRight = document.createTextNode('Random \n Colors');
document.body.style = "white-space: pre;";
//rounded switch
var label = document.createElement('label');
var input = document.createElement('input');
var span = document.createElement('span');

input.setAttribute('type','checkbox');
label.className = 'switch';
span.className = 'slider round';
console.log(input, label, span);

// div appends and div tree construction
body.appendChild(content);
body.appendChild(sidePanel);
content.appendChild(container);
sidePanel.appendChild(title);
sidePanel.appendChild(numberButtonDiv);
sidePanel.appendChild(optionButtonDiv);
sidePanel.appendChild(clearDiv);
title.appendChild(titleContent);
optionButtonDiv.appendChild(textLeftP);
optionButtonDiv.appendChild(label);
optionButtonDiv.appendChild(textRightP);
label.appendChild(input);
label.appendChild(span);
textRightP.appendChild(textRight);
textLeftP.appendChild(textLeft);



// creating the self-adjusting whiteboard made of divs with grid
for(let i = 0; i < squareNumber; i++) {
  let io = Math.ceil(Math.sqrt(i));
  let fractions = '';
  for(var a = 0; a < io; a++) {
  fractions += '1fr ';
  }
  container.style.gridTemplateColumns = fractions;
  container.style.gridTemplateRows = fractions;
  var square = document.createElement('div');
  container.appendChild(square);
  square.className = 'square';
  square.id = `${i}`;
}

// creating buttons

// number buttons
for(let i = 0; i < 4; i++) {
  let button = document.createElement('button');
  button.className = `button${i}`;
  numberButtonDiv.appendChild(button);
  if (i == 0) {
    button.textContent = '144';
  } else if (i == 1) {
    button.textContent = '650';
  } else if (i == 2) {
    button.textContent = '1024';
  } else {
    button.textContent = '2070';
  }
}

for(let i = 0; i < 1; i++) { //I can't do this without the for statement. It gives and error, saying I can't put a button inside a div
  let button = document.createElement('button');
  button.className = `button${i}`;
  clearDiv.appendChild(button);
  button.textContent = 'Clear';
}

// fuctions to work on drawings
let squares = document.querySelectorAll('.square');
let color = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;

for (let i = 0; i < squares.length; i++) {
  let each = document.getElementById(`${i}`);
  let color = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
  each.onmouseover = function () {
  each.style.backgroundColor = color;
}
}


