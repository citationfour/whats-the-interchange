imageArray = new Array();
imageArray[0] = 'Images/Brussels_Ring_Turbine_Interchange.jpg';
imageArray[1] = 'Images/Complex_Roundabout_Kleinpolderplein_Rotterdam_Netherlands.jpeg';
imageArray[2] = 'Images/Green-cloverleaf-highway-Shutterstock.jpg.optimal.jpg';
imageArray[3] = 'Images/High_Five.jpg';
imageArray[4] = 'Images/I-95_and_695_Interchange_Baltimore.jpg';
imageArray[5] = 'Images/Light_Horse_Interchange_(aerial_view).jpg';
imageArray[6] = 'Images/T_Interchange_Semi-Directional_Orbe_Switzerland.jpg';
imageArray[7] = 'Images/Trumpet_Interchange_Ottawa_River_Parkway_interchange.jpg';
imageArray[8] = 'Images/Vaanplein_Junction_Barendrecht_Netherlands.jpeg';
imageArray[9] = 'Images/Diamond_Interchange_wikipedia.jpg';
imageArray[10] = 'Images/gravelly_hill_interchange.png';
imageArray[11] = 'Images/Judge_Harry_Pregerson_Interchange.jpg';
imageArray[12] = 'Images/Nanpu_Bridge_Interchange.png';
imageArray[13] = 'Images/Takao_San_Interchangejpg.jpg';
imageArray[14] = 'Images/lofthouse_junction.jpg';
imageArray[15] = 'Images/Tom_Moreland_Interchange';
imageArray[16] = 'Images/Higashiosaka_Loop_Osaka_Japan.jpg';
imageArray[17] = 'Images/Xinzhuang_interchange_shanghai.jpg';

var answers = [
    "Turbine Interchange",
    "Complex Roundabout",
    "Cloverleaf Interchange",
    "High Five",
    "Mixing Bowl Interchange",
    "Light Horse Interchange",
    "T Interchange",
    "Trumpet Interchange",
    "Vaanplein Junction",
    "Diamond Interchange",
    "Gravelly Hill Interchange",
    "Judge Harry Pregerson Interchange",
    "Nanpu Bridge Interchange",
    "Takao San Interchange",
    "Lofthouse Junction",
    "Tom Moreland Interchange",
    "Higashiosaka Loop",
    "Xinzhuang Interchange",
];

var score = 0;
var skippedN = 0;
var skipCounter = 2;
var num;
var firstLoad = true;
var timerLength;

function onLoad(){
    document.getElementById("end-screen").style.display = 'none';
    document.getElementById("end-screen").style.zIndex = '';
}

function skippedNF(){
    skippedN++;

    if (skippedN > 3){
        return;
        console.log(skippedN);
    }
    else if (skippedN < 3 && skippedN > 0){
        skipCounter--;
        console.log(skippedN);
        getRandomImage();
        console.log("skipped:" + skippedN);
        document.getElementById("skip-btn").innerHTML = ("<b>Skips: </b>" +  "<b>" + skipCounter + "</b>");
    }
    else {
        console.log("Did nothing!");
    }
}

function getRandomImage(){
    if (firstLoad == true){
        firstLoad = false;
        checkAnswer();
    }
    //Pick Question
    num = Math.floor(Math.random() * 18)
    imageArray[10];
    var img = imageArray[num];

    //Show Picture
    document.getElementById("question-image").innerHTML = ('<img src="' + img + '"width=450px; height=550px; margin-left: auto; margin-right: auto;">');
}

function checkAnswer(){
    //init vars
    var input = document.getElementById("answer-input");
    var scoreHTML = document.getElementById("score-txt-html");

    console.log(input + "\n" + answers[num] + "\n" + num + "\n" + skipCounter + "\n" + score);

    if (firstLoad == false && timerLength > 0){
        if (input.value === answers[num]){
            score++;
            input.value = ("");
            scoreHTML.innerHTML = ("<b>Score: </b>" + "<b>" + score + "</b>");
            
        }
        else if (input.value !== answers[num]){
            score--;
            input.value = ("");
            scoreHTML.innerHTML = ("<b>Score: </b>" + "<b>" + score + "</b>");
        }
        else {
            console.log("Did nothing!");
        }
    }

    getRandomImage();
}

function start(){
    const startBtn = document.getElementById("start-btn");
    startBtn.style.display = 'none';
    console.log("start");

    getRandomImage();
    timer();
}

function timer(){
    var timerText = document.getElementById("timer-text");
    timerLength = 60;

    const interval = setInterval(() => {
        timerText.innerHTML = (timerLength);
        console.log(timerLength)
        timerLength--;

        if (timerLength < 0){
            clearInterval(interval);
            timerText.innerHTML("Time's Up"); 
        }
    }, 1000);
}