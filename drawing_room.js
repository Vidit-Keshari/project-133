status = "";
img = "";
object = [];

function preload() {
    img = loadImage("drawing_room.png");
}

function setup() {
    canvas = createCanvas(600, 430);
    canvas.position(375, 270);
    objectDetector = ml5.objectDetector('cococssd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: detecting objects";
}

function draw() {
    image(img, 0, 0, 500, 430);
    if(status != "") {
        for(i = 0; i < object.length; i++) {
            confidence = object[i].confidence;
            percent = floor(confidence * 100);
            label = object[i].label;
            x = objecs[i].x;
            y = object[i].y;
            width = object[i].width;
            height = object[i].height;
            fill('#FF0000');
            text(label, x, y);
            noFill();
            stroke('#FF0000');
            rect(x, y, width, height);
            noStroke()
        }
    }
    
}

function modelLoaded() {
    console.log("model Loaded Successfully");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error();
    }
    console.log(results);
    object = results;
}