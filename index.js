//global variables
var onesTimer;
var tenthsTimer;
var onesPlace = 0;
var tenthsPlace = 0;
var isTimerRunning = false;
var toggleTimerButton = document.getElementById('toggleTimer');
var recordTimesButton = document.getElementById('record');
var resetButton = document.getElementById('reset');
var pastTimes = document.getElementById('pastTimes');
//initiate code
setUp();

//define functions
function setUp(){
  document.addEventListener('keydown', function(event){
        if(event.keyCode == 83){
            toggleTimerButton.click();
        }
        if(event.keyCode == 82){
            resetButton.click();
        }
        if(event.keyCode == 84){
            recordTimesButton.click();
        }


    });
  toggleTimerButton.addEventListener('click', toggleTimer);
  recordTimesButton.addEventListener('click', recordTime);
  resetButton.addEventListener('click', reset);
}

function reset(){
  clearInterval(onesTimer);
  clearInterval(tenthsTimer);
  onesPlace = 0;
  tenthsPlace = 0;
  document.getElementById('ones').innerHTML = '0';
  document.getElementById('tenths').innerHTML = '0';
  pastTimes.innerHTML = null;
}

function recordTime(){
  var time = document.getElementById('timer').innerText;
  var node = document.createElement("LI");
  var textnode = document.createTextNode(time);
  node.appendChild(textnode);
  pastTimes.appendChild(node);
}

function toggleTimer(){
  //if timer hasn't started yet, start it up!
  if(isTimerRunning === false){
    startTimer();
  } else if (isTimerRunning === true){
    stopTimer();
  }
}

function startTimer(){
  onesTimer = setInterval(function(){
    onesPlace++;
    document.getElementById('ones').innerHTML = onesPlace;
  }, 1000);

  tenthsTimer = setInterval(function(){
    tenthsPlace = Math.round(new Date().getMilliseconds() / 100)
    document.getElementById('tenths').innerHTML = tenthsPlace;
  }, 100);
  isTimerRunning = !isTimerRunning;
}

function stopTimer(){
  clearInterval(onesTimer);
  clearInterval(tenthsTimer);
  isTimerRunning = !isTimerRunning;
}
