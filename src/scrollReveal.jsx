import ScrollReveal from 'scrollreveal';

const sr = ScrollReveal({
  origin: 'bottom',
  distance: '68px',
  duration: 2000,
  delay: 400,
  // reset: true,
});

// Apply ScrollReveal to specific elements
const revealElements = () => {
  sr.reveal('.hero-title', {
    origin: 'top',

  });

  sr.reveal('.hero-description');
  sr.reveal('.features', {
    interval: 100,
    delay: 600,
    origin: "bottom",
    distance: "100px"
  });
  sr.reveal('.first', {
    origin: 'top',
  });
  sr.reveal('.second');
  sr.reveal('.footer');
  sr.reveal('.third', {
    origin: 'top',
  });
  sr.reveal('.hero-buttons', {
    origin: 'top',

  });
  sr.reveal('.hero-buttons2', {
    origin: 'bottom',
    distance: '50px',
    duration: 1200,
    delay: 400,
  });

  sr.reveal('.hero-video', {
    origin: 'top',
    distance: '100px',
    duration: 1500,
    delay: 500,
  });
  sr.reveal('.left', {
    origin: 'left',
    distance: '100px',
    duration: 1500,
    delay: 500,
  });
  sr.reveal('.right', {
    origin: 'right',
    distance: '100px',
    duration: 1500,
    delay: 500,
  });

};

export default revealElements;
