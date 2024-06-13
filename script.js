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
  



