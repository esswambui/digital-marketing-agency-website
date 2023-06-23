$(function() {
    $(document).scroll(function() {
        var $nav = $('.nav');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});



const menu = document.getElementById("bar")
const navBar = document.getElementById("navbar")
const closeBar = document.getElementById("close-bar")
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
      closeBar.style.display= "block"
    }else{
      navBar.style.right = "-36rem";
      socials.style.right = "-36rem";
      closeBar.style.display= "none"
    }
 }


  

   // Get the modal
   const modal = document.getElementById("myModal");
   const popupBtn = document.getElementById("popup-btn");

   // Get the <span> element that closes the modal
   const span = document.getElementsByClassName("close")[1];
  //  var textAreas = document.getElementsByClassName("text-area");

   // Function to display the modal
   function displayModal() {
       modal.style.display = "block";
   }

   // Function to disappear the modal
   function disappearModal() {
       modal.style.display = "none";
   }

   // Wait for 25 seconds before displaying the modal
   setTimeout(displayModal, 25000);


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


// Prevent page reload after submitting to netlify
document.getElementById('popupForm').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  submitForm(); // Custom function to handle form submission asynchronously
});

const submitForm = () => {
  const form = document.getElementById('popupForm');
  const successMessage = document.getElementById('popupSuccessMessage');

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
  })
    .then((response) => {
        // Handle the successful form submission
        successMessage.style.display = 'block';
        form.reset(); 
        setTimeout(disappearModal, 3000);

    })
    .catch((error) => {
      // Handle any error that occurred during the request
      console.error('Error submitting the form:', error);
    });
  };

// Prevent page reload after submitting to netlify
document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  submitContactForm(); // Custom function to handle form submission asynchronously
});



const submitContactForm = () => {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('contactSuccessMessage');
  
  function disappearMessage() {
    successMessage.style.display = "none";
  }

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
  })
    .then((response) => {
        // Handle the successful form submission
        successMessage.style.display = 'block';
        form.reset(); 
        setTimeout(disappearMessage, 2000);

    })
    .catch((error) => {
      // Handle any error that occurred during the request
      console.error('Error submitting the form:', error);
    });
  };