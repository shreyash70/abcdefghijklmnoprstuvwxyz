function preload() {
    

}

function setup() {
    canvas = createCanvas(640,480);
    canvas.position(150,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    
    fill(0,255,0);
    stroke(0,8,0);
    rect(90 , 40 , 460 , 20);
    rect(90 , 420 , 460 , 20);
    rect(40 , 90 , 20 , 300);
    rect(580 , 90 , 20 , 300);
    image(video, 150, 65, 350, 350);
    fill(255,0,0);
    stroke(1,0,0);
    circle(50, 50, 80);
    circle(50, 430, 80);
    circle(590,50, 80);
    circle(590,430 , 80);
    tint(tint_color);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value
}