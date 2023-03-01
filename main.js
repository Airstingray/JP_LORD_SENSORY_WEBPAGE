


window.onload = function(){

  var navbarToHome = document.getElementById("navHome");
  var navbarToSensoryRoom = document.getElementById("navSensory");
  var navbarToPlayground = document.getElementById("navPlayground");
  var navbarToAbout = document.getElementById("navAbout");
  var navBarBackground = document.getElementById("navbar");
  var settingIcon = document.getElementById("setting");
  var settingButton = document.getElementById("settingButton");
  var colorSchemes = [["#F0F7F4", "#70ABAF", "#772D8B"], ["#724E91", "#451F55", "#22162B"]]

  
  
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

  if(curPage == 1){
    var navToBubble = document.getElementById("coverPhotoBubble");
    updatePage()


    navToBubble.addEventListener("click", function(){
      curPage = 4;
      sessionStorage.setItem("currentPage", curPage);
    })
  }

  if(curPage == 2){
    const video = document.getElementById('video');
    var onlyRedButton = document.getElementById('colorChangeOnlyRed');
    var onlyBlueButton = document.getElementById('colorChangeOnlyBlue');
    var onlyGreenButton = document.getElementById('colorChangeOnlyGreen');
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

        pixelMatrix.push([red, green, blue, a]);
      }

      pixelCanvas.width = canvas.width;
      pixelCanvas.height = canvas.height;

      const pixelImage = pixelCtx.createImageData(canvas.width, canvas.height);
      const pixelImageData = pixelImage.data;

      for (let i = 0; i < pixelMatrix.length; i++) {
        const pixel = pixelMatrix[i];
        const index = i * 4;

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




  }

  if(curPage == 4){
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
  
  function updatePage(){
    navBarBackground.style.backgroundColor = colorSchemes[(curScheme-1)][0];
    settingIcon.style.backgroundColor = colorSchemes[(curScheme-1)][0];
    settingButton.style.backgroundColor = colorSchemes[(curScheme-1)][0];

    if(curPage == 0){
      var curBackgroundImage = document.getElementById("home_body");
      curBackgroundImage.style.backgroundImage = "url(HomescreenS" + curScheme + ".jpg)";
    }

    if(curPage == 1){
      var backgroundColor = document.getElementById("sensory_room_body");
      backgroundColor.style.backgroundColor =  colorSchemes[(curScheme-1)][0];
      $(function(){
        $("[id='test_box']").css({"background-color":colorSchemes[(curScheme-1)][1]});
        });
    }

    if(curPage == 2){

    }

    if(curPage == 3){

    }

    if(curPage == 4){
      var backgroundColor = document.getElementById("sensory_room_body");
      

    
      backgroundColor.style.backgroundColor =  colorSchemes[(curScheme-1)][0];

      $(function(){
        $("[id='test_box']").css({"background-color":colorSchemes[(curScheme-1)][1]});
        });

        $(function(){
          $("[class='customButton']").css({"background-color":colorSchemes[(curScheme-1)][2]});
          });

    }

    sessionStorage.setItem("currentScheme", curScheme);

  }
 
  

  
}


