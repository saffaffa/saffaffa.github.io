var hamburger = document.querySelector(".hamburger");

// hamburger.addEventListener("click", function(){
//     hamburger.classList.toggle("is-active");
//     console.log('clicked');
// });

/* Open when someone clicks on the span element */
function openNav(){
    hamburger.classList.toggle("is-active");
    document.getElementById("myNav").style.width = "100%";
    console.log('opened');
};
  
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  hamburger.classList.toggle("is-active");
  document.getElementById("myNav").style.width = "0%";
  console.log('closed');
}