document.addEventListener("DOMContentLoaded", function() {
    var headline = document.getElementById("headline");
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      var randomNumber1 = Math.floor(Math.random() * 6);
      var randomNumber2 = Math.floor(Math.random() * 6);
  
      var images = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];
  
      document.getElementById("img1").src = images[randomNumber1];
      document.getElementById("img2").src = images[randomNumber2];
  
      if (randomNumber1 > randomNumber2) {
        headline.textContent = "Player 1 is Winner Congrats!";
      } else if (randomNumber1 === randomNumber2) {
        headline.textContent = "It's a Draw";
      } else {
        headline.textContent = "Player 2 is Winner Congrats!";
      }
    } else {
      headline.textContent = "Refresh Me";
    }
  });
  