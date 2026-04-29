document.addEventListener('DOMContentLoaded', function () {
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((element) => {
    element.style.animationPlayState = 'paused';
    observer.observe(element);
  });
});
