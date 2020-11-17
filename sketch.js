var pen;
function preload() {
}

function setup() {
    canvas = createCanvas(300, 300);
    background("white");
    pen = createSprite(mouseX,mouseY,4,4);
    glitterGroup = new Group();
}


function draw() {
    text("Draw here", 20,20)
    if(keyDown("ctrl")){
        
        pen.x = mouseX;
        pen.y = mouseY;
    }
    if(frameCount%10 === 0 && keyDown("ctrl")){
        glitter = createSprite(mouseX-10,mouseY-10,2,2);
        glitterGroup.add(glitter);
    }
    pen.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
    glitterGroup.setColorEach(rgb(random(0,255),random(0,255),random(0,255)));
    drawSprites();
}
