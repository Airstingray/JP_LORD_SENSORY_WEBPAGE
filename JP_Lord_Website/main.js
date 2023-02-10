window.onload = function() {
    var container = document.getElementById("bubbleContainer");
    setInterval(function() {
      var distance = 0;
      var size = Math.random() * 50;
      var bubble = document.createElement("div");
      bubble.classList.add("bubble");
      bubble.style.left = ((Math.random() * 60) +20) + "%";
      bubble.style.bottom = "0";
      bubble.style.width = size + "px";
      bubble.style.height = size + "px";
      container.appendChild(bubble);
      setInterval(function() {
        if(distance < 500){
            distance += 1;
            bubble.style.bottom = parseInt(bubble.style.bottom) + 1 + "px";
        }else{
            bubble.style.visibility = "hidden"
        }
           
      }, 50);
    }, 500);
  };
  