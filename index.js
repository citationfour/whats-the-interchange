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
imageArray[9] = "Images/Yan'an_East_Road_Interchange,_Shanghai,_China_Multi_Level_Stack.jpg";

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
    "Ya'an East Road Interchange",
];

var score = 1;
var skippedN = 0;
var skipCounter = 2;
var num;
var firstLoad = true;

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
    num = Math.floor(Math.random() * 10);
    var img = imageArray[num];

    //Show Picture
    document.getElementById("question-image").innerHTML = ('<img src="' + img + '"width=450px; height=550px; margin-left: auto; margin-right: auto;">');
}

function checkAnswer(){
    //init vars
    var textarea = document.getElementById("answer-input").value;
    var scoreHTML = document.getElementById("score-txt-html").innerHTML;

    console.log(textarea + "\n" + answers[num] + "\n" + num + "\n" + skipCounter + "\n" + score);

    if (firstLoad == false){
        if (textarea === answers[num]){
            score++;
            document.getElementById("score-txt-html").innerHTML = ("<b>Score: </b>" + "<b>" + score + "</b>");
        }
        else if (textarea !== answers[num]){
            score--;
            document.getElementById("score-txt-html").innerHTML = ("<b>Score: </b>" + "<b>" + score + "</b>");
        }
        else {
            console.log("Did nothing!");
        }
    }

    getRandomImage();
}