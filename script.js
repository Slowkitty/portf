document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById('overlay');

    overlay.addEventListener('click', function() {
        overlay.style.opacity = '0'; 
        setTimeout(function() {
            overlay.style.display = 'none'; 
        }, 500);
    });
});


document.getElementById("showSocial").addEventListener("click", function() {
    var socialContainer = document.getElementById("socialContainer");
    socialContainer.classList.toggle("hidden");
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    var circle = document.getElementById('circle');
  
    document.addEventListener('mousemove', function(e) {
      var x = e.clientX;
      var y = e.clientY;
  
      circle.style.left = x + 'px';
      circle.style.top = y + 'px';
    });
  });
  