const canvas = document.getElementById("scene");

function isWebGLAvailable() {
  try {
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
}

if (!isWebGLAvailable()) {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}


let j = 0;
let sr = ["https://player.vimeo.com/video/215984568?h=9eee30734f", "https://player.vimeo.com/video/215984159?h=225b211749", "https://player.vimeo.com/video/215988274?h=436e63755f", "https://player.vimeo.com/video/215985972?h=b8fec9038b"]

document.onkeyup = (e) => {
  e = e || window.event;

  if (e.key === " ") {
    document.getElementById("player").src = sr[j]
    if (j == sr.length-1) {
      j = 0;
    } else {
      j++;
    }
  }
}

const bg = document.getElementById("background");

let animate;

function main() {
  document.getElementById("header").classList.remove("in-out");
  document.getElementById("intro").style.display = "none";
  bg.style.display = "none";
  document.getElementById("vid").style.display = "flex";
  clearInterval(animate);
  i = 0;
}

let i = 0;

document.getElementById("skip").addEventListener("click", (e) => {
	e.preventDefault();
	main();
})

document.getElementById("again").addEventListener("click", (e) => {
	e.preventDefault();
	document.getElementById("intro").style.display = "block";
  	bg.style = `
    display: block;
    width: 100%;
		height: 100%;
		background: url("./imgs/lion.jpg") no-repeat center center fixed;
		position: absolute;
		top: 0;
		left: 0;
		background-size: cover;
		-webkit-background-size: cover;
	  `;
  	document.getElementById("vid").style.display = "none";
	text.innerText = "";
	i = 0;
	startAnimation();
})

const text = document.getElementById("text");


const words = [
  "Life-like, interactive, immersive.",
  `"The best of the best" - Dwayne The Rock Johnson`,
  "Filled with cutting-edge Dolby digital sound",
  "Incredible views, easy to use, and nano-mindmapping technology",
  `"The better version of a TV" - Gill Bates`,
  "Immerse and relax yourself in any place you want.",
  "Go wherever you want and see whatever you want to see.",
  "Found on a variety of online and retail vendors for only $1999.99 USD!"
];


function startAnimation() {
  document.getElementById("header").classList.add("in-out");
  animate = setTimeout(() => {
    text.innerText = words[i];
    i++;
    animate = setInterval(() => {
      text.innerText = words[i];
      if (i + 1 == words.length) {
        clearInterval(animate);
        setTimeout(() => {
          main();
        }, 5000);
      } else {
        i++;
      }
    }, 3000);
  }, 5000);
}

startAnimation();
