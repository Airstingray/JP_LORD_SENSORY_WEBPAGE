window.onload = function(){

  var navbarToHome = document.getElementById("navHome");
  var navbarToSensoryRoom = document.getElementById("navSensory");
  var navbarToPlayground = document.getElementById("navPlayground");
  var navbarToAbout = document.getElementById("navAbout");
  var navBarBackground = document.getElementById("navbar");
  var settingIcon = document.getElementById("setting");
  var settingButton = document.getElementById("settingButton");
  var colorSchemes = [["#F0F7F4", "#70ABAF", "#772D8B"], ["#724E91", "#451F55", "#22162B"],["#F0E2E7","#43AA8B","#254441"]];

 

  
  
  if(sessionStorage.getItem("currentPage") == null){
    curPage = 0;
  }else{
    curPage = sessionStorage.getItem("currentPage");
    
  }
  
  if(sessionStorage.getItem("currentScheme") == null){
    curScheme = 1;
  }else{
    curScheme = sessionStorage.getItem("currentScheme");
  }

  console.log(curPage);
  console.log(curScheme);
  
  updatePage();
  
  
  navbarToHome.addEventListener("click", function(){
    curPage = 0;
    sessionStorage.setItem("currentPage", curPage);
  })
  navbarToSensoryRoom.addEventListener("click", function(){
    curPage = 1;
    sessionStorage.setItem("currentPage", curPage);
  })
  navbarToPlayground.addEventListener("click", function(){
    curPage = 2;
    sessionStorage.setItem("currentPage", curPage);
  })
  navbarToAbout.addEventListener("click", function(){
    curPage = 3;
    sessionStorage.setItem("currentPage", curPage);
  })

  var scheme1 = document.getElementById("changeScheme1");
  var scheme2 = document.getElementById("changeScheme2");
  var scheme3 = document.getElementById("changeScheme3");

  scheme1.addEventListener("click", function(){
    curScheme = 1;
    updatePage();
  })


  scheme2.addEventListener("click", function(){
    curScheme = 2;
    updatePage();
  })


  scheme3.addEventListener("click", function(){
    curScheme = 3;
    updatePage();
  })
  

  if(curPage == 0){

  }

  else if(curPage == 1){
    var navToBubble = document.getElementById("coverPhotoBubble");
    var navToStars = document.getElementById("navToStars");
    var navToVideo = document.getElementById("navToVideo");
    var navToWaves = document.getElementById("navToWaves");
    var navToSnake = document.getElementById("navToSnake");
    updatePage()


    navToBubble.addEventListener("click", function(){
      curPage = 4;
      sessionStorage.setItem("currentPage", curPage);
    });

    navToStars.addEventListener("click", function(){
      curPage = 5;
      sessionStorage.setItem("currentPage", curPage);
    })

    navToVideo.addEventListener("click", function(){
      curPage = 6;
      sessionStorage.setItem("currentPage", curPage);
    })

    navToWaves.addEventListener("click", function(){
      curPage = 7;
      sessionStorage.setItem("currentPage", curPage);
    })

    navToSnake.addEventListener("click", function(){
      curPage = 8;
      sessionStorage.setItem("currentPage", curPage);
    })
  }

  else if(curPage == 2){
   var navToFour = document.getElementById("navToFour");
   var navToBlock = document.getElementById("navToBlock");
   var navToFalling = document.getElementById("navToFalling");
   var navToAnimals = document.getElementById("navToAnimals")
   updatePage()

   navToFour.addEventListener("click", function(){
    curPage = 20;
    sessionStorage.setItem("currentPage", curPage);
  });

  navToBlock.addEventListener("click", function(){
    curPage = 21;
    sessionStorage.setItem("currentPage", curPage);
  });

  navToFalling.addEventListener("click", function(){
    curPage = 22;
    sessionStorage.setItem("currentPage", curPage);
  });

  navToAnimals.addEventListener("click", function(){
    curPage = 23;
    sessionStorage.setItem("currentPage", curPage);
  });




  }

  else if(curPage == 3){
    
  }

  else if(curPage == 4){
    var tint_factor = .3;
    var column = document.getElementById("bubblecolumn")
    var container = document.getElementById("bubbleContainer");
    var Redbutton = document.getElementById("colorChangeButtonRed");
    var Bluebutton = document.getElementById("colorChangeButtonBlue");
    var Greenbutton = document.getElementById("colorChangeButtonGreen");
    var Yellowbutton = document.getElementById("colorChangeButtonYellow");
    var Purplebutton = document.getElementById("colorChangeButtonPurple");
    var Randbutton = document.getElementById("colorChangeButtonRandom");
    var screenChange = document.getElementById("changeScreenSize");
    var fullScreen = false;
    var bubbleSound = new Audio("bubbles_sfx.wav")

  
  

    screenChange.addEventListener("click", function() {
      
      if(fullScreen == false){
        console.log("Pressed")
        fullScreen = true;
      }else{
        fullScreen = false;
      }

      if(fullScreen == false){
        console.log("Fullscreen maybe")
        column.style.position = "revert";
        column.style.height = "revert";
        column.style.width = "revert"
        column.style.left = "revert";
        column.style.top = "revert";
        column.style.padding = "revert";
        column.style.margin = "revert";
        column.style.zIndex = "revert";
        window.location.reload();
      }else{
        console.log("Fullscreen maybe")
        column.style.position = "absolute";
        column.style.height = "100%";
        column.style.width = "100%"
        column.style.left = "0";
        column.style.top = "0";
        column.style.padding = "0";
        column.style.margin = "0";
        column.style.zIndex = "10";
      }
    });


    


    var colors = ["blue", "red", "green", "yellow", "purple"];
    var colorRGBs = [[0,0,255],[255,0,0],[0,255,0],[255,255,0],[102,0,204]];
    var colorIndex = 0;
    Redbutton.addEventListener("click", function() {
      colorIndex = 1;
    });
    Bluebutton.addEventListener("click", function() {
      colorIndex = 0;
    });
    Greenbutton.addEventListener("click", function() {
      colorIndex = 2;
    });
    Yellowbutton.addEventListener("click", function() {
      colorIndex = 3;
    });
    Purplebutton.addEventListener("click", function() {
      colorIndex = 4;
    });
    Randbutton.addEventListener("click", function() {
      colorIndex = 5;
    });
    var squareButton = document.getElementById("shapeChangeButtonSquare");
    var circleButton = document.getElementById("shapeChangeButtonCircle");
    var shapes = [50,0,0];
    var shapeIndex = 0;
    squareButton.addEventListener("click", function() {
      shapeIndex = 1;
    });
    circleButton.addEventListener("click", function() {
      shapeIndex = 0;
    });
  
      setInterval(function() {
        var distance = 0;
        var size = (Math.random() * 50)+10;
        var bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = ((Math.random() * 80)+1) + "%";
        bubble.style.bottom = "0";
        bubble.style.width = size + "px";
        bubble.style.height = size + "px";
        bubble.style.borderWidth = size;
        
        if(colorIndex == 5){
          var curRandom = Math.floor(Math.random()*5);
          bubble.style.backgroundColor = colors[curRandom];
          var borderTint = "rgb(" + (colorRGBs[curRandom][0] + (255 - colorRGBs[curRandom][0]) * tint_factor) + "," + (colorRGBs[curRandom][1] + (255 - colorRGBs[curRandom][1]) * tint_factor) + "," + (colorRGBs[curRandom][2] + (255 - colorRGBs[curRandom][2]) * tint_factor) + ")";
          bubble.style.borderColor = borderTint;
        }else{
          var borderTint = "rgb(" + (colorRGBs[colorIndex][0] + (255 - colorRGBs[colorIndex][0]) * tint_factor) + "," + (colorRGBs[colorIndex][1] + (255 - colorRGBs[colorIndex][1]) * tint_factor) + "," + (colorRGBs[colorIndex][2] + (255 - colorRGBs[colorIndex][2]) * tint_factor) + ")";
          bubble.style.borderColor = borderTint;
          bubble.style.backgroundColor = colors[colorIndex];
        }
        bubble.style.borderRadius = shapes[shapeIndex] + "%";
        bubble.addEventListener("click",function(){
          bubble.style.visibility = "hidden";
          bubbleSound.play();
        });
        column.appendChild(bubble);

        setInterval(function() {
          if(distance < (column.clientHeight-size)){
            
              distance += 1;
              bubble.style.bottom = parseInt(bubble.style.bottom) + 1 + "px";
              
          }else{
              bubble.style.visibility = "hidden"
          }
            
        }, 50);
      }, 1000);

  }

  else if(curPage == 5){
    const starCount = 50; // change this to add more stars
    const starsContainer = document.querySelector('.stars');
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starsContainer.appendChild(star);
    }
  }

  else if(curPage == 6){
    const video = document.getElementById('video');
    var onlyRedButton = document.getElementById('colorChangeOnlyRed');
    var onlyBlueButton = document.getElementById('colorChangeOnlyBlue');
    var onlyGreenButton = document.getElementById('colorChangeOnlyGreen');
    var colorBlindGB = document.getElementById('colorBlindGB');
    var colorBlindBY = document.getElementById('colorBlindBY');
    var clearFilter = document.getElementById('clearfilter');
    var Deuteranopia = false;
    var Tritanopia = false;
    
    var blueMod = 1;
    var redMod = 1;
    var greenMod = 1; 
    var satMod = 3;

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function (error) {
          console.log('Error accessing camera: ' + error.message);
        });
    } else {
      console.log('Camera access not supported on this browser');
    }


    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const pixelCanvas = document.getElementById('pixel-canvas');
    const pixelCtx = pixelCanvas.getContext('2d');

    function captureFrame() {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixelData = imageData.data;
      const pixelMatrix = [];

      for (let i = 0; i < pixelData.length; i += 4) {
        var r = pixelData[i];
        var g = pixelData[i + 1];
        var b = pixelData[i + 2];
        var a = pixelData[i + satMod];

        var alpha = a / 255;
        var red = r * alpha * redMod;
        var green = g * alpha * greenMod;
        var blue = b * alpha * blueMod;

        if(Deuteranopia == true){
          if(red > green && red > blue){
            green = red;
          } 
          if(green > red && green > blue){
            red = green;
          } 

        }

        if(Tritanopia == true){
          //doesn't work
          blue = 0;
          red /= 4;
          green /=2;
        }



        pixelMatrix.push([red, green, blue, a]);
      }

      pixelCanvas.width = canvas.width;
      pixelCanvas.height = canvas.height;

      const pixelImage = pixelCtx.createImageData(canvas.width, canvas.height);
      const pixelImageData = pixelImage.data;

      for (let i = 0; i < pixelMatrix.length; i++) {
        const pixel = pixelMatrix[i];
        const index = (i * 4);

        

        pixelImageData[index] = pixel[0];
        pixelImageData[index + 1] = pixel[1];
        pixelImageData[index + 2] = pixel[2];
        pixelImageData[index + 3] = pixel[3];
      }

      pixelCtx.putImageData(pixelImage, 0, 0);
    }

    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
       video.srcObject = stream;
        setInterval(captureFrame, 100);
      })
      .catch(function(error) {
        console.log('Could not access user media: ' + error);
      });


      onlyRedButton.addEventListener("click", function(){
        blueMod = 0;
        greenMod = 0;
        redMod = 1;
      });

      onlyGreenButton.addEventListener("click", function(){
        blueMod = 0;
        greenMod = 1;
        redMod = 0;
      });

      onlyBlueButton.addEventListener("click", function(){
        blueMod = 1;
        greenMod = 0;
        redMod = 0;
      });

      colorBlindGB.addEventListener("click", function(){
        Deuteranopia = true;
      });

      colorBlindBY.addEventListener("click", function(){
        Tritanopia = true;
      });

      clearFilter.addEventListener('click', function(){
        blueMod = 1;
        greenMod = 1;
        redMod = 1;
        Deuteranopia = false;
        Tritanopia = false;
      });



  }

  else if(curPage == 7){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    const waveCount = 3;
    const waveHeight = 50;
    const waveSpeed = 0.1;
    const waveColors = ['#FF6B6B', '#FFE66D', '#70FF7D'];
    let time = 0;

    function animate() {
      
      ctx.clearRect(0, 0, width, height);
      time += waveSpeed;
      for (let i = 0; i < waveCount; i++) {
        drawWave(i * waveHeight, waveColors[i]);
      }
      requestAnimationFrame(animate);
    }

    function drawWave(offset, color) {
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      for (let x = 0; x < width; x++) {
        const y = Math.sin(x * 0.01 + time + offset) * waveHeight;
        ctx.lineTo(x, height / 2 + y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    }

    animate();

  }

  else if(curPage == 8){
    // Set up game variables
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const width = canvas.width = 400;
    const height = canvas.height = 400;


let snake = [{ x: 10, y: 10 }];
let direction = { x: 1, y: 0 };
let apple = { x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) };
let score = 0;
let gameOver = false;

// Draw snake and apple
function draw() {
  // Clear canvas
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
  
  // Draw apple
  ctx.fillStyle = "red";
  ctx.fillRect(apple.x * 20, apple.y * 20, 20, 20);
  
  // Draw snake
  ctx.fillStyle = "white";
  for (let i = 0; i < snake.length; i++) {
    ctx.fillRect(snake[i].x * 20, snake[i].y * 20, 20, 20);
  }
}

// Move snake
function move() {
  // Move snake head

  let head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
  
  snake.unshift(head);
  
  // Check for collision with apple
  if (head.x === apple.x && head.y === apple.y) {
    // Increase score and spawn new apple
    score++;
    apple = { x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) };
  } else {
    // Remove tail
    snake.pop();
  }
  
  // Check for collision with walls or snake body
  if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20 || checkCollision(head)) {
    // Reset game
    
    snake = [{ x: 10, y: 10 }];
    direction = { x: 1, y: 0 };
    apple = { x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) };
    score = 0;
    gameOver = true;
    return;
  }
}

