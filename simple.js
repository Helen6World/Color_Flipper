
const colors = ["green", "aquamarine", "crimson", "rosybrown", "bisque", "khaki", "darkorchid", "hotpink", "dimgray", "sandybrown", "blue", "lightgreen", "wheat", "aqua", "pink", "darkgreen", "grey", "navy", "lightcoral", "thistle", "olive", "floralwhite", "skyblue", "gold", "orange", "chocolate", "lavender", "turquoise", "silver", "darkorange", "palevioletred", "azure", "black", "papayawhip", "darkkhaki", "mediumslateblue", "maroon", "peachpuff", "teal", "limegreen", "navajowhite"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
  // get random number between 0 - 37
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random()*colors.length);
}
