//    <!-- script for wedding section  -->

   // Script to open and close sidebar
   function w3_open() {
     document.getElementById("myOverlay").style.display = "block";
   }

   function w3_close() {

     document.getElementById("myOverlay").style.display = "none";
   }

   // Modal Image Gallery
   function onClick(element) {
     document.getElementById("img01").src = element.src;
     document.getElementById("modal01").style.display = "block";
     var captionText = document.getElementById("caption");
     captionText.innerHTML = element.alt;
   }

//  <!-- script for baby section -->

     // Script to open and close sidebar
     function w3_open() {
       document.getElementById("mySidebar").style.display = "block";
       document.getElementById("myOverlay").style.display = "block";
     }

     function w3_close() {
       document.getElementById("mySidebar").style.display = "none";
       document.getElementById("myOverlay").style.display = "none";
     }

     // Modal Image Gallery
     function onClick(element) {
       document.getElementById("img01").src = element.src;
       document.getElementById("modal01").style.display = "block";
       var captionText = document.getElementById("caption");
       captionText.innerHTML = element.alt;
     }
 


// <!-- script for flipbook -->
// <!-- script for flipbook -->


  function loadApp() {
  
    var flipbook = $('.flipbook');
  
     // Check if the CSS was already loaded
    
    if (flipbook.width()==0 || flipbook.height()==0) {
      setTimeout(loadApp, 10);
      return;
    }
  
    $('.flipbook .double').scissor();
  
    // Create the flipbook
  
    $('.flipbook').turn({
        // Elevation
  
        elevation: 50,
        
        // Enable gradients
  
        gradients: true,
        
        // Auto center this flipbook
  
        autoCenter: true
  
    });
  }
  
  // Load the HTML4 version if there's not CSS transform
  
  yepnope({
    test : Modernizr.csstransforms,
    yep: ['../js/libs/turn.js'],
    nope: ['../js/libs/turn.html4.js'],
    both: ['../js/libs/scissor.js', '../css/gallary.css'],
    complete: loadApp
  });
  
  



