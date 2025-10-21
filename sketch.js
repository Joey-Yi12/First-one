let textbox, addBtn, title, poem;


function setup() {
  noCanvas();
  
  let controls = createDiv().addClass('controls');
  title = createP('The Tortured Poets Department');
  poem = createDiv('');
  textbox = createInput('').attribute('type', 'text').parent(controls);
  addBtn = createButton('Add Line').parent(controls);
  
  //title.position(50, random(50))
  
  addBtn.mousePressed( () => {
    let userLine = textbox.value().trim();
    if (!userLine) return;
    textbox.value('');
    
    let Row = createDiv().addClass('poem-row').parent(poem);
    let textSpan = createSpan(userLine).parent(Row);
    let slider = createSlider(0, 360, floor(random(360)), 1).parent(Row)
    
    let applyColor = () => textSpan.style('color', 'hsl(${slider.value()}, 80%, 50%)');
    slider.input(applyColor);
    applyColor()
  })
  
  
}

function draw() {
  background(220);
}
