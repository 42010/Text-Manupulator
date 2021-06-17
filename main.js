function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(500, 380);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model Has Loaded!");
}

function gotPoses(results){
    if(result.length >0){
        console.log(results)
    }
}

function draw(){
    background('#FF0000');
}