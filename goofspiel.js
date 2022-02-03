/*var round1 = begin[round(random(0,12))];
begin.splice(round1 + 1, 1, round1 + 1, round1+2, round1+3,round1+4, round1, +5, round1+ 6, round1 + 7, round1 + 8, round1+9, round1+10,round1+11, round1+12);
var round2 = begin[round(random(0,11))];
begin.splice(round2, 1, round2 + 1, round2+2, round2+3,round2+4, round2, +5, round2+ 6, round2 + 7, round2 + 8, round2+9, round2+10,round2+11, round2+12);
var round3 = begin[round(random(0,10))];
begin.splice(round3, 1, round1 + 1, round1+2, round1+3,round1+4, round1, +5, round1+ 6, round1 + 7, round1 + 8, round1+9, round1+10,round1+11, round1+12);
var round4 = begin[round(random(0,9))];
begin.splice(round4, 1, round1 + 1, round1+2, round1+3,round1+4, round1, +5, round1+ 6, round1 + 7, round1 + 8, round1+9, round1+10,round1+11, round1+12);
var round5 = begin[round(random(0,8))];
begin.splice(round5, 1, round1 + 1, round1+2, round1+3,round1+4, round1, +5, round1+ 6, round1 + 7, round1 + 8, round1+9, round1+10,round1+11, round1+12);
var round6 = begin[round(random(0,7))];
begin.splice(round6, 1, round1 + 1, round1+2, round1+3,round1+4, round1, +5, round1+ 6, round1 + 7, round1 + 8, round1+9, round1+10,round1+11, round1+12);
var round7 = begin[round(random(0,6))];
begin.splice(round7, 1, round1 + 1, round1+2, round1+3,round1+4, round1, +5, round1+ 6, round1 + 7, round1 + 8, round1+9, round1+10,round1+11, round1+12);
var round8 = begin[round(random(0,5))];
begin.splice(round8, 1, round1 + 1, round1+2, round1+3,round1+4, round1, +5, round1+ 6, round1 + 7, round1 + 8, round1+9, round1+10,round1+11, round1+12);
var round9 = begin[round(random(0,4))];
begin.splice(round9, 1, round1 + 1, round1+2, round1+3,round1+4, round1, +5, round1+ 6, round1 + 7, round1 + 8, round1+9, round1+10,round1+11, round1+12);
var round10 = begin[round(random(0,3))];
begin.splice(round10, 1, round1 + 1, round1+2, round1+3,round1+4, round1, +5, round1+ 6, round1 + 7, round1 + 8, round1+9, round1+10,round1+11, round1+12);
var round11 = begin[round(random(0,2))];
begin.splice(round11, 1, round1 + 1, round1+2, round1+3,round1+4, round1, +5, round1+ 6, round1 + 7, round1 + 8, round1+9, round1+10,round1+11, round1+12);
var round12 = begin[round(random(0,1))];
begin.splice(round12, 1, round1 + 1, round1+2, round1+3,round1+4, round1, +5, round1+ 6, round1 + 7, round1 + 8, round1+9, round1+10,round1+11, round1+12);
var round13 = begin[round(random(0,0))];
begin.splice(round13, 1, round1 + 1, round1+2, round1+3,round1+4, round1, +5, round1+ 6, round1 + 7, round1 + 8, round1+9, round1+10,round1+11, round1+12);*/


//println(round1);
//println(round2);
/*println(round3);
println(round4);
println(round5);
println(round6);
println(round7);
println(round8);
println(round9);
println(round10);
println(round11);
println(round12);
println(round13);*/
/*var exclusion = function(lowNum, highNum, exclusion, varie){
    var prottype = round(random(lowNum, highNum));
    if (prottype === exclusion){
        prottype = prottype - 1;
    }if (prottype === 0){
       prottype = highNum;
    }
    var varie = prottype; 
}; 

var shea = {truth: 1, value: 1};
var sho = {truth: 2, value: 2};
var stin = {truth: 3, value: 3};
var bloc = {truth: 4, value: 4};
var ee = {truth: 5, value: 5};
var sif = {truth: 6, value: 6};
var te = {truth: 7, value: 7};
var el = {truth: 8, value: 8};
var ne = {truth: 9, value: 9};
var coss = {truth: 10, value: 10};
var jack = {truth: 11, value: 11};
var queen = {truth: 12, value: 12};
var king = {truth: 13, value: 13};


/*var arrayONumbers = [shea, sho, stin, bloc, ee, sif, te, el, ne, coss, jack, queen, king];
var qwerty = [shea, sho, stin, bloc, ee, sif, te, el, ne, coss, jack, queen, king];


var rern = function(array){
for(var i = 0; i < 14; i++){
    var q = round(random(0,12));
    array[i] = array[q];
    array[q] = array[i];
}};

rern(arrayONumbers);
rern(qwerty);
computerNumber = arrayONumbers[Rund].value;*/
/*println(arrayONumbers[0].value);
println(arrayONumbers[1].value);
println(arrayONumbers[2].value);
println(arrayONumbers[3].value);
println(arrayONumbers[4].value);
println(arrayONumbers[5].value);
println(arrayONumbers[6].value);
println(arrayONumbers[7].value);
println(arrayONumbers[8].value);
println(arrayONumbers[9].value);
println(arrayONumbers[10].value);
println(arrayONumbers[11].value);
println(arrayONumbers[12].value);
println(arrayONumbers[13].value);
println(qwerty[0].truth);*/
var boxColor = color(207, 72, 72);
var fontColor = color(13, 13, 13);
var buttonColor = color(191, 0, 255);
background(boxColor);
var Rund = 0;
var myScore = 0;
var myNumber = 0;
var computerScore = 0;
var computerNumber = 0;