// Check for collision with snake body
function checkCollision(head) {
  
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      
      return true;
    }
  }
  return false;
}

// Auto-play snake game
let gameInterval = setInterval(function() {
  // Set direction based on snake and apple positions
  let dx = apple.x - snake[0].x;
  let dy = apple.y - snake[0].y;
  tempdirectionX = { x: Math.sign(dx), y: 0 };
  tempdirectionY = { x: 0, y: Math.sign(dy) };
  let tempX = { x: snake[0].x + tempdirectionX.x, y: snake[0].y + tempdirectionX.y }
  let tempY = { x: snake[0].x + tempdirectionY.x, y: snake[0].y + tempdirectionY.y }
  if (Math.abs(dx) > Math.abs(dy) && checkCollision(tempX) == false) {
    
    direction = { x: Math.sign(dx), y: 0 };
  } else if(checkCollision(tempY) == false){
    
    direction = { x: 0, y: Math.sign(dy) };
  }
  
  // Move snake and draw game
  move();
  draw();

  // Check if game is over
  if (gameOver) {
    // Restart game after 2 seconds
    setTimeout(function() {
      
        gameOver = false;
      
     
    }, 2000);
  }
}, 100);

  }

  else if(curPage ==20){
    //make a python code that will make a connect four game on an html page? 
  }

  else if(curPage ==21){

  }

  else if(curPage==22){

  }

  else if(curPage==23){
    
  }
  
  function updatePage(){
    navBarBackground.style.backgroundColor = colorSchemes[(curScheme-1)][0];
    settingIcon.style.backgroundColor = colorSchemes[(curScheme-1)][0];
    settingButton.style.backgroundColor = colorSchemes[(curScheme-1)][0];

    if(curPage == 0){
      var curBackgroundImage = document.getElementById("home_body");
      curBackgroundImage.style.backgroundImage = "url(HomescreenS" + curScheme + ".jpg)";
    }

    else if(curPage == 1){
      var curBackgroundImage = document.getElementById("sensory_room_body");
      curBackgroundImage.style.backgroundImage = "url(SensoryRoomS" + curScheme + ".jpg)";

    $(function(){
       $("[id='test_box']").css({"background-color":colorSchemes[(curScheme-1)][1]});
      });
    }

    else if(curPage == 2){
      var curBackgroundImage = document.getElementById("playground_body");
      curBackgroundImage.style.backgroundImage = "url(PlaygroundS" + curScheme + ".jpg)";

      $(function(){
        $("[id='test_box']").css({"background-color":colorSchemes[(curScheme-1)][1]});
       });
    }

    else if(curPage == 3){
      var curBackgroundImage = document.getElementById("about_body");
      curBackgroundImage.style.backgroundImage = "url(HomescreenS" + curScheme + ".jpg)";
    }

    else if(curPage == 4){
      var backgroundColor = document.getElementById("sensory_room_body");
      

    
      backgroundColor.style.backgroundColor =  colorSchemes[(curScheme-1)][0];

      $(function(){
        $("[id='test_box']").css({"background-color":colorSchemes[(curScheme-1)][1]});
        });

        $(function(){
          $("[class='customButton']").css({"background-color":colorSchemes[(curScheme-1)][2]});
          });

    }

    else if(curPage == 5){

    }

    else if(curPage == 6){
      var backgroundColor = document.getElementById("sensory_room_body");
      backgroundColor.style.backgroundColor =  colorSchemes[(curScheme-1)][0];
      $(function(){
        $("[id='test_box']").css({"background-color":colorSchemes[(curScheme-1)][1]});
        });
    }

    else if(curPage == 7){

    }

    else if(curPage == 8){

    }

    else if (curPage=20){

    }

    sessionStorage.setItem("currentScheme", curScheme);

  }
 
 
  
}


