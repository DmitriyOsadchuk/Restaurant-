/* Gallery page */

/* ------- Observer #1 logic ------- */
let title1 = document.querySelector('#title-1');
let title2 = document.querySelector('#title-2');
let newsletterForm = document.querySelector('#newsletter-form');
title1.style.opacity = "0";
title2.style.opacity = "0";
newsletterForm.style.opacity = "0";

let options1 = {
  rootMargin: '0px',
  threshold: 0.2
};

function callback1(entries, observer1) {
  entries.forEach(function(entry) {
    switch (entry.target.id) {
      case "title-1":
        if (entry.intersectionRatio > 0) {
          title1.style.opacity = "1";
          title1.className += " animated deInDown";
          // Stop observing target
          observer1.unobserve(entry.target);
        }
        break;
      case "title-2":
        if (entry.intersectionRatio > 0) {
          title2.style.opacity = "1";
          title2.className += " animated fadeInUp";
          // Stop observing target
          observer1.unobserve(entry.target);
        }
        break;
      case "newsletter-form":
        if (entry.intersectionRatio > 0) {
          newsletterForm.style.opacity = "1";
          newsletterForm.className += " animated fadeInUp";
          // Stop observing target
          observer1.unobserve(entry.target);
        }
        break;
    }
  });
}

// Create an intersection observer
let observer1 = new IntersectionObserver(callback1, options1);

// Start observing 
observer1.observe(title1);
observer1.observe(title2);
observer1.observe(newsletterForm);

/* ------Observer #2 logic-------*/

let galleryItems = document.querySelectorAll('.gallery-item');



Array.from(galleryItems).forEach(galleryItem => {
  galleryItem.style.opacity = "0";
});

let options2 = {
  rootMargin: '0px',
  threshold: 0.2
};

function callback2(entries, observer2) {
  entries.forEach(function(entry) {
    if (entry.intersectionRatio > 0) {
      entry.target.style.opacity = "1";
      entry.target.className += " animated fadeInUp";
      // Stop observing target
      observer2.unobserve(entry.target);
    }
  });
}

// Create an intersection observer
let observer2 = new IntersectionObserver(callback2, options2);

// Start observing
Array.from(galleryItems).forEach(galleryItem => {
  observer2.observe(galleryItem);
});