var begin = [1,2,3,4,5,6,7,8,9,10,11,12,13];
var newEnding = [];
for(var i = 0; i < 13; i++){
    var prottype = round(random(1, 12));
    newEnding.push(begin[prottype]);
    begin[prottype] = begin[0];
    begin.shift();
}
var a = [1,2,3,4,5,6,7,8,9,10,11,12,13];
var z = [];
for(var q = 0; q < 13; q++){
    var mottype = round(random(1, 12 - q));
    z.push(a[mottype]);
    a[mottype] = a[0];
    a.shift();
}

//println(newEnding[10]);
var uno = 1;
var dos = 1;
var tres = 1;
var cuatro = 1;
var cinco = 1;
var seis = 1;
var siete = 1;
var ocho = 1;
var nueve = 1;
var diez = 1;
var once = 1;
var doce = 1;
var trece = 1;
var button = function(config){
    this.width = config.width || 10;
    this.height = config.height || 10;
    this.x = config.x;
    this.y = config.y;
    this.message = config.message;
    this.truth = config.truth || -100;
    this.onClick = config.onClick || function() {
        if (this.truth === 1){
            myNumber = this.message;
            noStroke();
            fill(boxColor);
            rect(150,155,200,50);
            rect(this.x, this.y, 10, 10);
            fill(fontColor);
            textSize(20);
            text("My Number: " + myNumber, 100, 200);
            this.truth++;
        }else{
            text("Already Used", 100, 100);
            myNumber = 0;
        }
        
    };
};

button.prototype.draw = function() {
    fill(buttonColor);
    rect(this.x, this.y, this.width, this.height);
    fill(fontColor);
    textSize(20);
    text(this.message, this.x + 2, this.y + 8);
};

button.prototype.isBeingClicked = function(){
    return mouseX > this.x &&
           mouseX < this.x + this.width &&
           mouseY > this.y &&
           mouseY < this.y + this.height;
};

button.prototype.v = function(){
    if(this.isBeingClicked()){
        this.onClick();}
};

var one = new button({x: 20, y: 10, message: 1, truth: uno});
var two = new button({x: 40, y: 10, message: 2, truth: dos});
var three = new button({x: 60, y: 10, message: 3, truth: tres });
var four = new button({x: 80, y: 10, message: 4, truth: cuatro});
var five = new button({x: 100, y: 10, message: 5, truth: cinco});
var six = new button({x: 120, y: 10, message: 6, truth: seis });
var seven = new button({x: 140, y: 10, message: 7, truth: siete});
var eight = new button({x: 160, y: 10, message: 8, truth: ocho});
var nine = new button({x: 180, y: 10, message: 9, truth: nueve});
var ten = new button({x: 200, y: 10, message: 10, truth: diez});
var eleven = new button({x: 220, y: 10, message: 11, truth: once});
var twelve = new button({x: 240, y: 10, message: 12, truth: doce});
var thirteen = new button({x: 260, y: 10, message: 13, truth: trece});

var done = new button({x: 50, y: 250, height: 50, width: 50, message: "Flip", onClick: function(){
    fill(boxColor);
    noStroke();
    rect(276, 265, 30, 20);
    fill(fontColor);
    textSize(20);
    text("Computer Number: " + newEnding[Rund], 100, 280);
}
});

var next = new button({x: 320, y: 248, height: 50, width: 50, message: "Next", onClick: function(){
    computerNumber = newEnding[Rund];
    if(myNumber > computerNumber){
        fill(0, 153, 18);
        rect(10, 100, 50, 50);
        myScore = myScore + z[Rund];
        fill(255, 85, 0);
        textSize(20);
        text(myScore, 31, 131);
    }else{
        fill(0, 153, 18);
        rect(340, 100, 50, 50);
        computerScore = computerScore + z[Rund];
        fill(255, 128, 0);
        textSize(20);
        text(computerScore, 357, 132);
    }
    Rund++;
    computerNumber++;
    noStroke();
    fill(boxColor);
    rect(200,300, 50,50);
    fill(fontColor);
    text("Prize Card: " + z[Rund], 100, 324);
}});

        
        

one.draw();
two.draw();
three.draw();
four.draw();
five.draw();
six.draw();
seven.draw();
eight.draw();
nine.draw();
ten.draw();
eleven.draw();
twelve.draw();
thirteen.draw();

done.draw();
next.draw();

mouseClicked = function() {
    one.v();
    two.v();
    three.v();
    four.v();
    five.v();
    six.v();
    seven.v();
    eight.v();
    nine.v();
    ten.v();
    eleven.v();
    twelve.v();
    thirteen.v();
    
    done.v();
    next.v();
    
};



rect(10, 100, 50, 50);
rect(340, 100, 50, 50);  
fill(fontColor);
text("My Score ", 10, 100);
textSize(20);
text(myScore, 31, 131);
textSize(20);
text("AI Score", 317, 93);
text(computerScore, 357, 132);
text("Prize Card: " + z[Rund], 100, 324);
textSize(50);
text("Goofspiel", 0, 390);   
    
    
    
    
    
    

