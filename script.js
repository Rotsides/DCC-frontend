let button = document.getElementById("upBtn");

//function when button click bring page to the top.

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

const goUpFunction = () => {
  document.body.scrollTop = 0; // for phones
  document.documentElement.scrollTop = 0; // for browsers
};
