// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500 ) {
    document.getElementById("scrolldown").style.top = "0";
  } else {
    document.getElementById("scrolldown").style.top = "-75px";
  }
}
