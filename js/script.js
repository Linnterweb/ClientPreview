$(document).ready(function() {
  new WOW().init();

  // Add smooth scrolling to all links
  // $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    // if (this.hash !== "") {
      // Prevent default anchor click behavior
      // event.preventDefault();

      // Store hash
      // var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      // $("html, body").animate(
        // {
          // scrollTop: $(hash).offset().top - 110
        // },
        // 800,
        // function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          // window.location.hash = hash;
        // }
      // );
    // } // End if
  // });

  // $(".navbar-brand img").click(function() {
  //   $("body, html").animate({ scrollTop: 0 }, 1000);
  // });

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  // var btn = document.getElementById("start-now");
  // var btn2 = document.getElementById("start-now2");
  // var btn3 = document.getElementById("start-now3");
  var btns = document.getElementsByClassName("modal-btn");
  // var btn = document.getElementsByClassName("modal-btn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  for (i=0;i<btns.length;i++) {
    btns[i].onclick=function() {
      modal.style.display="block";
    }
  }
  // btn.onclick = function() {
  //   modal.style.display = "block";
  // };
  // btn2.onclick = function() {
  //   modal.style.display = "block";
  // };
  // btn3.onclick = function() {
  //   modal.style.display = "block";
  // };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
