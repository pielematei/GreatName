function setup() {
  createCanvas(250, 250);

  textSize(20);
  enter_txt = text('Enter your name:', 0, 20);

  input = createInput();
  input.position(10, 40);

  button = createButton('Submit your great name');
  button.position(10, 70);
  button.mousePressed(message);

  greeting = createElement('h3', ' *O* ');
  greeting.position(10, 100);
}

function message() {
  const name = input.value();
  greeting.html(name + " is such a great name. (;");
  
}