// Using observer: https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API#Compatibilit%C3%A9_des_navigateurs

// target : elment we want to animate
// root: element that will be the trigger when it intersects the target

// The box we want to animate
var workBoxes;

// The selector
window.addEventListener("load", function(event) {
  workBoxes = document.querySelectorAll(".work-animate");

  createObserver();
}, false);

// Creating the observer
function createObserver() {
  var observer;

  observer = new IntersectionObserver(handleIntersect);

  // We give to the observer the target to observe
  workBoxes.forEach(workBox => {
    observer.observe(workBox);
  });
}

function handleIntersect(entries, observer) {
  entries.forEach(entry => {
    entry.target.classList.toggle("animate");
  });
}
