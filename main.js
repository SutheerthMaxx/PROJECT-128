song = "";
songb = "";

rightwrist_x = 0;
rightwrist_y = 0;

leftwrist_x = 0;
leftwrist_y = 0;
function preload()
{
    song = loadSound("music.mp3");
    songb = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video , modelloaded);
    posenet.on("pose" , gotposes);
}

function modelloaded()
{
    console.log("model is loaded");
}

function gotposes(results)
{
     if (results.length > 0 )
     {
        console.log(results);

        rightwrist_x = results[0].pose.rightWrist.x;
        rightwrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist x is : " + rightwrist_x   +   "rightWrist y is : " + rightwrist_y);

        
        leftwrist_x = results[0].pose.leftWrist.x;
        leftwrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist x is : " + leftwrist_x   +   "leftWrist y is : " + leftwrist_y);
     }
    }    

function draw()
{
    image(video,0,0,600,500);
}

function playing()
    {
      song.play();
    }
