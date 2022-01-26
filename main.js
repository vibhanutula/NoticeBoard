leftWristX = 0;
RightWristx = 0;
Difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 600);

    canvas = createCanvas(500, 550);
    canvas.position(550, 110);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        RightWristx = results[0].pose.rightWrist.x;
        Difference = floor(leftWristX - RightWristx);
    }
}

function draw(){
    background("#ffc5a1");
    document.getElementById("widthnheight").innerHTML = "Font Size of the text: " + Difference +"px";

    textSize(Difference);
    fill("#ff6200");
    text("Children, To The Assembly Room!", 80, 500);
}
