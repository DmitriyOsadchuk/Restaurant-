/* Contact page */
let title1Directions = document.querySelector('#title-1-directions');
let title2Directions = document.querySelector('#title-2-directions');
let description = document.querySelector('#description');
let newsletterForm = document.querySelector('#newsletter-form');
title1Directions.style.opacity = "0";
title2Directions.style.opacity = "0";
description.style.opacity = "0";
newsletterForm.style.opacity = "0";

let options = {
  rootMargin: '0px',
  threshold: 0.2
};

function callback(entries, observer) {
  entries.forEach(function(entry) {
    switch (entry.target.id) {
      case "title-1-directions":
        if (entry.intersectionRatio > 0) {
          title1Directions.style.opacity = "1";
          title1Directions.className += " animated fadeInDown";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "title-2-directions":
        if (entry.intersectionRatio > 0) {
          title2Directions.style.opacity = "1";
          title2Directions.className += " animated fadeInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "description":
        if (entry.intersectionRatio > 0) {
          description.style.opacity = "1";
          description.className += " animated fadeInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
      case "newsletter-form":
        if (entry.intersectionRatio > 0) {
          newsletterForm.style.opacity = "1";
          newsletterForm.className += " animated fadeInUp";
          // Stop observing target
          observer.unobserve(entry.target);
        }
        break;
    }
  });
}

// Create an intersection observer
let observer = new IntersectionObserver(callback, options);

// Start observing 
observer.observe(title1Directions);
observer.observe(title2Directions);
observer.observe(description);
observer.observe(newsletterForm);