// Een deel van de code van http://codepen.io/SaschaSigl/pen/woGYKJ
function WordShuffler(holder, opt){
  var that = this;
  var time = 0;
  this.now;
  this.then = Date.now();
  
  this.delta;
  this.currentTimeOffset = 0;
  
  this.word = null;
  this.currentWord = null;
  this.currentCharacter = 0;
  this.currentWordLength = 0;

/* Snelheid, kleur en soort lettertype dat wordt gemixt*/
  var options = {
    fps : 1000000,
    textColor : '#ffffff',
    fontSize : "1em",
    mixCapital : true,
    needUpdate : true,
    colors : [
      '#ff0000','#00ff00','#080808',
      '#ffff00','#00ffff','#f0f0f0',
      '#0f0f0f','#ff00ff','#ffffff',
      '#ffc917','#001371','#127dd4',
      '#e6e6e9','#002D72','#e9e9e9',
      '#ff5722','#795548','#9e9e9e',
      '#607d8b'
    ]
  }

  if(typeof opt != "undefined"){
    for(key in opt){
      options[key] = opt[key];
    }
  }

  this.needUpdate = true;
  this.fps = options.fps;
  this.interval = 1;
  this.timeOffset = options.timeOffset;
  this.textColor = options.textColor;
  this.fontSize = options.fontSize;
  this.mixCapital = options.mixCapital;
  this.colors = options.colors;
  
  this.chars = [
    'A','B','C','D',
    'E','F','G','H',
    'I','J','K','L',
    'M','N','O','P',
    'Q','R','S','T',
    'U','V','W','X',
    'Y','Z',' '
  ];

  this.getRandomColor = function () {
    var randNum = Math.floor( Math.random() * this.colors.length );
    return this.colors[randNum];
  }

  /* welke p het is*/ 
  if(typeof holder != "undefined"){
    this.holder = holder;
  }

  this.getRandCharacter = function(characterToReplace){    
    if(characterToReplace == " "){
      return ' ';
    }
    var randNum = Math.floor(Math.random() * this.chars.length);
    var lowChoice =  -.5 + Math.random();
    var picketCharacter = this.chars[randNum];
    var choosen = picketCharacter.toLowerCase();
    if(this.mixCapital){
      choosen = lowChoice < 0 ? picketCharacter.toLowerCase() : picketCharacter;
    }
    return choosen;
    
  }

/* zet spatie na elk woord*/
  this.writeWord = function(word){
    this.word = word;
    this.currentWord = word.split('');
    this.currentWordLength = this.currentWord.length;
  }

/* zet span om elke letter*/
  this.generateSingleCharacter = function (color,character) { 
    var span = document.createElement('span');
    span.style.color = color;
    span.innerHTML = character;
    return span;
  }


  this.updateCharacter = function (time) {
    
      this.now = Date.now();
      this.delta = this.now - this.then;

       

      if (this.delta > this.interval) {
        this.currentTimeOffset++;
      
        var word = [];

        if(this.currentTimeOffset === this.timeOffset && this.currentCharacter !== this.currentWordLength){
          this.currentCharacter++;
          this.currentTimeOffset = 0;
        }
        for(var k=0;k<this.currentCharacter;k++){
          word.push(this.currentWord[k]);
        }

        for(var i=0;i<this.currentWordLength - this.currentCharacter;i++){
          word.push(this.getRandCharacter(this.currentWord[this.currentCharacter+i]));
        }

        if(that.currentCharacter === that.currentWordLength){
          that.needUpdate = false;
        }
        this.holder.innerHTML = '';
        word.forEach(function (w,index) {
          var color = null
          if(index > that.currentCharacter){
            color = that.getRandomColor();
          } else {
            color = that.textColor;
          }
          that.holder.appendChild(that.generateSingleCharacter(color, w));
        });

        this.then = this.now - (this.delta % this.interval);
      }
  }

/* makes the magic happen*/
  function update(time) {
    time++;
    if(that.needUpdate){
      that.updateCharacter(time);
    }
    requestAnimationFrame(update);
  }

  this.writeWord(this.holder.innerHTML);

  update(time);
}