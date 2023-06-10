$(function() {
    $(document).scroll(function() {
        var $nav = $('.nav');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});



const menu = document.getElementById("bar")
const navBar = document.getElementById("navbar")
const socials = document.getElementById("socials")
// Smooth scrolling with offset
document.querySelectorAll(' a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      navBar.style.right = "-36rem";
      socials.style.right = "-36rem";

      const offset = 150; // Change this value to adjust the offset
      
      const target = document.querySelector(this.getAttribute('href'));
      const topOffset = target.getBoundingClientRect().top + window.pageYOffset;
      
      window.scrollTo({
        top: topOffset - offset,
        behavior: 'smooth'
      });
    });
  });

  //Hamburger menu
 navBar.style.right = "-36rem";

 menu.onclick = function(){
    if(navBar.style.right == "-36rem"){
      navBar.style.right = "0";
      socials.style.right = "0";
    }else{
      navBar.style.right = "-36rem";
      socials.style.right = "-36rem";
    }
 }


  

   // Get the modal
   const modal = document.getElementById("myModal");
   const popupBtn = document.getElementById("popup-btn");

   // Get the <span> element that closes the modal
   const span = document.getElementsByClassName("close")[0];
  //  var textAreas = document.getElementsByClassName("text-area");

   // Function to display the modal
   function displayModal() {
  //   for (var i = 0; i < textAreas.length; i++) {
  //     textAreas[i].style.display = "none";
  // }
       modal.style.display = "block";
      
   }

   // Wait for 10 seconds before displaying the modal
   setTimeout(displayModal, 5000);


   // When the user starts scrolling, display the modal
  //  window.addEventListener("scroll", displayModal);

   // When the user clicks button, display the modal
    popupBtn.addEventListener("click", displayModal);

   // When the user clicks on <span> (x), close the modal
   span.onclick = function () {
       modal.style.display = "none";
   };

   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function (event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   };