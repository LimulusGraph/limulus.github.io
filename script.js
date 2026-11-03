const experiment = document.querySelector('.experiment');
const description = document.querySelector('#path-description');
const pathDescriptions = {
  all: 'Shared source. Independent Python state.',
  a: 'Load → Prepare → Model A → Evaluate',
  b: 'Load → Prepare → Model B → Evaluate',
};

document.querySelectorAll('[data-path]').forEach((button) => {
  button.addEventListener('click', () => {
    experiment.dataset.universe = button.dataset.path;
    description.textContent = pathDescriptions[button.dataset.path];
    document.querySelectorAll('[data-path]').forEach((control) => {
      control.setAttribute('aria-pressed', String(control === button));
    });
  });
});

// Content stays visible if JavaScript or IntersectionObserver is unavailable.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));
  document.documentElement.classList.add('js-motion');
}
