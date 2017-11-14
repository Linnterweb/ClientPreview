// $(document).ready(function() {
//   var line1 = {
//     strings: ["Around Town"],
//     typeSpeed: 40
//   };
//   var line2 = {
//     strings: ["Across the State"],
//     typeSpeed: 40
//   };
//   var line3 = {
//     strings: ["Nationwide"],
//     typeSpeed: 40
//   };
//   var options = {
//       strings: ["Around Town", "Across the State", "Nationwide"],
//       typeSpeed: 40,
//     }
//   // function typer() {
//   //   setTimeout(function() {
//   //     var typed1 = new Typed("#typing1", line1);
//   //   }, 300);
//   //   setTimeout(function() {
//   //     var typed2 = new Typed("#typing2", line2);
//   //   }, 1300);
//   //   setTimeout(function() {
//   //     var typed3 = new Typed("#typing3", line3);
//   //   }, 2600);
//   // }
//   // typer();
//   var typed = new Typed("#typing2", options);
// });

$(function () {
  
              $("#typing2").typed({
                  strings: ["Around Town", "Across the State", "Nationwide"],
                  typeSpeed: 30, // typing speed
                  backDelay: 500, // pause before backspacing
                  callback: function () { $(this) }
              });
  });
