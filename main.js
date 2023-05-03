lipstickX=0;
lipstickY=0;
function preload(){
  lipstick = loadImage(' https://i.postimg.cc/Fs7xm5r0/lipstick-png-transparent-png-pictures-icons-and-png-0.png')
}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0);
    {
        console.log(results);
        lipstickX = results[0].pose.lipstick.X-20;
        lipstickY = results[0].pose.lipstick.Y-50;
        console.log("lipstick X = " + results[0].pose.lipstick.X);
        console.log("lipstick Y = " + results[0].pose.lipstick.Y);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(lipstick, lipstickX, lipstickY, 30, 30);
}